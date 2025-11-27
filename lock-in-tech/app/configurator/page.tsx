import React from "react";
import { PRODUCTS } from "../../data/products";
import ConfiguratorClient from "./ConfiguratorClient";

// Revalidate every 12 hours to respect PA-API 24h limit
export const revalidate = 43200;

export default async function ConfiguratorPage() {
  // For now, we are using static data from data/products.ts
  // This bypasses the Amazon PA-API until approval is granted.
  const mappedProducts = PRODUCTS;

  return <ConfiguratorClient initialProducts={mappedProducts} />;
}
