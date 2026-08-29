"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 inset-x-0 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/80 z-50 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-white font-black tracking-tight text-xl">
              MOBTRONIC
            </span>
            <span className="h-2 w-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform"></span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6 sm:gap-8">
            <Link
              href="/case-studies"
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname.startsWith("/case-studies")
                  ? "text-blue-400 font-semibold"
                  : "text-zinc-400"
              }`}
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname.startsWith("/blog")
                  ? "text-blue-400 font-semibold"
                  : "text-zinc-400"
              }`}
            >
              Blog
            </Link>
            
            <a
              href="/#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all text-xs sm:text-sm hover:shadow-[0_0_12px_rgba(59,130,246,0.3)]"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
