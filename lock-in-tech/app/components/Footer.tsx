"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200/50 bg-white/70 backdrop-blur-lg mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Footer Content */}
        <div className="flex flex-col items-center gap-6">
          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">
            <Link
              href="/affiliate-disclosure"
              className="text-slate-600 hover:text-blue-600 transition-colors hover:underline"
            >
              Amazon Affiliate Disclosure
            </Link>
            <span className="text-slate-400 hidden sm:inline">|</span>
            <Link
              href="/privacy-policy"
              className="text-slate-600 hover:text-blue-600 transition-colors hover:underline"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-400 hidden sm:inline">|</span>
            <Link
              href="/terms"
              className="text-slate-600 hover:text-blue-600 transition-colors hover:underline"
            >
              Terms
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-slate-500 text-center">
            <p>
              © {currentYear}{" "}
              <span className="font-semibold text-slate-700">Lock-In Tech</span>
              . All rights reserved.
            </p>
          </div>

          {/* Optional: Brand/Tagline */}
          <div className="text-xs text-slate-400 text-center max-w-md">
            <p>
              Helping students find the right tech to stay focused and
              productive.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
