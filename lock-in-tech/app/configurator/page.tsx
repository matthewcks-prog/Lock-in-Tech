import React from "react";
import { PRODUCTS } from "../../data/products";
import { getAmazonItemsByAsins } from "../../lib/amazon";
import ConfiguratorClient from "./ConfiguratorClient";
import { Product, Category, Tier, Tag } from "../../types";

// Revalidate every 12 hours to respect PA-API 24h limit
export const revalidate = 43200;

export default async function ConfiguratorPage() {
  // 1. Fetch data from Amazon PA-API
  const asins = PRODUCTS.map((p) => p.asin);
  const amazonItems = await getAmazonItemsByAsins(asins);

  // 2. Map Amazon data to our internal Product type
  // We need to infer category/tier/tags because PA-API doesn't give us that context.
  // In a real app, you might store this metadata in your database or a config object keyed by ASIN.
  const mappedProducts: Product[] = amazonItems.map((item) => {
    // Find the original config to get the "intended" name if needed, or just use Amazon's
    const originalConfig = PRODUCTS.find((p) => p.asin === item.asin);

    // Simple heuristic to assign categories based on keywords in the title or the original config name
    // This is a fallback since we don't have a database.
    let category: Category = "accessory";
    const lowerTitle = (originalConfig?.name || item.title).toLowerCase();

    if (lowerTitle.includes("monitor")) category = "monitor";
    else if (lowerTitle.includes("stand")) category = "laptop-stand";
    else if (lowerTitle.includes("keyboard")) category = "keyboard";
    else if (lowerTitle.includes("mouse")) category = "mouse";
    else if (
      lowerTitle.includes("earbuds") ||
      lowerTitle.includes("headphones")
    )
      category = "headphones";
    else if (lowerTitle.includes("speaker")) category = "speaker";
    else if (lowerTitle.includes("notebook")) category = "notebook";

    // Assign random or heuristic tiers/tags for the "game" aspect
    const tier: Tier =
      item.amount && item.amount > 100
        ? "premium"
        : item.amount && item.amount > 50
        ? "value"
        : "budget";
    const tags: Tag[] = [];
    if (lowerTitle.includes("wireless")) tags.push("wireless");
    if (lowerTitle.includes("rgb")) tags.push("rgb");
    if (lowerTitle.includes("ergonomic")) tags.push("ergonomic");
    if (tags.length === 0) tags.push("aesthetic"); // Default tag

    return {
      id: item.asin,
      name: item.title.substring(0, 50) + (item.title.length > 50 ? "..." : ""), // Truncate long Amazon titles
      price: item.amount || 0,
      image: item.imageUrl,
      category,
      tier,
      tags,
      focusPoints: Math.floor(Math.random() * 10) + 5, // Random focus points for now
      brand: "Amazon", // Could parse from title
    };
  });

  return <ConfiguratorClient initialProducts={mappedProducts} />;
}
