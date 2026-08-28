"use client";

import { useState } from "react";

export function GatedCaseStudy() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const caseStudy = formData.get("caseStudy");

    // Client-side validation
    if (!email || typeof email !== "string" || !email.includes("@")) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    // Submit to Web3Forms
    formData.append("access_key", "42687220-e3c4-459d-84dd-84025f18e990");
    formData.append("subject", `🔓 Lead Captured: ${caseStudy}`);

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
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <div className="border border-zinc-200 rounded-2xl overflow-hidden shadow-sm relative">
      <div className="bg-zinc-900 text-white p-6 md:p-8">
        <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">
          Infrastructure Security
        </span>
        <h3 className="text-2xl font-bold mt-2">
          High Stakes Network Remediation
        </h3>
      </div>
      <div className="p-6 md:p-8 bg-zinc-50 flex flex-col md:flex-row gap-8 relative">
        <div className="flex-1">
          <h4 className="font-semibold text-zinc-900 mb-2">The Problem</h4>
          <p className="text-zinc-700 text-sm">
            Major global beverage and healthcare corporations (including Coca
            Cola and Johnson & Johnson) faced critical vulnerabilities and active
            network threats following widespread ransomware incidents.
          </p>
        </div>

        {/* The Solution - Gated or Unlocked */}
        <div className="flex-1 relative">
          <h4 className="font-semibold text-zinc-900 mb-2">
            The Solution & Impact
          </h4>

          {isUnlocked ? (
            <div className="text-zinc-700 text-sm animate-in fade-in duration-500">
              Stepped into the high pressure environment to audit, update, and
              secure critical network hardware. Executed strict remediation
              protocols and hardware updates, restoring operational integrity and
              fortifying the networks against future zero day exploits.
            </div>
          ) : (
            <>
              {/* Blurred content placeholder */}
              <p className="text-zinc-700 text-sm blur-[6px] select-none opacity-50">
                Stepped into the high pressure environment to audit, update, and
                secure critical network hardware. Executed strict remediation
                protocols and hardware updates, restoring operational integrity
                and fortifying the networks against future zero day exploits.
              </p>

              {/* Gate Overlay */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 bg-zinc-950/20 backdrop-blur-[3px] rounded-lg">
                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-sm bg-zinc-900/95 p-6 rounded-2xl shadow-xl border border-zinc-800 text-white"
                >
                  <div className="flex justify-center mb-3">
                    <span className="bg-zinc-800 text-blue-400 p-2 rounded-lg text-xs font-semibold uppercase tracking-wider">
                      🔒 Case Study Locked
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-zinc-100 mb-4 text-center">
                    Enter details to unlock the technical architecture
                  </p>
                  
                  <input
                    type="hidden"
                    name="caseStudy"
                    value="High Stakes Network Remediation"
                  />
                  
                  <div className="space-y-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      disabled={isLoading}
                      className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="name@company.com"
                      required
                      disabled={isLoading}
                      className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-red-400 mt-3 text-center">
                      {error}
                    </p>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors text-sm disabled:opacity-50 flex justify-center items-center"
                  >
                    {isLoading ? "Unlocking..." : "Unlock Full Case Study"}
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
