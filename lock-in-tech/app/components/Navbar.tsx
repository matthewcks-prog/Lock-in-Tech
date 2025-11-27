"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Best Picks", href: "#best-picks" },
  { label: "Reviews", href: "#reviews" },
  { label: "Blog", href: "#blog" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("#")) {
      // For hash links, check if we're on home page and match the hash
      return (
        pathname === "/" &&
        typeof window !== "undefined" &&
        window.location.hash === href
      );
    }
    return pathname === href;
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("#")) {
      // Smooth scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/70 border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-slate-900">
              Lock-In <span className="text-blue-600">Tech</span>
            </span>
          </Link>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3">
            {/* Let's Connect Button */}
            <a
              href="https://www.tiktok.com/@lockintech"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              <span>LET&apos;S CONNECT</span>
              <span className="text-xs">&bull;</span>
            </a>

            {/* Menu Button */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/80 hover:bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-medium rounded-full transition-all shadow-sm hover:shadow-md"
              >
                <span>MENU</span>
                {isMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <span className="text-sm">...</span>
                )}
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsMenuOpen(false)}
                  />
                  {/* Menu Panel */}
                  <div className="absolute right-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 py-2 z-50">
                    {NAV_ITEMS.map((item) => {
                      const active = isActive(item.href);
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => handleNavClick(item.href)}
                          className={cn(
                            "flex items-center gap-3 px-4 py-3 transition-colors",
                            active
                              ? "bg-blue-50 text-blue-700"
                              : "text-slate-700 hover:bg-slate-50"
                          )}
                        >
                          {/* Circle Indicator */}
                          <div className="w-2 h-2 rounded-full shrink-0">
                            {active ? (
                              <div className="w-full h-full bg-blue-600 rounded-full" />
                            ) : (
                              <div className="w-full h-full border-2 border-slate-400 rounded-full" />
                            )}
                          </div>
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
