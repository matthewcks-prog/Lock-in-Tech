import { create } from 'zustand';
import { Product, Category, Environment, ConfiguratorState, VibeItems } from '../types';
import { products } from '../data/products';

interface ConfiguratorStore extends ConfiguratorState {
  // Actions
  setBudget: (budget: number) => void;
  setEnvironment: (env: Environment) => void;
  selectProduct: (product: Product) => void;
  toggleVibeItem: (item: keyof VibeItems) => void;
  
  // Computed values (updated on state change)
  focusScore: number;
  totalCost: number;
  isOverBudget: boolean;
  suggestions: Product[]; // "Budget Tetris" suggestions
}

const calculateFocusScore = (
  selectedProducts: Partial<Record<Category, Product>>,
  environment: Environment,
  vibeItems: VibeItems
): number => {
  let score = 50; // Base score

  const items = Object.values(selectedProducts) as Product[];

  // 1. Product Base Points
  items.forEach(item => {
    score += Math.floor(item.focusPoints / 2); // Add half of the item's raw focus points
  });

  // 2. Environment Bonuses
  if (environment === 'noisy-dorm') {
    if (selectedProducts.headphones?.tags.includes('noise-cancelling')) score += 15;
  } else if (environment === 'quiet-library') {
    if (selectedProducts.keyboard?.tags.includes('compact')) score += 10;
    if (selectedProducts.mouse?.tags.includes('compact')) score += 5;
  } else if (environment === 'home-office') {
    if (selectedProducts.mouse?.tags.includes('ergonomic')) score += 10;
    if (selectedProducts['laptop-stand']?.tags.includes('ergonomic')) score += 10;
  }

  // 3. Synergy Bonus (Brand Match)
  if (selectedProducts.mouse && selectedProducts.keyboard) {
    if (selectedProducts.mouse.brand === selectedProducts.keyboard.brand) {
      score += 5;
    }
  }

  // 4. Vibe Bonuses
  if (vibeItems.plant) score += 2;
  if (vibeItems.lamp) score += 3;
  if (vibeItems.coffee) score += 5;

  return Math.min(100, score); // Cap at 100
};

const getBudgetSuggestions = (
  selectedProducts: Partial<Record<Category, Product>>,
  totalCost: number,
  budget: number
): Product[] => {
  if (totalCost <= budget) return [];

  const suggestions: Product[] = [];
  const deficit = totalCost - budget;

  // Find selected items that are NOT 'budget' tier
  const downgradeCandidates = (Object.values(selectedProducts) as Product[])
    .filter(p => p.tier !== 'budget')
    .sort((a, b) => b.price - a.price); // Sort by most expensive

  for (const item of downgradeCandidates) {
    // Find a cheaper alternative in the same category
    const cheaperAlt = products.find(p => 
      p.category === item.category && 
      p.price < item.price &&
      (item.price - p.price) >= (deficit * 0.5) // Try to close at least half the gap
    );

    if (cheaperAlt) {
      suggestions.push(cheaperAlt);
    }
  }

  return suggestions.slice(0, 2); // Return top 2 suggestions
};

export const useConfigurator = create<ConfiguratorStore>((set, get) => ({
  // Initial State
  budget: 500,
  environment: 'noisy-dorm',
  selectedProducts: {},
  vibeItems: { coffee: false, plant: false, lamp: false },
  focusScore: 50,
  totalCost: 0,
  isOverBudget: false,
  suggestions: [],

  setBudget: (budget) => {
    set({ budget });
    // Recalculate budget constraints
    const state = get();
    const suggestions = getBudgetSuggestions(state.selectedProducts, state.totalCost, budget);
    set({ 
      isOverBudget: state.totalCost > budget,
      suggestions 
    });
  },

  setEnvironment: (environment) => {
    set({ environment });
    const state = get();
    set({ focusScore: calculateFocusScore(state.selectedProducts, environment, state.vibeItems) });
  },

  selectProduct: (product) => {
    set((state) => {
      const newSelected = { ...state.selectedProducts, [product.category]: product };
      
      // Calculate new total
      const newTotal = Object.values(newSelected).reduce((sum, item) => sum + (item?.price || 0), 0);
      
      // Calculate new score
      const newScore = calculateFocusScore(newSelected, state.environment, state.vibeItems);

      // Calculate suggestions
      const newSuggestions = getBudgetSuggestions(newSelected, newTotal, state.budget);

      return {
        selectedProducts: newSelected,
        totalCost: newTotal,
        focusScore: newScore,
        isOverBudget: newTotal > state.budget,
        suggestions: newSuggestions
      };
    });
  },

  toggleVibeItem: (item) => {
    set((state) => {
      const newVibeItems = { ...state.vibeItems, [item]: !state.vibeItems[item] };
      const newScore = calculateFocusScore(state.selectedProducts, state.environment, newVibeItems);
      return {
        vibeItems: newVibeItems,
        focusScore: newScore
      };
    });
  }
}));
