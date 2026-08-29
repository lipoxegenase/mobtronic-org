import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mobtronic LLC - Building AI-Ready Infrastructure That Amplifies Human Connection",
  description: "Mobtronic LLC provides AI infrastructure consulting, FHIR/TEFCA compliance, M&A technology integration, cloud cost optimization, and fractional CTO services for healthcare and enterprise organizations.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://mobtronic.org/#website",
    "url": "https://mobtronic.org",
    "name": "Mobtronic LLC",
    "description": "AI Infrastructure Consulting, Healthcare IT, and M&A Technology Integration",
    "publisher": {
      "@id": "https://mobtronic.org/#organization"
    }
  };

  // Organization Schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://mobtronic.org/#organization",
    "url": "https://mobtronic.org",
    "name": "Mobtronic LLC",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@mobtronic.org",
      "url": "https://mobtronic.org/#contact"
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* GA4 - Native Script Injection (Bulletproof) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CHYG8H733M"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CHYG8H733M', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Microsoft Clarity Heatmaps & Recordings */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "y9t02uh26s");
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
