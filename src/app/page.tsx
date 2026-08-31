import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ProofStrip } from "@/components/ProofStrip";

// ─── CONFIGURATION ────────────────────────────────────────────────────────────
// Update PERSONAL_LINKEDIN_URL with your personal LinkedIn profile URL
// e.g. "https://www.linkedin.com/in/kavoosh-mohajeri"
const PERSONAL_LINKEDIN_URL = "https://www.linkedin.com/in/kavoosh-mohajeri"; // ← UPDATE IF DIFFERENT
const COMPANY_LINKEDIN_URL  = "https://www.linkedin.com/company/mobtronic-llc/";
const BOOKING_URL           = "https://outlook.office.com/book/G324d680a42d74a9f8a3782d847317bf3@Katalystvc.com/?ismsaljsauthenabled";
// ──────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <section className="bg-zinc-900 text-white py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">

            {/* Positioning pill */}
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Healthcare M&amp;A · Domain &amp; Cloud Migrations · FHIR/TEFCA · Fractional CTO
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              Your Acquisition Is Only as Strong as<br />
              <span className="text-blue-400">the Infrastructure Behind It.</span>
            </h1>

            <p className="text-xl md:text-2xl mb-6 text-zinc-300 font-light max-w-3xl mx-auto">
              Post-close chaos—fragmented domains, siloed tenants, legacy EHRs, and shadow IT—destroys M&amp;A value faster than any market shift.
              I architect the migration from that chaos to a unified, AI-ready cloud environment. Quickly.
            </p>

            {/* Specific capability callouts */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                "Active Directory & Domain Migrations",
                "Microsoft 365 Tenant Consolidation",
                "EHR Cloud Migration",
                "FHIR/TEFCA Interoperability",
                "Post-Acquisition Network Deployment",
                "Zero-Downtime Workflow Cutover",
              ].map((cap) => (
                <span
                  key={cap}
                  className="text-xs font-medium bg-zinc-800 border border-zinc-700 text-zinc-300 px-3 py-1.5 rounded-full"
                >
                  {cap}
                </span>
              ))}
            </div>

            <p className="text-sm text-zinc-500 mb-10">
              Trusted by three of the world&apos;s top medical device manufacturers and the largest global beverage &amp; bottling conglomerates.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* PRIMARY */}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg shadow-blue-900/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Schedule a Discovery Call
              </a>

              {/* SECONDARY */}
              <a
                href="#projects"
                className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg border border-zinc-700"
              >
                See the Results
              </a>

              {/* TERTIARY */}
              <Link
                href="/blog"
                className="inline-block bg-transparent border border-zinc-600 hover:bg-zinc-800 hover:border-zinc-500 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                Read the Blog
              </Link>
            </div>
          </div>
        </section>

        {/* ── 2. PROOF STRIP ───────────────────────────────────────────────── */}
        <ProofStrip />

        {/* ── 3. WHO THIS IS FOR ───────────────────────────────────────────── */}
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
                  pain: "You've closed a deal and inherited six EHRs, two AD forests, three M365 tenants, and a Shadow IT ecosystem built by clinical staff. You need a consolidation roadmap—before the integration timeline slips and vendor contracts auto-renew.",
                },
                {
                  icon: "☁️",
                  title: "HealthTech Founders & CTOs",
                  pain: "You're onboarding enterprise health system clients and hitting FHIR compliance walls, TEFCA readiness gaps, and cloud architecture decisions that need to be right the first time. You need fractional CTO-level guidance without the full-time cost.",
                },
                {
                  icon: "🏦",
                  title: "PE Operating Partners",
                  pain: "You've closed a healthcare or enterprise tech deal and need the portfolio company's infrastructure assessed, stabilized, and migrated to a centralized cloud tenant—before the board asks why Year 1 IT costs are 40% over plan.",
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

        {/* ── 4. ABOUT ─────────────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-white text-zinc-900" id="about">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-4 text-center">Leadership &amp; Trajectory</h2>
            <div className="prose prose-lg max-w-none text-zinc-700">
              <p className="lead text-2xl font-medium text-zinc-900 mb-6">
                I step into high-stakes, highly regulated environments and engineer the systems that bring stability, security, and scale—then hand you back the wheel with clear documentation and a team that knows how to run it.
              </p>
              <p>
                My background sits at a rare intersection: an Executive Master of Health Administration, an MIT CTO Professional Certificate, and hands-on delivery across Fortune 100 infrastructure, healthcare M&amp;A integrations, and AI-native system architecture. This means I understand the boardroom pressure, the regulatory landmines, and the network topology—simultaneously.
              </p>
              <div className="mt-10 grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100 shadow-sm">
                  <h3 className="font-bold text-xl mb-2 text-zinc-900">MIT Professional Education</h3>
                  <p className="text-sm">Chief Technology Officer Professional Certificate. Executive technology strategy, innovation leadership, and organizational transformation.</p>
                </div>
                <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100 shadow-sm">
                  <h3 className="font-bold text-xl mb-2 text-zinc-900">Executive MHA</h3>
                  <p className="text-sm">Master of Health Administration. Deep fluency in regulatory compliance, healthcare operations, and payer/provider institutional strategy.</p>
                </div>
                <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100 shadow-sm">
                  <h3 className="font-bold text-xl mb-2 text-zinc-900">B.S. Biomedical Sciences</h3>
                  <p className="text-sm">Analytical rigor and scientific methodology applied to infrastructure problem-solving in regulated, data-sensitive environments.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. SERVICES ──────────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-zinc-900">How I Solve the Problems Others Can&apos;t</h2>
            <p className="text-center text-zinc-500 mb-12 max-w-2xl mx-auto">Specific capabilities for specific situations. Every engagement is scoped to your exact challenge.</p>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Service 1 — Domain & Tenant Migrations */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl">🌐</div>
                <h3 className="text-xl font-bold mb-2 text-zinc-900">Domain &amp; Tenant Consolidation</h3>
                <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-3">Active Directory · M365 · Azure AD · Identity Migration</p>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  Post-acquisition environments routinely surface multiple Active Directory forests, fragmented Microsoft 365 tenants, and incompatible identity stores. I architect and execute the full migration—AD domain joins, M365 tenant-to-tenant moves, Exchange Online mailbox migrations, SharePoint consolidation, and conditional access policy unification—with zero mailbox loss and minimal end-user disruption.
                </p>
                <ul className="mt-4 space-y-1 text-xs text-zinc-500">
                  <li>✓ AD Forest consolidation &amp; trust removal</li>
                  <li>✓ M365 tenant-to-tenant migration (GDAP compliant)</li>
                  <li>✓ Hybrid Azure AD join rollouts</li>
                  <li>✓ DNS cutover &amp; MX record migration planning</li>
                </ul>
              </div>

              {/* Service 2 — Healthcare M&A EHR */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl">🏥</div>
                <h3 className="text-xl font-bold mb-2 text-zinc-900">EHR Cloud Migration &amp; M&amp;A Integration</h3>
                <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-3">EHR Consolidation · Cloud Migration · Zero Downtime</p>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  Healthcare acquisitions almost always surface fragmented EHR landscapes—multiple platforms, redundant vendor contracts, and clinical workflows built around the wrong source of truth. I consolidate multi-EHR environments onto single-tenant cloud architectures, eliminate shadow IT, and orchestrate zero-downtime cutovers using automated pipeline tooling.
                </p>
                <ul className="mt-4 space-y-1 text-xs text-zinc-500">
                  <li>✓ Multi-EHR to single-tenant consolidation</li>
                  <li>✓ HL7 / FHIR data migration &amp; interface rebuilds</li>
                  <li>✓ Vendor contract rationalization ($525K+ saved)</li>
                  <li>✓ Clinical workflow change management</li>
                </ul>
              </div>

              {/* Service 3 — Network Deployment */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl">🛡️</div>
                <h3 className="text-xl font-bold mb-2 text-zinc-900">Post-Acquisition Network Deployment &amp; Security</h3>
                <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-3">Network Architecture · Segmentation · Ransomware Recovery</p>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  Acquired networks are rarely production-ready. I assess, segment, and re-architect site infrastructure—deploying hardened network configurations, replacing end-of-life perimeter devices, implementing Zero Trust segmentation, and establishing repeatable standards across newly added locations. For crisis situations, I&apos;ve led ransomware remediation and full network recovery for some of the world&apos;s largest enterprises.
                </p>
                <ul className="mt-4 space-y-1 text-xs text-zinc-500">
                  <li>✓ Multi-site network standardization &amp; re-IP</li>
                  <li>✓ SD-WAN and Meraki/Fortinet deployment</li>
                  <li>✓ Zero Trust segmentation (clinical vs. admin)</li>
                  <li>✓ Ransomware remediation &amp; recovery protocols</li>
                </ul>
              </div>

              {/* Service 4 — FHIR/TEFCA */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl">🔗</div>
                <h3 className="text-xl font-bold mb-2 text-zinc-900">FHIR/TEFCA Compliance &amp; Fractional CTO</h3>
                <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-3">QHIN Onboarding · HL7 FHIR R4 · Executive Strategy</p>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  Interoperability mandates are accelerating—and they&apos;re now tied directly to payer contracts and CMS program participation. I architect FHIR R4-compliant API layers, guide TEFCA/QHIN onboarding, and provide ongoing Fractional CTO leadership for health systems and HealthTech companies that need senior technical decision-making without the full-time cost.
                </p>
                <ul className="mt-4 space-y-1 text-xs text-zinc-500">
                  <li>✓ FHIR R4 API gap assessment &amp; remediation</li>
                  <li>✓ TEFCA readiness &amp; QHIN onboarding strategy</li>
                  <li>✓ Prior authorization FHIR workflow implementation</li>
                  <li>✓ Fractional CTO: board/investor technical representation</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ── 6. CASE STUDIES ──────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-white" id="projects">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-zinc-900">Results That Speak</h2>
            <p className="text-center text-zinc-500 mb-12 max-w-2xl mx-auto">Real engagements. Real outcomes. Client names withheld by agreement.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Case 1 */}
              <div className="border border-zinc-200 rounded-2xl p-6 bg-zinc-50 flex flex-col justify-between shadow-sm hover:border-blue-300 hover:shadow-md transition-all">
                <div>
                  <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider block mb-2">Infrastructure Security · Network Remediation</span>
                  <h3 className="text-xl font-bold text-zinc-950 mb-2">Fortune 100 Ransomware Recovery</h3>
                  <p className="text-zinc-500 text-xs font-semibold mb-3">
                    Top 3 Global Medical Device Manufacturers &amp; Top Global Beverage Conglomerate
                  </p>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    Enterprise-scale ransomware remediation and critical network recovery across global infrastructure. Systems isolated, lateral movement mapped, and critical operations restored within 72 hours—zero recurrence.
                  </p>
                </div>
                <Link href="/case-studies/network-remediation" className="text-blue-600 font-semibold text-sm hover:underline">
                  View Case Study →
                </Link>
              </div>

              {/* Case 2 */}
              <div className="border border-zinc-200 rounded-2xl p-6 bg-zinc-50 flex flex-col justify-between shadow-sm hover:border-blue-300 hover:shadow-md transition-all">
                <div>
                  <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider block mb-2">Healthcare M&amp;A · EHR Consolidation</span>
                  <h3 className="text-xl font-bold text-zinc-950 mb-2">Multi-Site EHR Consolidation: $525K Saved</h3>
                  <p className="text-zinc-500 text-xs font-semibold mb-3">
                    40-Location Behavioral Health Network · Post-Acquisition Integration
                  </p>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    Consolidated 8 fragmented EHR systems into a centralized single-tenant cloud architecture. \$525K in annual licensing savings, 30% faster patient data reconciliation, zero clinical downtime during cutover.
                  </p>
                </div>
                <Link href="/case-studies/financial-modernization" className="text-blue-600 font-semibold text-sm hover:underline">
                  View Case Study →
                </Link>
              </div>

              {/* Case 3 */}
              <div className="border border-zinc-200 rounded-2xl p-6 bg-zinc-50 flex flex-col justify-between shadow-sm hover:border-blue-300 hover:shadow-md transition-all">
                <div>
                  <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider block mb-2">AI Infrastructure · Local LLM Deployment</span>
                  <h3 className="text-xl font-bold text-zinc-950 mb-2">Private Multi-Agent AI Platform</h3>
                  <p className="text-zinc-500 text-xs font-semibold mb-3">
                    Enterprise Research &amp; Development · Apple Silicon · Zero External API Dependency
                  </p>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    Designed and deployed a fully local multi-agent AI execution engine—PHI never leaves the perimeter. Eliminated \$0 in monthly API costs while enabling automated research and clinical documentation workflows.
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

        {/* ── 7. LEAD MAGNET ───────────────────────────────────────────────── */}
        <section className="py-16 px-6 bg-blue-950 border-y border-blue-900">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="text-4xl mb-4">📋</div>
            <h2 className="text-2xl font-bold mb-3">Free: The Healthcare M&amp;A IT Due Diligence Checklist</h2>
            <p className="text-blue-200 mb-8 text-lg">
              47 points across 6 domains — EHR inventory, HIPAA compliance, FHIR readiness, network security, vendor contracts, and IT operations. Used across 190+ healthcare infrastructure deployments.
            </p>
            <a
              href={`mailto:info@mobtronic.org?subject=Checklist%20Request%3A%20Healthcare%20M%26A%20IT%20Due%20Diligence&body=Please%20send%20me%20the%20Healthcare%20M%26A%20IT%20Due%20Diligence%20Checklist.`}
              className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Get the Free Checklist
            </a>
            <p className="text-blue-400 text-xs mt-3">Sent within 24 hours. No spam.</p>
          </div>
        </section>

        {/* ── 8. CONTACT ───────────────────────────────────────────────────── */}
        <section className="bg-zinc-900 text-white py-20 px-6" id="contact">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Stop the Bleeding?</h2>
              <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                Whether you&apos;re mid-acquisition, staring at a compliance deadline, or know your infrastructure isn&apos;t ready for what&apos;s next—let&apos;s talk. First call is always a no-pressure conversation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">

              {/* Left: scheduling panel */}
              <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-8 text-center flex flex-col items-center gap-4">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-2xl">📅</div>
                <h3 className="text-xl font-bold text-white">Book a Discovery Call</h3>
                <p className="text-zinc-400 text-sm">
                  Pick a time directly on the calendar. We&apos;ll map your biggest infrastructure pain points and whether there&apos;s a fit—no pitch, no obligation.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-lg transition-colors text-base text-center"
                >
                  Open Scheduling Calendar →
                </a>
                <p className="text-zinc-500 text-xs">Powered by Microsoft Bookings · Typically responds within 4 hours</p>

                <div className="w-full border-t border-zinc-700 pt-4 flex flex-col gap-2.5 text-sm text-zinc-400">
                  <a href="mailto:info@mobtronic.org" className="hover:text-white transition-colors">
                    ✉️ info@mobtronic.org
                  </a>
                  <a
                    href={PERSONAL_LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    🔗 Connect with Kavoosh on LinkedIn
                  </a>
                  <a
                    href={COMPANY_LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    🏢 Mobtronic LLC on LinkedIn
                  </a>
                </div>
              </div>

              {/* Right: contact form */}
              <div>
                <ContactForm />
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-500 py-8 px-6 text-center text-sm">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4">
          <span>© {new Date().getFullYear()} Kavoosh Mohajeri | Mobtronic LLC. All rights reserved.</span>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <div className="flex items-center gap-4">
            <a href={PERSONAL_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">LinkedIn</a>
            <a href={COMPANY_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">Mobtronic LLC</a>
            <a href="mailto:info@mobtronic.org" className="hover:text-zinc-300 transition-colors">info@mobtronic.org</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
