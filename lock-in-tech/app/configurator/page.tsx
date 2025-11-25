"use client";

import React from "react";
import { VirtualDesk } from "../components/VirtualDesk";
import { ProductSelector } from "../components/ProductSelector";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ConfiguratorPage() {
  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-8">
      {/* Header / Nav */}
      <header className="max-w-7xl mx-auto mb-8 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-xl font-bold tracking-tight">
          Lock-In <span className="text-emerald-500">Configurator</span>
        </h1>
        <div className="w-24" /> {/* Spacer for centering */}
      </header>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-140px)]">
        {/* Left Column: Visualizer (7 cols) */}
        <div className="lg:col-span-7 h-full flex flex-col">
          <div className="flex-1 relative">
            <VirtualDesk />
          </div>
          <div className="mt-4 text-center text-neutral-500 text-sm">
            <p>Tip: Toggle "Vibe Items" to boost your aesthetic score.</p>
          </div>
        </div>

        {/* Right Column: Controls (5 cols) */}
        <div className="lg:col-span-5 h-full">
          <ProductSelector />
        </div>
      </div>
    </main>
  );
}
