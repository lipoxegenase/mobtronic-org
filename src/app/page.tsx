import Link from "next/link";
import Image from "next/image";

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
              <Link
                href="#projects"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                Explore My Work
              </Link>
              <Link
                href="/blog"
                className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg border-2 border-transparent"
              >
                Read the Blog
              </Link>
              <Link
                href="#contact"
                className="inline-block bg-transparent border-2 border-zinc-600 hover:bg-zinc-800 hover:border-zinc-500 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                Let's Connect
              </Link>
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
            
            <div className="space-y-12">
              {/* Case Study 1 */}
              <div className="border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-zinc-900 text-white p-6 md:p-8">
                  <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">Infrastructure Security</span>
                  <h3 className="text-2xl font-bold mt-2">High Stakes Network Remediation</h3>
                </div>
                <div className="p-6 md:p-8 bg-zinc-50 flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-2">The Problem</h4>
                    <p className="text-zinc-700 text-sm">Major global beverage and healthcare corporations (including Coca Cola and Johnson & Johnson) faced critical vulnerabilities and active network threats following widespread ransomware incidents.</p>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-2">The Solution & Impact</h4>
                    <p className="text-zinc-700 text-sm">Stepped into the high pressure environment to audit, update, and secure critical network hardware. Executed strict remediation protocols and hardware updates, restoring operational integrity and fortifying the networks against future zero day exploits.</p>
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-zinc-900 text-white p-6 md:p-8">
                  <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">Cloud Integration</span>
                  <h3 className="text-2xl font-bold mt-2">Financial Systems Modernization</h3>
                </div>
                <div className="p-6 md:p-8 bg-zinc-50 flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-2">The Problem</h4>
                    <p className="text-zinc-700 text-sm">A financial enterprise required a critical modernization of their legacy portfolio accounting software (APX, Moxy) without disrupting daily high volume trading and reporting operations.</p>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-2">The Solution & Impact</h4>
                    <p className="text-zinc-700 text-sm">Engineered a robust database automation pipeline using SQL Server and SSIS. Seamlessly migrated infrastructure to the cloud, utilizing Docker and Jenkins to ensure zero downtime integration and drastically improved query and reporting efficiency.</p>
                  </div>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-zinc-900 text-white p-6 md:p-8">
                  <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">Machine Learning & Automation</span>
                  <h3 className="text-2xl font-bold mt-2">Advanced AI Tool Calling Workflows</h3>
                </div>
                <div className="p-6 md:p-8 bg-zinc-50 flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-2">The Challenge</h4>
                    <p className="text-zinc-700 text-sm">The need to automate complex content generation, strategy formulation, and research without relying on expensive, privacy intrusive external LLM APIs.</p>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-2">The Solution & Impact</h4>
                    <p className="text-zinc-700 text-sm">Independently engineered and deployed local Large Language Models (Qwen3) utilizing Apple's MLX framework. Built a stateful, Human in the Loop multi agent architecture using Python, FastAPI, and Next.js proving capability at the cutting edge of AI automation and infrastructure.</p>
                  </div>
                </div>
              </div>

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
            <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 max-w-md mx-auto">
              <p className="text-zinc-300 mb-6 font-medium">Reach out directly via email or connect with me professionally.</p>
              
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:Mobtronic@mobtronic.org"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full"
                >
                  Email Me: Mobtronic@mobtronic.org
                </a>
                <a
                  href="https://linkedin.com/in/kavoosh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-zinc-500 hover:border-white text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full"
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
