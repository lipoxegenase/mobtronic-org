import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="bg-zinc-900 text-white py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              Strategic Technology Leadership & Enterprise Systems Engineering.
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-zinc-300 font-light">
              Bridging the gap between complex infrastructure, cloud migrations, and robust network security.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#projects"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg animate-fade-in"
              >
                Explore My Work
              </a>
              <Link
                href="/blog"
                className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg border-2 border-transparent"
              >
                Read the Blog
              </Link>
              <a
                href="#contact"
                className="inline-block bg-transparent border-2 border-zinc-600 hover:bg-zinc-800 hover:border-zinc-500 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </section>

        {/* 2. About Kavoosh (Leadership) */}
        <section className="py-20 px-6 bg-white text-zinc-900" id="about">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center uppercase tracking-wider text-zinc-500 text-sm">Leadership & Trajectory</h2>
            <div className="prose prose-lg max-w-none text-zinc-700">
              <p className="lead text-2xl font-medium text-zinc-900 mb-6">
                As a senior technology consultant, my approach is rooted in understanding both the granular technical details and the macro business strategies that drive enterprise growth.
              </p>
              <p>
                My trajectory has been defined by stepping into high stakes, highly regulated environments and engineering systems that bring stability, security, and scale. Whether architecting cloud migrations or managing edge analytics, I bridge the gap between engineering execution and executive vision.
              </p>
              
              <div className="mt-10 grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100 shadow-sm">
                  <h3 className="font-bold text-xl mb-2 text-zinc-900">MIT Professional Education</h3>
                  <p className="text-sm">Chief Technology Officer Professional Certificate. Specialized in executive technology strategy and innovation leadership.</p>
                </div>
                <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100 shadow-sm">
                  <h3 className="font-bold text-xl mb-2 text-zinc-900">Executive MHA</h3>
                  <p className="text-sm">Master of Health Administration. Empowering a unique capability to navigate and architect solutions within highly regulated, complex industries.</p>
                </div>
                <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100 shadow-sm">
                  <h3 className="font-bold text-xl mb-2 text-zinc-900">B.S. Biomedical Sciences</h3>
                  <p className="text-sm">Foundational background in analytical problem solving and rigorous scientific methodology.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Competencies */}
        <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-zinc-900">Core Competencies & Services</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Integration & Cloud */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl">☁️</div>
                <h3 className="text-xl font-bold mb-4 text-zinc-900">Enterprise Integration & Cloud Migrations</h3>
                <p className="text-zinc-700">
                  Extensive experience upgrading and managing enterprise portfolio accounting software (APX, Moxy). 
                  Specialized in managing complex cloud deployments and integrating disparate enterprise systems leveraging 
                  tools like <strong>Dell Boomi, Docker, and Jenkins</strong> for continuous integration and delivery.
                </p>
              </div>

              {/* Security & Remediation */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl">🛡️</div>
                <h3 className="text-xl font-bold mb-4 text-zinc-900">Infrastructure, Security & Remediation</h3>
                <p className="text-zinc-700">
                  Critical experience stepping into high stakes, crisis environments to update and secure network hardware. 
                  Successfully executed enterprise scale ransomware remediation and network recovery protocols for 
                  Fortune 100 level enterprises including <strong>Johnson & Johnson and Coca Cola</strong>.
                </p>
              </div>

              {/* Database Engineering */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl">🗄️</div>
                <h3 className="text-xl font-bold mb-4 text-zinc-900">Database Automation & Engineering</h3>
                <p className="text-zinc-700">
                  Deep backend engineering strength focused on database architecture, optimization, and automation. 
                  Expertise in utilizing <strong>SQL Server, SSIS, and PowerShell scripting</strong> to automate data workflows 
                  and streamline complex database operations across enterprise environments.
                </p>
              </div>

              {/* Edge Analytics */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl">📊</div>
                <h3 className="text-xl font-bold mb-4 text-zinc-900">Edge Analytics & Web Management</h3>
                <p className="text-zinc-700">
                  Advanced capability in managing highly available domain infrastructure and analyzing network traffic. 
                  Proficient in leveraging <strong>Cloudflare edge analytics</strong> to optimize routing, enhance security 
                  postures, and maintain robust web management protocols for high traffic assets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Projects / Case Studies */}
        <section className="py-20 px-6 bg-white" id="projects">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-zinc-900">Featured Case Studies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="border border-zinc-200 rounded-2xl p-6 bg-zinc-50 flex flex-col justify-between shadow-sm hover:border-zinc-300 hover:shadow transition-all">
                <div>
                  <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider block mb-2">Infrastructure Security</span>
                  <h3 className="text-xl font-bold text-zinc-950 mb-3">High-Stakes Network Remediation</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    Auditing and securing critical global network hardware for global corporations post-ransomware.
                  </p>
                </div>
                <Link
                  href="/case-studies/network-remediation"
                  className="text-blue-600 font-semibold text-sm hover:underline"
                >
                  View Case Study &rarr;
                </Link>
              </div>

              {/* Card 2 */}
              <div className="border border-zinc-200 rounded-2xl p-6 bg-zinc-50 flex flex-col justify-between shadow-sm hover:border-zinc-300 hover:shadow transition-all">
                <div>
                  <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider block mb-2">Cloud Integration</span>
                  <h3 className="text-xl font-bold text-zinc-950 mb-3">Financial Systems Modernization</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    Migrating portfolio accounting software to the cloud using automated pipelines with zero business downtime.
                  </p>
                </div>
                <Link
                  href="/case-studies/financial-modernization"
                  className="text-blue-600 font-semibold text-sm hover:underline"
                >
                  View Case Study &rarr;
                </Link>
              </div>

              {/* Card 3 */}
              <div className="border border-zinc-200 rounded-2xl p-6 bg-zinc-50 flex flex-col justify-between shadow-sm hover:border-zinc-300 hover:shadow transition-all">
                <div>
                  <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider block mb-2">Machine Learning & Automation</span>
                  <h3 className="text-xl font-bold text-zinc-950 mb-3">Advanced AI Tool-Calling</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    Engineering local multi-agent AI research platforms running securely on Apple Silicon.
                  </p>
                </div>
                <Link
                  href="/case-studies/ai-workflows"
                  className="text-blue-600 font-semibold text-sm hover:underline"
                >
                  View Case Study &rarr;
                </Link>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/case-studies"
                className="inline-block bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-sm"
              >
                View Case Studies Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Contact / Let's Connect */}
        <section className="bg-zinc-900 text-white py-20 px-6 text-center" id="contact">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-lg text-zinc-300 mb-10">
              I am currently open to discussing executive technology roles, fractional CTO consulting, and complex enterprise engineering projects. Let's discuss how we can build robust, scalable infrastructure for your organization.
            </p>
            <div className="space-y-8">
              <ContactForm />
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-zinc-400">
                <a
                  href="mailto:info@mobtronic.org"
                  className="hover:text-white transition-colors"
                >
                  Or email directly: info@mobtronic.org
                </a>
                <span className="hidden sm:inline text-zinc-600">|</span>
                <a
                  href="https://www.linkedin.com/company/mobtronic-llc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-500 py-8 px-6 text-center text-sm">
        <div className="max-w-5xl mx-auto">
          &copy; {new Date().getFullYear()} Kavoosh Mohajeri | Mobtronic LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
