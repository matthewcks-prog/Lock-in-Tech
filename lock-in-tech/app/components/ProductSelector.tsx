"use client";

import React from "react";
import { useConfigurator } from "../../hooks/useConfigurator";
import { Category } from "../../types";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, Check, Package } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const CATEGORIES: Category[] = [
  "accessory",
  "headphones",
  "keyboard",
  "monitor",
  "mouse",
];

export const ProductSelector = () => {
  const {
    budget,
    setBudget,
    selectedProducts,
    selectProduct,
    totalCost,
    isOverBudget,
    suggestions,
    availableProducts,
  } = useConfigurator();

  const [activeCategory, setActiveCategory] =
    React.useState<Category>("headphones");

  const currentCategoryProducts = availableProducts.filter(
    (p) => p.category === activeCategory
  );

  return (
    <div className="flex flex-col h-full gap-6 p-6 bg-neutral-950 text-white rounded-3xl border border-neutral-800">
      {/* Header Stats */}
      <div className="p-4 bg-neutral-900 rounded-2xl border border-neutral-800">
        <div className="text-neutral-400 text-sm mb-1">Budget Used</div>
        <div
          className={cn(
            "text-3xl font-bold",
            isOverBudget ? "text-red-400" : "text-white"
          )}
        >
          ${totalCost}{" "}
          <span className="text-lg text-neutral-500 font-normal">
            / ${budget}
          </span>
        </div>
      </div>

      {/* Budget Slider */}
      <div className="space-y-2">
        <label className="text-sm text-neutral-400">
          Max Budget: ${budget}
        </label>
        <input
          type="range"
          min="200"
          max="2000"
          step="50"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full accent-emerald-500 h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-4 py-2 rounded-full text-sm whitespace-nowrap border transition-all",
              activeCategory === cat
                ? "bg-white text-black border-white"
                : "bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-600"
            )}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-3 overflow-y-auto max-h-[400px] pr-2">
        {currentCategoryProducts.map((product) => {
          const isSelected =
            selectedProducts[activeCategory]?.id === product.id;

          const getBadge = (cat: string) => {
            switch (cat) {
              case "headphones":
                return "Noise Killer";
              case "mouse":
                return "Precision";
              case "keyboard":
                return "Tactile";
              case "laptop-stand":
                return "Neck Saver";
              case "monitor":
                return "Vision Pro";
              default:
                return null;
            }
          };
          const badge = getBadge(activeCategory);

          return (
            <div
              key={product.id}
              onClick={() => selectProduct(product)}
              className={cn(
                "relative p-3 rounded-xl border cursor-pointer transition-all group",
                isSelected
                  ? "bg-neutral-800 border-emerald-500/50 ring-1 ring-emerald-500/20"
                  : "bg-neutral-900/50 border-neutral-800 hover:border-neutral-700"
              )}
            >
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 bg-neutral-950 rounded-lg flex items-center justify-center text-2xl">
                  {/* Placeholder for image if not loading */}
                  <Package className="w-8 h-8 text-neutral-700" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-medium text-sm">{product.name}</h3>
                      {badge && (
                        <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded w-fit border border-emerald-500/20">
                          {badge}
                        </span>
                      )}
                    </div>
                    <span className="text-emerald-400 font-mono text-sm">
                      ${product.price}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {product.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 bg-neutral-800 rounded-full text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {isSelected && (
                <div className="absolute top-2 right-2 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-black" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Budget Tetris Suggestions */}
      <AnimatePresence>
        {isOverBudget && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-4 left-4 right-4 bg-red-950/90 backdrop-blur-md p-4 rounded-2xl border border-red-500/30 shadow-2xl z-50"
          >
            <div className="flex items-center gap-2 text-red-200 mb-3">
              <AlertCircle className="w-5 h-5" />
              <span className="font-medium text-sm">
                Over Budget! Try swapping:
              </span>
            </div>
            <div className="space-y-2">
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion.id}
                  onClick={() => selectProduct(suggestion)}
                  className="flex items-center justify-between p-2 bg-red-900/30 rounded-lg cursor-pointer hover:bg-red-900/50 transition-colors"
                >
                  <span className="text-sm text-red-100">
                    Switch to {suggestion.name}
                  </span>
                  <span className="text-xs font-mono text-emerald-300">
                    Save $
                    {selectedProducts[suggestion.category]!.price -
                      suggestion.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
