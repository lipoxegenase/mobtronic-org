"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 inset-x-0 bg-zinc-900 border-b border-zinc-800 z-50 shadow-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="text-white font-extrabold tracking-wider text-xl group-hover:text-blue-400 transition-colors">
              MOBTRONIC
            </span>
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/blog"
              className={`text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                pathname.startsWith("/blog")
                  ? "text-white bg-zinc-800 border border-zinc-700"
                  : "text-zinc-200 hover:text-white hover:bg-zinc-800/80"
              }`}
            >
              Blog
            </Link>
            
            <a
              href="/#contact"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm shadow-sm"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
