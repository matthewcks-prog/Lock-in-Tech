"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Product, Category } from "../../types";

// --- Types ---

export type Scenario = "bedroomSetup" | "libraryDeepWork";

export interface DeskSceneProps {
  selectedProducts: Partial<Record<Category, Product>>;
  scenario: Scenario;
  lateNightMode: boolean;
  className?: string;
  highlightProductId?: string; // Optional: for hover effects from parent
}

// --- Configuration ---

// Map internal categories to visual slots
type SlotId = "monitor" | "keyboard" | "mouse" | "stand" | "headphones";

interface SlotConfig {
  id: SlotId;
  zIndex: number;
  position: string; // Tailwind classes for positioning
  width: number;
  height: number;
}

const SLOTS: Record<SlotId, SlotConfig> = {
  monitor: {
    id: "monitor",
    zIndex: 10,
    position: "bottom-[180px] left-1/2 -translate-x-1/2",
    width: 300,
    height: 300,
  },
  keyboard: {
    id: "keyboard",
    zIndex: 30,
    position: "bottom-[100px] left-1/2 -translate-x-1/2",
    width: 260,
    height: 140,
  },
  mouse: {
    id: "mouse",
    zIndex: 30,
    position: "bottom-[100px] left-[70%]",
    width: 80,
    height: 80,
  },
  stand: {
    id: "stand",
    zIndex: 20,
    position: "bottom-[140px] left-[15%]",
    width: 180,
    height: 180,
  },
  headphones: {
    id: "headphones",
    zIndex: 25,
    position: "bottom-[120px] right-[10%]",
    width: 120,
    height: 120,
  },
};

// Map product categories to slots
const CATEGORY_TO_SLOT: Partial<Record<Category, SlotId>> = {
  monitor: "monitor",
  keyboard: "keyboard",
  mouse: "mouse",
  "laptop-stand": "stand",
  accessory: "stand",
  headphones: "headphones",
};

const SCENARIO_STYLES: Record<
  Scenario,
  { overlay: string; vignette: string; filter: string }
> = {
  bedroomSetup: {
    overlay: "bg-indigo-900/10",
    vignette: "radial-gradient(circle, transparent 40%, rgba(0,0,0,0.5) 100%)",
    filter: "contrast(105%)",
  },
  libraryDeepWork: {
    overlay: "bg-blue-900/10",
    vignette: "radial-gradient(circle, transparent 50%, rgba(0,0,0,0.3) 100%)",
    filter: "contrast(110%) saturate(90%)",
  },
};

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DeskScene = ({
  selectedProducts,
  scenario,
  lateNightMode,
  className,
  highlightProductId,
}: DeskSceneProps) => {
  const styles = SCENARIO_STYLES[scenario];

  // Helper to get background image path
  const getBgImage = () => {
    switch (scenario) {
      case "bedroomSetup":
        return "/images/desk-scenes/bedroom-setup-bg.png";
      case "libraryDeepWork":
        return "/images/desk-scenes/library-deep-work-bg.jpg";
      default:
        return "/images/desk-scenes/bedroom-setup-bg.jpg";
    }
  };

  return (
    <div
      className={cn(
        "relative w-full aspect-square max-w-[640px] mx-auto rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900 transition-all duration-700",
        className
      )}
    >
      {/* --- Layer 1: Background --- */}
      <div className="absolute inset-0 z-0">
        {/* Fallback color if image fails/loads */}
        <div className="absolute inset-0 bg-neutral-800" />
        <Image
          src={getBgImage()}
          alt="Room Background"
          fill
          className={cn(
            "object-cover transition-opacity duration-700",
            lateNightMode ? "opacity-40" : "opacity-80"
          )}
          style={{ filter: styles.filter }}
        />
        {/* Scenario Overlay */}
        <div
          className={cn(
            "absolute inset-0 transition-colors duration-700",
            styles.overlay
          )}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: styles.vignette }}
        />
        {/* Late Night Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-blue-950/40 transition-opacity duration-700 pointer-events-none",
            lateNightMode ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      {/* --- Layer 3: Product Slots (Paper Doll) --- */}
      <AnimatePresence>
        {Object.entries(selectedProducts).map(([cat, product]) => {
          if (!product) return null;
          const category = cat as Category;
          const slotId = CATEGORY_TO_SLOT[category];
          if (!slotId) return null;

          const slot = SLOTS[slotId];
          const isHighlighted = highlightProductId === product.id;

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: isHighlighted ? 1.05 : 1,
                rotateZ: isHighlighted ? -2 : 0,
              }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.4, type: "spring" }}
              className={cn("absolute", slot.position)}
              style={{ zIndex: slot.zIndex }}
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={slot.width}
                  height={slot.height}
                  unoptimized={true}
                  className={cn(
                    "object-contain drop-shadow-xl transition-all duration-500",
                    lateNightMode
                      ? "brightness-75 contrast-125"
                      : "brightness-100"
                  )}
                />
                {/* Late Night Glow for Monitor */}
                {lateNightMode && slotId === "monitor" && (
                  <div className="absolute inset-0 -z-10 bg-blue-500/20 blur-3xl rounded-full scale-150 animate-pulse" />
                )}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* --- Layer 4: Foreground Effects --- */}
      {lateNightMode && (
        <div className="absolute inset-0 pointer-events-none z-50 bg-linear-to-t from-black/40 via-transparent to-transparent" />
      )}
    </div>
  );
};
