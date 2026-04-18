"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Directory", href: "/startups" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Matchmaking", href: "/match" },
  { label: "B2B", href: "/b2b" },
  { label: "Knowledge Hub", href: "/knowledge" },
  { label: "Blog", href: "/blog" },
  { label: "Events", href: "/events" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#e8ffee]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(15,82,56,0.06)] font-['Plus_Jakarta_Sans'] antialiased text-sm font-medium">
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-8xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-[#0f5238] active:scale-95 transform transition-transform cursor-pointer"
        >
          PakStartups
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-[#0f5238] font-bold border-b-2 border-[#0f5238] pb-1"
                    : "text-[#2d6a4f] hover:text-[#0f5238] hover:bg-[#d5fde2] rounded-lg transition-all px-2 py-1"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/auth/login"
            className="px-5 py-2 text-[#2d6a4f] hover:bg-[#d5fde2] dark:hover:bg-emerald-900/20 rounded-lg transition-all duration-300 active:scale-95"
          >
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="px-5 py-2 bg-[#0f5238] text-white font-bold rounded-lg shadow-[0_8px_24px_rgba(15,82,56,0.15)] hover:opacity-90 active:scale-95 transform transition-all"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-[#d5fde2] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span className="material-symbols-outlined text-[#0f5238]">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#e8ffee] border-t border-[#c4ecd2] px-8 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-[#2d6a4f] font-medium hover:text-[#0f5238] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Link href="/auth/login" className="text-center py-3 border border-[#bfc9c1] rounded-lg text-[#0f5238] font-bold">
              Sign In
            </Link>
            <Link href="/auth/signup" className="text-center py-3 bg-[#0f5238] text-white rounded-lg font-bold">
              Join Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
