"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "42687220-e3c4-459d-84dd-84025f18e990");
    formData.append("subject", "✉️ New Lead: Let's Connect Form");

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
        setStatus("success");
        event.currentTarget.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 max-w-md mx-auto text-left">
      <h3 className="text-xl font-semibold text-white mb-2 text-center">Send a Message</h3>
      <p className="text-zinc-400 text-sm text-center mb-6">
        Let's discuss how we can build robust, scalable infrastructure for your organization.
      </p>

      {status === "success" ? (
        <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-center">
          <p className="font-semibold mb-1">Message Sent Successfully!</p>
          <p className="text-xs text-zinc-400">I will get back to you as soon as possible.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-sm text-blue-400 hover:text-blue-300 font-medium underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={status === "loading"}
              placeholder="Your Name"
              className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={status === "loading"}
              placeholder="name@company.com"
              className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              disabled={status === "loading"}
              placeholder="Describe your project, timeline, or consultation needs..."
              className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-all resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-xs text-red-400 text-center">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm disabled:opacity-50 flex justify-center items-center"
          >
            {status === "loading" ? "Sending..." : "Submit Inquiry"}
          </button>
        </form>
      )}
    </div>
  );
}
