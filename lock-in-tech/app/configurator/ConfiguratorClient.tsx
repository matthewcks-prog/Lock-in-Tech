"use client";

import React, { useEffect } from "react";
import { VirtualDesk } from "../components/VirtualDesk";
import { ProductSelector } from "../components/ProductSelector";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useConfigurator } from "../../hooks/useConfigurator";
import { Product } from "../../types";

interface ConfiguratorClientProps {
  initialProducts: Product[];
}

export default function ConfiguratorClient({
  initialProducts,
}: ConfiguratorClientProps) {
  const { setAvailableProducts } = useConfigurator();

  useEffect(() => {
    setAvailableProducts(initialProducts);
  }, [initialProducts, setAvailableProducts]);

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-4 md:p-8">
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
            <p>
              Tip: Toggle &quot;Vibe Items&quot; to boost your aesthetic score.
            </p>
          </div>
        </div>

        {/* Right Column: Controls (5 cols) */}
        <div className="lg:col-span-5 h-full flex flex-col gap-4">
          <ProductSelector />
          <div className="text-xs text-neutral-600 text-center px-4">
            As an Amazon Associate I earn from qualifying purchases.
          </div>
        </div>
      </div>
    </main>
  );
}
