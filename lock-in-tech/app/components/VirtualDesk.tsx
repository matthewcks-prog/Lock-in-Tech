"use client";

import React from "react";
import { motion } from "framer-motion";
import { useConfigurator } from "../../hooks/useConfigurator";
import Image from "next/image";
import { Coffee, Leaf, Moon, Sun } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const VirtualDesk = () => {
  const { selectedProducts, vibeItems } = useConfigurator();
  const [isNightMode, setIsNightMode] = React.useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div
        className={cn(
          "relative w-full h-[600px] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl transition-colors duration-700",
          isNightMode ? "bg-zinc-950" : "bg-neutral-900"
        )}
      >
        {/* Desk Surface */}
        <div
          className={cn(
            "absolute inset-x-10 bottom-10 top-20 rounded-xl shadow-inner transition-all duration-700",
            isNightMode ? "opacity-50" : "opacity-80",
            "bg-gradient-to-b from-zinc-800 to-zinc-900"
          )}
        />

        {/* Monitor (Back Layer) */}
        {selectedProducts.monitor && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-24 left-1/2 -translate-x-1/2 z-10 w-64"
          >
            <Image
              src={selectedProducts.monitor.image}
              alt={selectedProducts.monitor.name}
              width={300}
              height={300}
              unoptimized={true}
              className={cn(
                "object-contain transition-all duration-700",
                isNightMode
                  ? "drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] brightness-90"
                  : "drop-shadow-2xl"
              )}
            />
          </motion.div>
        )}

        {/* Laptop Stand (Middle Layer) */}
        {selectedProducts["laptop-stand"] && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-40 left-20 z-20 w-48"
          >
            <Image
              src={selectedProducts["laptop-stand"].image}
              alt={selectedProducts["laptop-stand"].name}
              width={200}
              height={200}
              unoptimized={true}
              className={cn(
                "object-contain transition-all duration-700",
                isNightMode
                  ? "drop-shadow-[0_0_20px_rgba(59,130,246,0.2)] brightness-90"
                  : "drop-shadow-xl"
              )}
            />
          </motion.div>
        )}

        {/* Keyboard (Front Layer) */}
        {selectedProducts.keyboard && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30 w-56"
          >
            <Image
              src={selectedProducts.keyboard.image}
              alt={selectedProducts.keyboard.name}
              width={250}
              height={150}
              unoptimized={true}
              className={cn(
                "object-contain transition-all duration-700",
                isNightMode
                  ? "drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] brightness-90"
                  : "drop-shadow-lg"
              )}
            />
          </motion.div>
        )}

        {/* Mouse (Front Layer) */}
        {selectedProducts.mouse && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute bottom-32 right-32 z-30 w-24"
          >
            <Image
              src={selectedProducts.mouse.image}
              alt={selectedProducts.mouse.name}
              width={100}
              height={100}
              unoptimized={true}
              className={cn(
                "object-contain transition-all duration-700",
                isNightMode
                  ? "drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] brightness-90"
                  : "drop-shadow-lg"
              )}
            />
          </motion.div>
        )}

        {/* Headphones (Side/Accessory) */}
        {selectedProducts.headphones && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute bottom-20 left-20 z-30 w-32"
          >
            <Image
              src={selectedProducts.headphones.image}
              alt={selectedProducts.headphones.name}
              width={150}
              height={150}
              unoptimized={true}
              className={cn(
                "object-contain transition-all duration-700",
                isNightMode
                  ? "drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] brightness-90"
                  : "drop-shadow-lg"
              )}
            />
          </motion.div>
        )}

        {/* Vibe Items */}
        {vibeItems.plant && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-10 right-10 z-40 w-32"
          >
            {/* Placeholder for plant image */}
            <div className="w-24 h-32 bg-green-800/20 rounded-full blur-xl absolute" />
            <Leaf className="w-12 h-12 text-green-500" />
          </motion.div>
        )}

        {vibeItems.coffee && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute bottom-20 right-20 z-40"
          >
            <Coffee className="w-10 h-10 text-amber-600" />
          </motion.div>
        )}

        {vibeItems.lamp && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-50 bg-amber-500/10 mix-blend-overlay" />
        )}
      </div>

      {/* Lighting Toggle */}
      <button
        onClick={() => setIsNightMode(!isNightMode)}
        className="self-center flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors font-mono text-sm"
      >
        {isNightMode ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Moon className="w-4 h-4" />
        )}
        {isNightMode ? "Day Mode" : "Late Night Mode"}
      </button>
    </div>
  );
};
