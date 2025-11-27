"use client";

import React, { useEffect } from "react";
import { DeskScene, Scenario } from "../components/DeskScene";
import { ProductSelector } from "../components/ProductSelector";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useConfigurator } from "../../hooks/useConfigurator";
import { Product, Environment } from "../../types";

interface ConfiguratorClientProps {
  initialProducts: Product[];
}

// Helper to map internal environment to visual scenario
const mapEnvToScenario = (env: Environment): Scenario => {
  switch (env) {
    case "noisy-dorm":
      return "bedroomSetup";
    case "quiet-library":
      return "libraryDeepWork";
    case "home-office":
      return "bedroomSetup";
    default:
      return "bedroomSetup";
  }
};

export default function ConfiguratorClient({
  initialProducts,
}: ConfiguratorClientProps) {
  const {
    setAvailableProducts,
    selectedProducts,
    environment,
    lateNightMode,
    setLateNightMode,
  } = useConfigurator();

  useEffect(() => {
    setAvailableProducts(initialProducts);
  }, [initialProducts, setAvailableProducts]);

  return (
    <main className="h-screen bg-transparent text-slate-800 p-6 md:p-8 flex flex-col overflow-hidden">
      {/* Header / Nav */}
      <header className="max-w-[1400px] w-full mx-auto mb-4 flex items-center justify-between shrink-0">
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-xl font-bold tracking-tight text-slate-900">
          Lock-In <span className="text-blue-600">Configurator</span>
        </h1>

        {/* Late Night Toggle */}
        <button
          onClick={() => setLateNightMode(!lateNightMode)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-300 hover:border-slate-400 transition-colors text-sm shadow-sm"
        >
          {lateNightMode ? (
            <>
              <Moon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-800 font-medium">Late Night</span>
            </>
          ) : (
            <>
              <Sun className="w-4 h-4 text-amber-500" />
              <span className="text-amber-700 font-medium">Day Mode</span>
            </>
          )}
        </button>
      </header>

      {/* Main Content Grid */}
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 min-h-0">
        {/* Left Column: Visualizer (8 cols) */}
        <div className="lg:col-span-8 flex flex-col min-h-0">
          <div className="flex-1 bg-neutral-900/50 rounded-2xl border border-neutral-800 overflow-hidden relative">
            <DeskScene
              selectedProducts={selectedProducts}
              scenario={mapEnvToScenario(environment)}
              lateNightMode={lateNightMode}
              className="max-w-full h-full"
            />
          </div>
        </div>

        {/* Right Column: Controls (4 cols) */}
        <div className="lg:col-span-4 overflow-y-auto flex flex-col bg-neutral-900/30 rounded-2xl border border-neutral-800 min-h-0">
          <ProductSelector />
          <div className="text-xs text-neutral-600 text-center px-4 py-2">
            As an Amazon Associate I earn from qualifying purchases.
          </div>
        </div>
      </div>
    </main>
  );
}
