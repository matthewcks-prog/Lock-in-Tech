import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 text-center z-10 max-w-7xl mx-auto w-full">
      {/* Main Heading - Single Line on Desktop */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight font-mono text-slate-900 mb-4 sm:mb-6 leading-tight drop-shadow-sm">
        <span className="inline">Students: Don&apos;t just buy tech.</span>{" "}
        <span className="text-blue-600 whitespace-nowrap">Buy focus.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl font-sans mb-6 sm:mb-8 leading-relaxed px-2">
        I&apos;m Matt, a uni student who wasted money on flashy gear that
        didn&apos;t actually help me study. Lock-In Tech is just the setups
        I&apos;d actually buy again with my own money.
      </p>

      {/* CTA Button */}
      <div className="mb-6 sm:mb-8">
        <Link
          href="/configurator"
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all hover:scale-105 font-mono shadow-lg text-sm sm:text-base"
        >
          Launch Configurator
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </div>

      {/* Disclaimer */}
      <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-sans bg-white/70 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-sm border border-slate-200/50">
        Some links on this page are Amazon affiliate links. I get a small
        commission if you buy through them, at no extra cost to you. I only list
        gear I&apos;d genuinely recommend to friends.
      </p>
    </section>
  );
};
