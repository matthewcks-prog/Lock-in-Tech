import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <main className="flex flex-col items-center text-center max-w-2xl gap-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-sm text-neutral-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Lock-In Tech v1.0
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">
          Buy Focus, <br /> Not Just Tech.
        </h1>

        <p className="text-lg text-neutral-400 max-w-md">
          Stop scrolling through endless reviews. Build your perfect study
          environment with our gamified setup configurator.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link
            href="/configurator"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full transition-all hover:scale-105"
          >
            <Zap className="w-5 h-5 fill-black" />
            Launch Configurator
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <button className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-full border border-neutral-800 transition-all">
            How it works
          </button>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 w-full text-left">
          {[
            {
              title: "Focus Score",
              desc: "Gamified rating for your setup's productivity potential.",
            },
            {
              title: "Budget Tetris",
              desc: "Auto-balancing algorithm to keep you under budget.",
            },
            {
              title: "Visualizer",
              desc: "See your desk setup come to life in real-time.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800"
            >
              <h3 className="font-bold text-emerald-400 mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
