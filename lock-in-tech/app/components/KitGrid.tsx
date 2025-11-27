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
    <div className="flex flex-col rounded-3xl border border-slate-200/50 bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-xl h-full hover:shadow-2xl transition-shadow">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6 gap-4">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        </div>
        {/* Video Placeholder */}
        <div className="hidden md:block w-32 lg:w-40 h-20 lg:h-24 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/50 shadow-md">
          <video
            src={videoSrc}
            poster={videoPoster}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Products List */}
      <div className="flex-1 flex flex-col gap-5 mb-6">
        {items.map((item, i) => (
          <div key={i} className="group">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 mb-1">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                {item.name}
              </h3>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                {item.role}
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              <span className="text-blue-600 font-semibold">Why: </span>
              {item.why}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="pt-5 border-t border-slate-200/50 space-y-4">
        <div>
          <h4 className="text-sm font-bold text-slate-800 mb-1">
            How I&apos;d use it:
          </h4>
          <p className="text-sm sm:text-base text-slate-600 italic leading-relaxed">
            {how}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-slate-500">{total}</p>

        <Link
          href={href}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group mt-2 text-sm sm:text-base"
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
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
      {/* Badge */}
      <div className="flex justify-center mb-8 sm:mb-12">
        <span className="px-4 py-2 rounded-full bg-slate-800 text-white text-xs sm:text-sm font-bold uppercase tracking-widest shadow-lg">
          Editor&apos;s Choice: As of Dec 2025
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {loadouts.map((loadout, index) => (
          <LoadoutCard key={index} {...loadout} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 sm:mt-20 text-center">
        <h3 className="text-2xl sm:text-3xl font-mono font-bold text-slate-900 mb-6">
          Want to try your own?
        </h3>
        <Link
          href="/configurator"
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all hover:scale-105 font-mono shadow-lg text-sm sm:text-base"
        >
          Launch Configurator
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </div>
    </section>
  );
};
