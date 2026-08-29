"use client";

import { useState, useEffect } from "react";

interface GatedWrapperProps {
  children: React.ReactNode;
  caseStudyTitle: string;
}

export function GatedWrapper({ children, caseStudyTitle }: GatedWrapperProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    setMounted(true);
    const unlockedList = localStorage.getItem("unlocked_case_studies");
    if (unlockedList) {
      try {
        const parsed = JSON.parse(unlockedList);
        if (Array.isArray(parsed) && parsed.includes(caseStudyTitle)) {
          setIsUnlocked(true);
        }
      } catch {
        // Fallback if parsing fails
      }
    }
  }, [caseStudyTitle]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "42687220-e3c4-459d-84dd-84025f18e990");
    formData.append("subject", `🔓 Gated Unlock: ${caseStudyTitle}`);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (data.success) {
        setIsUnlocked(true);
        // Persist unlock state
        const unlockedList = localStorage.getItem("unlocked_case_studies");
        const parsed = unlockedList ? JSON.parse(unlockedList) : [];
        if (!parsed.includes(caseStudyTitle)) {
          parsed.push(caseStudyTitle);
          localStorage.setItem("unlocked_case_studies", JSON.stringify(parsed));
        }
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Avoid hydration mismatch by rendering a safe skeleton state until mounted
  if (!mounted) {
    return (
      <div className="relative border border-zinc-200 rounded-2xl p-8 bg-zinc-50/50 min-h-[300px] flex items-center justify-center mt-8">
        <div className="text-sm text-zinc-400">Loading case study access...</div>
      </div>
    );
  }

  if (isUnlocked) {
    return <div className="animate-in fade-in duration-500">{children}</div>;
  }

  return (
    <div className="relative border border-zinc-200 rounded-2xl p-6 md:p-8 bg-zinc-50 overflow-hidden shadow-sm mt-8">
      {/* Blurred overlay of children */}
      <div className="blur-[8px] select-none opacity-20 pointer-events-none">
        {children}
      </div>

      {/* Lock screen overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 bg-zinc-50/30 backdrop-blur-[2px]">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-zinc-900 text-white p-6 md:p-8 rounded-2xl shadow-xl border border-zinc-800"
        >
          <div className="flex justify-center mb-4">
            <span className="bg-zinc-800 text-blue-400 px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider">
              🔒 Gated Architecture
            </span>
          </div>
          <h4 className="text-lg font-bold text-center mb-2">Unlock the Full Case Study</h4>
          <p className="text-zinc-400 text-xs text-center mb-6 leading-relaxed">
            Enter your details to instantly view the core methodology, full hardware execution, and architectural diagrams.
          </p>

          <input type="hidden" name="caseStudy" value={caseStudyTitle} />

          <div className="space-y-3">
            <div>
              <label htmlFor="gate-name" className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                id="gate-name"
                name="name"
                placeholder="Jane Doe"
                required
                disabled={isLoading}
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-650 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
            </div>
            <div>
              <label htmlFor="gate-email" className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">
                Work Email
              </label>
              <input
                type="email"
                id="gate-email"
                name="email"
                placeholder="jane@company.com"
                required
                disabled={isLoading}
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-650 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
            </div>
          </div>

          {error && <p className="text-xs text-red-400 mt-4 text-center">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm disabled:opacity-50 flex justify-center items-center"
          >
            {isLoading ? "Unlocking Details..." : "Unlock Technical Blueprint"}
          </button>
        </form>
      </div>
    </div>
  );
}
