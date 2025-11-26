import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface LoadoutItem {
  name: string;
  role: string;
  why: string;
}

interface LoadoutProps {
  title: string;
  subtitle: string;
  videoSrc: string;
  videoPoster: string;
  items: LoadoutItem[];
  how: string;
  total: string;
  href: string;
}

const LoadoutCard = ({
  title,
  subtitle,
  videoSrc,
  videoPoster,
  items,
  how,
  total,
  href,
}: LoadoutProps) => {
  return (
    <div className="flex flex-col rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 md:p-8 shadow-lg shadow-black/40 h-full">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8 gap-4">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <p className="text-sm text-zinc-500 leading-relaxed">{subtitle}</p>
        </div>
        {/* Video Placeholder */}
        <div className="hidden md:block w-40 h-24 rounded-lg overflow-hidden bg-zinc-800 shrink-0 border border-zinc-700/50">
          <video
            src={videoSrc}
            poster={videoPoster}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>

      {/* Products List */}
      <div className="flex-1 flex flex-col gap-6 mb-8">
        {items.map((item, i) => (
          <div key={i} className="group">
            <div className="flex items-baseline gap-2 mb-1">
              <h3 className="font-bold text-zinc-200 text-lg">{item.name}</h3>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                - {item.role}
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              <span className="text-emerald-400 font-medium">Why: </span>
              {item.why}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="pt-6 border-t border-zinc-800/50 space-y-4">
        <div>
          <h4 className="text-sm font-bold text-zinc-300 mb-1">
            How I&apos;d use it:
          </h4>
          <p className="text-sm text-zinc-400 italic">{how}</p>
        </div>

        <p className="text-xs text-zinc-600">{total}</p>

        <Link
          href={href}
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors group mt-2"
        >
          See full breakdown
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

const loadouts: LoadoutProps[] = [
  {
    title: "Campus roamer",
    subtitle:
      "For students who study everywhere: lecture halls, library, random cafés with decent Wi-Fi.",
    videoSrc: "/videos/campus-hopper.mp4",
    videoPoster: "/images/campus-hopper-poster.jpg",
    items: [
      {
        name: "Sony WH-CH720N",
        role: "THE SILENCER",
        why: "Lightweight noise-cancelling headphones with around 35 hours of battery life. Perfect for turning a loud cafeteria or bus into fake quiet.",
      },
      {
        name: "Logitech G305 Lightspeed",
        role: "THE RELIABLE CLICK",
        why: "Stupid-good performance for the price. Wireless, tiny dongle, and a single AA battery keeps it running for months. Easy to forget it's even a 'budget' mouse.",
      },
      {
        name: 'AOC 16T20 15.6" Portable Monitor',
        role: "THE SPACE DOUBLER",
        why: "Turns your cramped laptop into a dual-screen setup in the library. One USB-C cable for power and display, and it folds into your backpack with a cover.",
      },
    ],
    how: "I'd keep the monitor in my backpack, grab any free desk, plug it into my laptop, throw on the Sonys and basically disappear into my own little bubble.",
    total:
      "Estimated total: mid-range, but all three often go on sale around big events like Black Friday or back-to-uni.",
    href: "/loadouts/campus-hopper",
  },
  {
    title: "All-Nighter guy",
    subtitle:
      "For students who mainly grind at their desk and want a comfy, 'don't move for 3 hours' setup.",
    videoSrc: "/videos/all-nighter.mp4",
    videoPoster: "/images/all-nighter-poster.jpg",
    items: [
      {
        name: "Artiss Ergonomic Mesh Office Chair",
        role: "THE THRONE",
        why: "Mesh back + lumbar support so your spine doesn't hate you after multiple 3-hour study blocks. A huge upgrade over a random dining chair, without the crazy price of fancy office chairs.",
      },
      {
        name: "Quntis Monitor Light Bar",
        role: "THE EYE SAVER",
        why: "Clips to the top of your monitor and lights your desk without blasting your screen. Way cheaper than the 'fancy' brands, but still great for late-night study without frying your eyes.",
      },
      {
        name: "Logitech MX Master 3S",
        role: "PRODUCTIVITY KING",
        why: "Comfortable, tracks on basically any surface, and the side scroll wheel makes long PDFs and timelines way less painful. One of those buy-once, use-for-years purchases.",
      },
    ],
    how: "This is my 'no social media' corner: chair dialled in, light bar on warm white, MX Master mapped to scroll through lecture PDFs at light-speed.",
    total:
      "Estimated total: higher than the Campus Hopper Go-Bag, but this is the 'invest in your back and eyes' setup. Watch for deals on the chair and MX Master.",
    href: "/loadouts/all-nighter",
  },
];

export const KitGrid = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pb-20">
      {/* Badge */}
      <div className="flex justify-center mb-8">
        <span className="px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-bold text-zinc-300 uppercase tracking-widest">
          Editors Choice: As of Dec 2025
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {loadouts.map((loadout, index) => (
          <LoadoutCard key={index} {...loadout} />
        ))}
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-2xl font-mono font-bold text-white mb-6">
          Wanna try your own?
        </h3>
        <Link
          href="/configurator"
          className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full transition-all hover:scale-105 font-mono"
        >
          Launch Configurator
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};
