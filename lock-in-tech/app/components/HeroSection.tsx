import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center md:items-start justify-center py-20 px-4 md:px-8 text-center md:text-left z-10 max-w-5xl mx-auto w-full">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter font-mono text-white mb-6 leading-tight">
        Students: Don&apos;t just buy tech. <br />
        <span className="text-emerald-400">Buy focus.</span>
      </h1>

      <p className="text-lg text-zinc-300 max-w-2xl font-sans mb-4 leading-relaxed">
        I&apos;m Matt, a uni student who wasted money on flashy gear that
        didn&apos;t actually help me study. Lock-In Tech is just the setups
        I&apos;d actually buy again with my own money.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full md:w-auto">
        <Link
          href="/configurator"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full transition-all hover:scale-105 font-mono"
        >
          Launch Configurator
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <p className="text-sm text-zinc-600 max-w-2xl font-sans mb-12">
        Some links on this page are Amazon affiliate links. I get a small
        commission if you buy through them, at no extra cost to you. I only list
        gear I&apos;d genuinely recommend to friends.
      </p>

    </section>
  );
};
