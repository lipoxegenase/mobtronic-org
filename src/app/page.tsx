import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ProofStrip } from "@/components/ProofStrip";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">

        {/* 1. Hero Section — Pain-Led, Outcome-First */}
        <section className="bg-zinc-900 text-white py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Credibility pill */}
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Fractional CTO · Healthcare M&amp;A Tech · FHIR/TEFCA Infrastructure
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              Your Systems Are Holding<br />
              <span className="text-blue-400">Your Growth Hostage.</span>
            </h1>

            <p className="text-xl md:text-2xl mb-4 text-zinc-300 font-light max-w-3xl mx-auto">
              Fragmented EHRs post-acquisition. FHIR/TEFCA compliance pressure. Shadow IT killing your margins.
              I architect the path from chaos to scalable, AI-ready infrastructure—fast.
            </p>

            <p className="text-sm text-zinc-500 mb-10">
              Trusted by Fortune 100 enterprises including Johnson &amp; Johnson and Coca-Cola.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* PRIMARY: Book a call — highest-intent CTA */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg shadow-blue-900/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Book a 20-Min Discovery Call
              </a>

              {/* SECONDARY: View case studies */}
              <a
                href="#projects"
                className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg border border-zinc-700"
              >
                See the Results
              </a>

              {/* TERTIARY: Blog */}
              <Link
                href="/blog"
                className="inline-block bg-transparent border border-zinc-600 hover:bg-zinc-800 hover:border-zinc-500 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                Read the Blog
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Proof Strip — Trust before they scroll */}
        <ProofStrip />

        {/* 3. Who This Is For — Buyer Self-Identification */}
        <section className="py-16 px-6 bg-white text-zinc-900 border-b border-zinc-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-4">Who I Work With</h2>
            <p className="text-2xl md:text-3xl font-bold text-zinc-900 mb-10">
              If any of these sound familiar, we should talk.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                {
                  icon: "🏥",
                  title: "Healthcare M&A Leaders",
                  pain: "You've acquired a practice or health system and inherited 6 different EHRs, conflicting vendor contracts, and a Shadow IT nightmare with no clear consolidation roadmap.",
                },
                {
                  icon: "⚡",
                  title: "HealthTech Founders & CTOs",
                  pain: "You're scaling fast but your infrastructure wasn't designed for it. FHIR/TEFCA compliance, cloud costs spiraling, and you need senior technical leadership without the $500k/yr CTO hire.",
                },
                {
                  icon: "🏦",
                  title: "PE Operating Partners",
                  pain: "You've closed a deal in healthcare or enterprise tech and need a trusted technical partner to assess, stabilize, and modernize the portfolio company's systems before the next value-creation phase.",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-lg text-zinc-900 mb-2">{item.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{item.pain}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. About Kavoosh (Leadership) */}
        <section className="py-20 px-6 bg-white text-zinc-900" id="about">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-4 text-center">Leadership &amp; Trajectory</h2>
            <div className="prose prose-lg max-w-none text-zinc-700">
              <p className="lead text-2xl font-medium text-zinc-900 mb-6">
                I step into high-stakes, highly regulated environments and engineer systems that bring stability, security, and scale—then I hand you back the wheel.
              </p>
              <p>
                My background sits at a rare intersection: an Executive Master of Health Administration, an MIT CTO Professional Certificate, and deep hands-on engineering across Fortune 100 infrastructure, healthcare M&amp;A, and AI-native system design. This means I understand the boardroom pressure, the regulatory landmines, and the technical architecture—simultaneously.
              </p>

              <div className="mt-10 grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100 shadow-sm">
                  <h3 className="font-bold text-xl mb-2 text-zinc-900">MIT Professional Education</h3>
                  <p className="text-sm">Chief Technology Officer Professional Certificate. Specialized in executive technology strategy and innovation leadership.</p>
                </div>
                <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100 shadow-sm">
                  <h3 className="font-bold text-xl mb-2 text-zinc-900">Executive MHA</h3>
                  <p className="text-sm">Master of Health Administration. Deep fluency in regulatory compliance, healthcare operations, and institutional strategy.</p>
                </div>
                <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100 shadow-sm">
                  <h3 className="font-bold text-xl mb-2 text-zinc-900">B.S. Biomedical Sciences</h3>
                  <p className="text-sm">Foundational grounding in analytical problem solving and rigorous scientific methodology applied to complex system design.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Core Competencies */}
        <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-zinc-900">How I Solve the Problems Others Can&apos;t</h2>
            <p className="text-center text-zinc-500 mb-12 max-w-2xl mx-auto">Each engagement is scoped to your exact challenge. These are the domains where I deliver measurable outcomes.</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl">☁️</div>
                <h3 className="text-xl font-bold mb-2 text-zinc-900">Healthcare M&amp;A Tech Integration</h3>
                <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-3">EHR Consolidation · Vendor Rationalization · Zero-Downtime Migration</p>
                <p className="text-zinc-700">
                  Post-acquisition technology chaos is the #1 destroyer of M&amp;A value in healthcare. I've consolidated multi-EHR environments, eliminated duplicate vendor contracts, and delivered zero-downtime migrations using <strong>Dell Boomi, Docker, and Jenkins</strong> automated pipelines—saving clients $525K+ annually in redundant licensing alone.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl">🛡️</div>
                <h3 className="text-xl font-bold mb-2 text-zinc-900">Crisis Infrastructure &amp; Security Remediation</h3>
                <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-3">Ransomware Recovery · Network Hardening · Fortune 100</p>
                <p className="text-zinc-700">
                  When systems are down and leadership needs answers, I've been the person who walks in and delivers. Enterprise-scale ransomware remediation and full network recovery for <strong>Johnson &amp; Johnson and Coca-Cola</strong>—critical infrastructure restored, zero recurrence.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl">🔗</div>
                <h3 className="text-xl font-bold mb-2 text-zinc-900">FHIR/TEFCA Compliance &amp; Interoperability</h3>
                <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-3">QHIN Onboarding · HL7 FHIR R4 · CMS Mandate Readiness</p>
                <p className="text-zinc-700">
                  Healthcare interoperability mandates are accelerating. I architect FHIR R4-compliant data pipelines and guide organizations through TEFCA/QHIN onboarding—turning regulatory pressure into a competitive moat before your competitors figure out what QHIN stands for.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl">🤖</div>
                <h3 className="text-xl font-bold mb-2 text-zinc-900">AI-Ready Infrastructure &amp; Fractional CTO</h3>
                <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-3">Local LLM Deployment · Multi-Agent Systems · Executive Strategy</p>
                <p className="text-zinc-700">
                  You don't need a $500K/yr CTO—you need one who knows your sector, shows up when it matters, and architects AI infrastructure that actually runs in regulated environments. I deploy local, privacy-first AI systems on your terms, with zero external API dependency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Projects / Case Studies */}
        <section className="py-20 px-6 bg-white" id="projects">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-zinc-900">Results That Speak</h2>
            <p className="text-center text-zinc-500 mb-12 max-w-2xl mx-auto">Real engagements. Real outcomes. Read the full breakdowns.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-zinc-200 rounded-2xl p-6 bg-zinc-50 flex flex-col justify-between shadow-sm hover:border-blue-300 hover:shadow-md transition-all">
                <div>
                  <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider block mb-2">Infrastructure Security</span>
                  <h3 className="text-xl font-bold text-zinc-950 mb-2">High-Stakes Network Remediation</h3>
                  <p className="text-zinc-500 text-xs font-semibold mb-3">Johnson &amp; Johnson · Coca-Cola · Fortune 100</p>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    Enterprise-scale ransomware remediation and critical network recovery—full infrastructure restored with zero recurrence.
                  </p>
                </div>
                <Link href="/case-studies/network-remediation" className="text-blue-600 font-semibold text-sm hover:underline">
                  View Case Study →
                </Link>
              </div>

              <div className="border border-zinc-200 rounded-2xl p-6 bg-zinc-50 flex flex-col justify-between shadow-sm hover:border-blue-300 hover:shadow-md transition-all">
                <div>
                  <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider block mb-2">Healthcare M&amp;A Tech Integration</span>
                  <h3 className="text-xl font-bold text-zinc-950 mb-2">EHR Consolidation: $525K Saved</h3>
                  <p className="text-zinc-500 text-xs font-semibold mb-3">Refresh Mental Health · Behavioral Health · Multi-Site</p>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    Consolidated 8 fragmented EHR systems into a single-tenant architecture. $525K/yr saved, 30% faster patient data reconciliation, zero downtime.
                  </p>
                </div>
                <Link href="/case-studies/financial-modernization" className="text-blue-600 font-semibold text-sm hover:underline">
                  View Case Study →
                </Link>
              </div>

              <div className="border border-zinc-200 rounded-2xl p-6 bg-zinc-50 flex flex-col justify-between shadow-sm hover:border-blue-300 hover:shadow-md transition-all">
                <div>
                  <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider block mb-2">AI Infrastructure</span>
                  <h3 className="text-xl font-bold text-zinc-950 mb-2">Private Multi-Agent AI Platform</h3>
                  <p className="text-zinc-500 text-xs font-semibold mb-3">Local LLM · Apple Silicon · Zero API Cost</p>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    Designed and deployed a fully local multi-agent AI research platform—eliminating external API dependency and ensuring complete data privacy.
                  </p>
                </div>
                <Link href="/case-studies/ai-workflows" className="text-blue-600 font-semibold text-sm hover:underline">
                  View Case Study →
                </Link>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/case-studies" className="inline-block bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-sm">
                View Full Case Studies Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* 7. Lead Magnet Section */}
        <section className="py-16 px-6 bg-blue-950 border-y border-blue-900">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="text-4xl mb-4">📋</div>
            <h2 className="text-2xl font-bold mb-3">Free Download: The Healthcare M&amp;A IT Checklist</h2>
            <p className="text-blue-200 mb-8 text-lg">
              The 47-point due diligence &amp; integration framework used across 190+ deployments. Know exactly what to audit, consolidate, and secure—before it costs you millions.
            </p>
            <a
              href="mailto:info@mobtronic.org?subject=Download Request: Healthcare M%26A IT Checklist&body=Please send me the Healthcare M%26A IT Due Diligence Checklist."
              className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Get the Free Checklist
            </a>
            <p className="text-blue-400 text-xs mt-3">No spam. Just the framework, sent to your inbox within 24 hours.</p>
          </div>
        </section>

        {/* 8. Contact / Let's Connect */}
        <section className="bg-zinc-900 text-white py-20 px-6" id="contact">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Stop the Bleeding?</h2>
              <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                Whether you're mid-acquisition, staring at a compliance deadline, or just know your infrastructure isn't ready for what's next—let's talk. First call is always a no-pressure conversation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left: scheduling CTA */}
              <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-8 text-center flex flex-col items-center gap-4">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-2xl">📅</div>
                <h3 className="text-xl font-bold text-white">Book a 20-Minute Discovery Call</h3>
                <p className="text-zinc-400 text-sm">
                  Pick a time that works for you. We'll map out your biggest infrastructure pain points and whether there's a fit—no pitch, no obligation.
                </p>
                {/* PLACEHOLDER: Replace with your actual Calendly/Cal.com/Bookings URL */}
                <a
                  href="mailto:info@mobtronic.org?subject=Discovery Call Request&body=I'd like to schedule a 20-minute discovery call."
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-lg transition-colors text-base text-center"
                >
                  Schedule Now →
                </a>
                <p className="text-zinc-500 text-xs">Typically responds within 4 business hours</p>

                <div className="w-full border-t border-zinc-700 pt-4 flex flex-col gap-2 text-sm text-zinc-400">
                  <a href="mailto:info@mobtronic.org" className="hover:text-white transition-colors">
                    ✉️ info@mobtronic.org
                  </a>
                  <a
                    href="https://www.linkedin.com/company/mobtronic-llc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    🔗 Connect on LinkedIn
                  </a>
                </div>
              </div>

              {/* Right: form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-500 py-8 px-6 text-center text-sm">
        <div className="max-w-5xl mx-auto">
          © {new Date().getFullYear()} Kavoosh Mohajeri | Mobtronic LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
