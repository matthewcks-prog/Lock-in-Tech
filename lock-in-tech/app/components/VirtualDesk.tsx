"use client";

import React from "react";
import { motion } from "framer-motion";
import { useConfigurator } from "../../hooks/useConfigurator";
import Image from "next/image";
import { Coffee, Leaf } from "lucide-react";

export const VirtualDesk = () => {
  const { selectedProducts, vibeItems } = useConfigurator();

  return (
    <div className="relative w-full h-[600px] bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
      {/* Desk Surface */}
      <div className="absolute inset-x-10 bottom-10 top-20 bg-[#2a2a2a] rounded-xl shadow-inner opacity-80" />

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
            className="object-contain drop-shadow-2xl"
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
            className="object-contain drop-shadow-xl"
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
            className="object-contain drop-shadow-lg"
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
            className="object-contain drop-shadow-lg"
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
            className="object-contain drop-shadow-lg"
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
  );
};
