import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ProofStrip } from "@/components/ProofStrip";

// ─── CONFIGURATION ────────────────────────────────────────────────────────────
const PERSONAL_LINKEDIN_URL = "https://www.linkedin.com/in/kavoosh-mohajeri";
const COMPANY_LINKEDIN_URL  = "https://www.linkedin.com/company/mobtronic-llc/";
const BOOKING_URL           = "https://outlook.office.com/book/G324d680a42d74a9f8a3782d847317bf3@Katalystvc.com/?ismsaljsauthenabled";
// ──────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Service",
                  "@id": "https://mobtronic.org/#service-migration",
                  "name": "Healthcare IT Infrastructure & Tenant Migration",
                  "provider": {
                    "@id": "https://mobtronic.org/#organization"
                  },
                  "description": "Specialized consulting for Microsoft 365 (M365) tenant consolidation, Active Directory domain migrations, server and database migrations (SS&C APX, Moxy) across Azure, GCP, and AWS cloud solutions, and post-acquisition network deployment (Cisco Meraki, Palo Alto).",
                  "serviceType": "IT Consulting"
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "How do you migrate Microsoft 365 tenants and Active Directory domains?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We plan and execute AD forest consolidations, M365 tenant-to-tenant migrations, and Exchange Online cutovers without disrupting patient care or business operations. We unify conditional access policies and Azure Active Directory identities."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you support complex server and financial database migrations?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we architect the underlying infrastructure required to securely transition legacy servers, email environments, and heavy databases like SS&C APX and Moxy to cloud environments including Azure, GCP, and AWS with zero-downtime cutovers."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />

        {/* 1. HERO */}
        <section className="bg-zinc-900 text-white py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Domain Migrations · Cloud Consolidation · Healthcare IT · Fractional CTO
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              We Do the Heavy Lifting.<br />
              <span className="text-blue-400">Your Team Learns to Own It.</span>
            </h1>

            <p className="text-xl md:text-2xl mb-6 text-zinc-300 font-light max-w-3xl mx-auto">
              Mobtronic provides specialized healthcare IT consulting and infrastructure modernization. We execute Microsoft 365 tenant consolidations, Active Directory domain migrations, complex database migrations (SS&C APX, Moxy) across Azure, GCP, and AWS, and post-acquisition network deployments (Cisco Meraki, Palo Alto). Unlike traditional MSPs, we focus exclusively on executing complex, high-risk technical transitions while training your internal IT teams to maintain the infrastructure long-term.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                "Domain & AD Migrations",
                "M365 Tenant Consolidation",
                "Server & Database Migrations",
                "Post-Acquisition Network Deployment",
                "Zero-Downtime Workflow Cutover",
                "Team Training & Handoff",
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
              Trusted by three of the world&apos;s top medical device manufacturers and leading global beverage conglomerates.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg shadow-blue-900/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Let&apos;s Talk About Your Project
              </a>

              <a
                href="#projects"
                className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg border border-zinc-700"
              >
                See the Work
              </a>

              <Link
                href="/blog"
                className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg border border-zinc-700"
              >
                Read the Blog
              </Link>
            </div>
          </div>
        </section>

        {/* 2. PROOF STRIP */}
        <ProofStrip />

        {/* 3. WHO THIS IS FOR */}
        <section className="py-16 px-6 bg-white text-zinc-900 border-b border-zinc-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-4">The Conversations We Have Most</h2>
            <p className="text-2xl md:text-3xl font-bold text-zinc-900 mb-10">
              Sound familiar? Let&apos;s explore it together.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                {
                  icon: "🏥",
                  title: "Healthcare M&A Teams",
                  pain: "You just acquired a practice or health system and the IT picture is messier than the diligence suggested. Multiple platforms, expiring contracts, and no clear owner. You need someone to come in, map it, and work through the consolidation with your team.",
                },
                {
                  icon: "☁️",
                  title: "Growing Businesses Moving to the Cloud",
                  pain: "You know you need to consolidate tenants, migrate domains, or move workflows to a centralized cloud environment. The problem is your internal team doesn't have the bandwidth or experience to do it safely. We handle the migration and train your people to own it afterward.",
                },
                {
                  icon: "🏦",
                  title: "PE Firms and Operating Partners",
                  pain: "You've closed a deal and need the portfolio company's infrastructure stabilized and brought up to standard. You want a trusted partner who can assess what's there, execute the plan, and leave the internal team in a better position than they started.",
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

        {/* 4. ABOUT */}
        <section className="py-20 px-6 bg-white text-zinc-900" id="about">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-4 text-center">About Mobtronic</h2>
            <div className="prose prose-lg max-w-none text-zinc-700">
              <p className="lead text-2xl font-medium text-zinc-900 mb-6">
                We are not a firm that drops a report and disappears. We get into it with you, do the parts your team can&apos;t, and make sure everyone walks away knowing how to keep it running.
              </p>
              <p>
                The engagements we enjoy most are the ones where a client has a real problem on their hands, something that has been sitting on the backlog because no one internally has the confidence or capacity to tackle it. We step in, work shoulder to shoulder with whoever is there, and get it done. When the work is finished, the goal is always for your team to feel ownership over the outcome, not dependency on us.
              </p>
              <div className="mt-10 grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100 shadow-sm">
                  <h3 className="font-bold text-xl mb-2 text-zinc-900">MIT Professional Education</h3>
                  <p className="text-sm">Chief Technology Officer Professional Certificate. Executive technology strategy and building systems that organizations can actually sustain.</p>
                </div>
                <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100 shadow-sm">
                  <h3 className="font-bold text-xl mb-2 text-zinc-900">Executive MHA</h3>
                  <p className="text-sm">Master of Health Administration. Enough context to understand how healthcare organizations operate and what matters to the people running them.</p>
                </div>
                <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100 shadow-sm">
                  <h3 className="font-bold text-xl mb-2 text-zinc-900">B.S. Biomedical Sciences</h3>
                  <p className="text-sm">A foundation in working through complex, detail-heavy problems methodically, which turns out to be exactly what infrastructure work requires.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SERVICES */}
        <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-zinc-900">The Work We Do Together</h2>
            <p className="text-center text-zinc-500 mb-12 max-w-2xl mx-auto">
              These are the kinds of projects that are genuinely hard to do in-house. We come in, handle the complexity, and build your team&apos;s confidence along the way.
            </p>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl">🌐</div>
                <h3 className="text-xl font-bold mb-2 text-zinc-900">How do you migrate Microsoft 365 tenants and Active Directory domains?</h3>
                <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-3">Active Directory · Microsoft 365 · Azure AD · Identity</p>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  Acquisitions and reorgs often leave organizations with multiple Active Directory environments, separate M365 tenants, and identity systems that don&apos;t talk to each other. We plan and execute the consolidation, including domain migrations, mailbox moves, SharePoint transitions, and access policy alignment, while keeping disruption to your people as low as possible.
                </p>
                <ul className="mt-4 space-y-1 text-xs text-zinc-500">
                  <li>✓ AD forest consolidation and domain joins</li>
                  <li>✓ M365 tenant-to-tenant migration</li>
                  <li>✓ Exchange Online and SharePoint cutover</li>
                  <li>✓ Conditional access and security policy unification</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl">🏥</div>
                <h3 className="text-xl font-bold mb-2 text-zinc-900">How do you handle complex server and database migrations?</h3>
                <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-3">Azure · GCP · AWS · APX · Moxy</p>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  Moving workloads out of the on-prem data center is easy until you hit specialized, critical systems. We architect the underlying infrastructure and network routing required to securely transition servers, email environments, and heavy financial databases like SS&C APX and Moxy to cloud environments including Azure, GCP, and AWS, ensuring compliance and zero-downtime cutovers.
                </p>
                <ul className="mt-4 space-y-1 text-xs text-zinc-500">
                  <li>✓ Legacy server to cloud transitions</li>
                  <li>✓ Financial database (APX/Moxy) migrations</li>
                  <li>✓ Secure direct routing and VPN tunnels</li>
                  <li>✓ Disaster recovery and failover testing</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl">🛡️</div>
                <h3 className="text-xl font-bold mb-2 text-zinc-900">How do you handle post-acquisition network security deployments?</h3>
                <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-3">Network Architecture · Site Deployment · Security Hardening</p>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  Newly acquired locations often have networks that were never designed to connect cleanly with a parent organization. We assess the current state, design a standard that fits your environment, and deploy it across sites. We have also stepped into active security situations, including full network recovery after ransomware, and helped organizations build the internal practices to stay ahead of it.
                </p>
                <ul className="mt-4 space-y-1 text-xs text-zinc-500">
                  <li>✓ Multi-site network standardization and re-IP</li>
                  <li>✓ Firewall and perimeter device deployment</li>
                  <li>✓ Network segmentation planning</li>
                  <li>✓ Ransomware recovery and prevention practices</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl">🤝</div>
                <h3 className="text-xl font-bold mb-2 text-zinc-900">When should we hire a fractional CTO for a complex IT transition?</h3>
                <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-3">Strategic Guidance · Vendor Evaluation · Team Enablement</p>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  Sometimes what an organization needs is not another vendor but a consistent technical partner who can help them think through decisions, evaluate options honestly, and build a roadmap that their team can actually execute. We work alongside leadership on an ongoing basis, show up for the conversations that matter, and help bridge the gap between where you are and where you are trying to go.
                </p>
                <ul className="mt-4 space-y-1 text-xs text-zinc-500">
                  <li>✓ Technology roadmap development</li>
                  <li>✓ Vendor and platform evaluation</li>
                  <li>✓ Board and investor technical communication</li>
                  <li>✓ Internal team mentoring and capability building</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* 6. CASE STUDIES */}
        <section className="py-20 px-6 bg-white" id="projects">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-zinc-900">Work We Are Proud Of</h2>
            <p className="text-center text-zinc-500 mb-12 max-w-2xl mx-auto">
              A few examples of projects we have worked through with clients. Names withheld by agreement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="border border-zinc-200 rounded-2xl p-6 bg-zinc-50 flex flex-col justify-between shadow-sm hover:border-blue-300 hover:shadow-md transition-all">
                <div>
                  <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider block mb-2">Network Recovery</span>
                  <h3 className="text-xl font-bold text-zinc-950 mb-2">Critical Infrastructure Recovery</h3>
                  <p className="text-zinc-500 text-xs font-semibold mb-3">
                    Top global medical device and beverage manufacturers
                  </p>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    Stepped in during active ransomware events at two separate Fortune 100 organizations. Worked alongside internal teams to isolate affected systems, recover critical operations, and put practices in place so they were not starting from scratch the next time.
                  </p>
                </div>
                <Link href="/case-studies/network-remediation" className="text-blue-600 font-semibold text-sm hover:underline">
                  View Case Study
                </Link>
              </div>

              <div className="border border-zinc-200 rounded-2xl p-6 bg-zinc-50 flex flex-col justify-between shadow-sm hover:border-blue-300 hover:shadow-md transition-all">
                <div>
                  <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider block mb-2">Healthcare Cloud Migration</span>
                  <h3 className="text-xl font-bold text-zinc-950 mb-2">40-Site EHR Consolidation</h3>
                  <p className="text-zinc-500 text-xs font-semibold mb-3">
                    Behavioral health network, post-acquisition integration
                  </p>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    Helped a growing behavioral health organization consolidate eight clinical platforms inherited through acquisitions into one centralized cloud environment. Saved $525K per year in licensing, cut patient data reconciliation time by 30%, and trained the internal team to manage the new setup independently.
                  </p>
                </div>
                <Link href="/case-studies/financial-modernization" className="text-blue-600 font-semibold text-sm hover:underline">
                  View Case Study
                </Link>
              </div>

              <div className="border border-zinc-200 rounded-2xl p-6 bg-zinc-50 flex flex-col justify-between shadow-sm hover:border-blue-300 hover:shadow-md transition-all">
                <div>
                  <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider block mb-2">AI Infrastructure</span>
                  <h3 className="text-xl font-bold text-zinc-950 mb-2">Private AI Platform for Internal Use</h3>
                  <p className="text-zinc-500 text-xs font-semibold mb-3">
                    Enterprise research and operations team
                  </p>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    Designed and built a fully local AI system that runs entirely on the client&apos;s own hardware, no external APIs, no data leaving the building. The internal team can now run automated research and drafting workflows without relying on outside tools or incurring ongoing API costs.
                  </p>
                </div>
                <Link href="/case-studies/ai-workflows" className="text-blue-600 font-semibold text-sm hover:underline">
                  View Case Study
                </Link>
              </div>

            </div>

            <div className="text-center mt-12">
              <Link href="/case-studies" className="inline-block bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-sm">
                View Full Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* 7. LEAD MAGNET */}
        <section className="py-16 px-6 bg-blue-950 border-y border-blue-900">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="text-4xl mb-4">📋</div>
            <h2 className="text-2xl font-bold mb-3">Free: The Healthcare M&amp;A IT Due Diligence Checklist</h2>
            <p className="text-blue-200 mb-8 text-lg">
              47 questions across six areas: clinical platforms, network infrastructure, vendor contracts, security, compliance basics, and IT team readiness. A useful starting point for any acquisition situation.
            </p>
            <a
              href="mailto:info@mobtronic.org?subject=Checklist%20Request%3A%20Healthcare%20M%26A%20IT%20Due%20Diligence&body=Please%20send%20me%20the%20Healthcare%20M%26A%20IT%20Due%20Diligence%20Checklist."
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-500 transition-colors text-base shadow-lg shadow-blue-900/50 border border-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Get the Checklist
            </a>
            <p className="text-blue-400 text-xs mt-3">Sent within 24 hours. No spam.</p>
          </div>
        </section>

        {/* 8. CONTACT */}
        <section className="bg-zinc-900 text-white py-20 px-6" id="contact">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Let&apos;s Talk About What You Are Working Through</h2>
              <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                No sales pitch. If you have a project that feels too risky or complex to tackle in-house right now, let&apos;s have an honest conversation about what it would take to get it done.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">

              <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-8 text-center flex flex-col items-center gap-4">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-2xl">📅</div>
                <h3 className="text-xl font-bold text-white">Book a 20-Minute Conversation</h3>
                <p className="text-zinc-400 text-sm">
                  Pick a time that works for you. We will listen first, ask a few questions, and be straight with you about whether we are a good fit for what you need.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-lg transition-colors text-base text-center"
                >
                  Open Scheduling Calendar
                </a>
                <p className="text-zinc-500 text-xs">Powered by Microsoft Bookings · Usually responds same day</p>

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
