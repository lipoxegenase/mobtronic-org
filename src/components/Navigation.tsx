"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BOOKING_URL = "https://outlook.office.com/book/G324d680a42d74a9f8a3782d847317bf3@Katalystvc.com/?ismsaljsauthenabled";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 inset-x-0 bg-zinc-900 border-b border-zinc-800 z-50 shadow-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Mobtronic Logo"
              width="36"
              height="36"
              className="rounded-sm object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="text-white font-extrabold tracking-wider text-lg group-hover:text-blue-400 transition-colors">
                MOBTRONIC
              </span>
              <span className="text-zinc-500 text-[9px] font-semibold tracking-widest uppercase">
                Moving Technology Forward
              </span>
            </div>
          </Link>

          {/* Nav links */}
          <div className="flex items-center gap-2 sm:gap-4">
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

            {/* Schedule: opens Outlook Bookings */}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-lg text-zinc-200 hover:text-white hover:bg-zinc-800/80 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Schedule
            </a>

            {/* Primary CTA */}
            <a
              href="/#contact"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm shadow-sm"
            >
              Let&apos;s Connect
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
