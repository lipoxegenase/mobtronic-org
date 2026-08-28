import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-zinc-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building AI-Ready Infrastructure That Amplifies Human Connection
            </h1>
            <p className="text-xl mb-10 text-zinc-300">
              We provide AI infrastructure consulting to help healthcare and
              enterprise organizations bridge strategy and systems—building clear
              communication flows, intelligent automation, and infrastructure that
              scales with integrity and purpose.
            </p>
            <div className="cta-primary">
              <Link
                href="https://outlook.office365.com/book/Mobtronic@mobtronic.org/"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Mobtronic for a consultation"
              >
                Schedule a Free Consultation - AI Infrastructure Expert
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-6 bg-white text-zinc-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Expert Technology Strategy & Infrastructure Consulting</h2>
            <p className="text-lg mb-4 text-zinc-700">
              At Mobtronic, we believe technology should bring people closer together, not create barriers. 
              Our AI infrastructure consulting services ensure your systems are reliable, secure, and scalable—so 
              your team can focus on what matters most: serving your patients, clients, and communities.
            </p>
            <p className="text-lg mb-4 text-zinc-700">
              As a fractional CTO and technology strategy consultant, I specialize in AI infrastructure consulting, 
              healthcare IT modernization, and M&A technology integration. My expertise spans cloud cost optimization, 
              FHIR/TEFCA compliance, and enterprise-scale infrastructure consolidation.
            </p>
            <p className="text-lg text-zinc-700">
              When healthcare providers have seamless access to patient data through FHIR-compliant systems, 
              they can spend more time caring and less time clicking. When financial services firms have optimized 
              cloud infrastructure, they can respond to client needs faster and more effectively. That's how 
              technology amplifies human connection.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-6 bg-zinc-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-zinc-900">Our Services</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
                <h3 className="text-xl font-semibold mb-4 text-zinc-900">AI Infrastructure Consulting & Cloud Modernization</h3>
                <p className="text-zinc-700 mb-6">
                  AI-ready infrastructure consulting including cloud migrations, multi-tenant consolidation, 
                  and SQL optimization for healthcare and financial services organizations. Our cloud cost 
                  optimization strategies have saved clients over $2.3M while improving performance and scalability.
                </p>
                <div className="cta-secondary">
                  <Link href="/services/ai-infrastructure" className="text-blue-600 font-medium hover:underline">
                    Explore AI Infrastructure Services →
                  </Link>
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
                <h3 className="text-xl font-semibold mb-4 text-zinc-900">FHIR/TEFCA Integration</h3>
                <p className="text-zinc-700 mb-6">
                  Healthcare IT consulting specializing in FHIR consulting, TEFCA compliance, and healthcare 
                  interoperability solutions. We help medical practices and health systems implement secure 
                  data exchange and achieve regulatory compliance for modern healthcare infrastructure.
                </p>
                <div className="cta-secondary">
                  <Link href="/services/fhir-tefca" className="text-blue-600 font-medium hover:underline">
                    Explore FHIR/TEFCA Expertise →
                  </Link>
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
                <h3 className="text-xl font-semibold mb-4 text-zinc-900">M&A Technology Integration & Consolidation</h3>
                <p className="text-zinc-700 mb-6">
                  M&A technology integration and divestiture support for private equity firms and growth-stage 
                  companies. Our fractional CTO services include infrastructure audits, technology due diligence, 
                  portfolio optimization, and post-merger consolidation strategies.
                </p>
                <div className="cta-secondary">
                  <Link href="/services/ma-integration" className="text-blue-600 font-medium hover:underline">
                    Discover M&A Tech Solutions →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies / Social Proof */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-zinc-900">Proven Results for Healthcare Organizations</h2>
            <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200">
              <h3 className="text-xl font-semibold mb-3 text-zinc-900">Refresh Mental Health: Multi-Location Consolidation</h3>
              <ul className="mb-6 space-y-2 text-zinc-700">
                <li><strong className="text-zinc-900">Challenge:</strong> Multiple disconnected systems across acquired practices</li>
                <li><strong className="text-zinc-900">Solution:</strong> Consolidated infrastructure with Azure-based tenant consolidation</li>
                <li><strong className="text-zinc-900">Result:</strong> Unified environment supporting successful exit</li>
              </ul>
              <blockquote className="border-l-4 border-blue-600 pl-4 italic text-zinc-600">
                "Mobtronic helped us bring every user, system, and workflow under one 
                secure environment. Their expertise was critical to our successful exit."
                <footer className="mt-2 font-semibold not-italic">— Refresh Mental Health</footer>
              </blockquote>
            </div>
            
            <div className="mt-8 text-center">
               <Link href="/case-studies" className="text-blue-600 font-medium hover:underline">
                 View Our Healthcare IT Success Stories →
               </Link>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 px-6 bg-zinc-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-zinc-900">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="pb-6 border-b border-zinc-200">
                <h3 itemProp="name" className="text-xl font-semibold mb-3 text-zinc-900">What is AI infrastructure consulting?</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-zinc-700">
                    AI infrastructure consulting helps organizations build scalable, secure, and 
                    AI-ready technology foundations. This includes cloud architecture design, 
                    data pipeline optimization, and infrastructure modernization to support 
                    machine learning and AI workloads.
                  </p>
                </div>
              </div>
              
              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="pb-6 border-b border-zinc-200">
                <h3 itemProp="name" className="text-xl font-semibold mb-3 text-zinc-900">What is FHIR compliance and why does it matter?</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-zinc-700">
                    FHIR (Fast Healthcare Interoperability Resources) is a standard for exchanging 
                    healthcare information electronically. FHIR compliance ensures your healthcare 
                    systems can securely share patient data with other providers, improving care 
                    coordination and meeting regulatory requirements.
                  </p>
                </div>
              </div>
              
              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 itemProp="name" className="text-xl font-semibold mb-3 text-zinc-900">When should I hire a fractional CTO?</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-zinc-700">
                    A fractional CTO is ideal for growth-stage companies, private equity portfolio 
                    companies, or organizations undergoing M&A that need executive-level technology 
                    leadership without the cost of a full-time hire. Fractional CTOs provide strategic 
                    guidance, infrastructure oversight, and technical due diligence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-zinc-900 text-white py-16 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Let's Amplify Your Technology</h2>
            <p className="text-lg text-zinc-300 mb-8">
              Partner with Mobtronic to build infrastructure that amplifies human connection.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://outlook.office365.com/book/Mobtronic@mobtronic.org/" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Call
              </a>
              <Link href="/contact" className="bg-transparent border border-zinc-500 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Send a Message
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-12 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="footer-about">
            <h4 className="text-white text-lg font-bold mb-4">About Mobtronic LLC</h4>
            <p className="text-sm leading-relaxed">
              Mobtronic LLC provides AI infrastructure consulting, healthcare IT consulting, 
              and fractional CTO services to organizations across the United States. 
              Specializing in FHIR/TEFCA compliance, cloud cost optimization, and M&A 
              technology integration.
            </p>
          </div>
          
          <div className="footer-services">
            <h4 className="text-white text-lg font-bold mb-4">Our Services</h4>
            <ul className="text-sm space-y-2">
              <li><Link href="/services/ai-infrastructure" className="hover:text-white transition-colors">AI Infrastructure Consulting</Link></li>
              <li><Link href="/services/healthcare-it" className="hover:text-white transition-colors">Healthcare IT Consulting</Link></li>
              <li><Link href="/services/fhir-consulting" className="hover:text-white transition-colors">FHIR Consulting</Link></li>
              <li><Link href="/services/tefca-compliance" className="hover:text-white transition-colors">TEFCA Compliance</Link></li>
              <li><Link href="/services/fractional-cto" className="hover:text-white transition-colors">Fractional CTO</Link></li>
              <li><Link href="/services/ma-integration" className="hover:text-white transition-colors">M&A Technology Integration</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-zinc-800 text-xs text-center">
          &copy; {new Date().getFullYear()} Mobtronic LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
