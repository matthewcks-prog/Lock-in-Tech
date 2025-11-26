export type Category = 'headphones' | 'mouse' | 'keyboard' | 'laptop-stand' | 'monitor' | 'speaker' | 'accessory' | 'notebook';
export type Tier = 'budget' | 'value' | 'premium';
export type Tag = 'noise-cancelling' | 'ergonomic' | 'compact' | 'wireless' | 'aesthetic' | 'rgb';
export type Environment = 'noisy-dorm' | 'quiet-library' | 'home-office';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string; // Path to image in public folder
  category: Category;
  tier: Tier;
  tags: Tag[];
  focusPoints: number; // 1-20, used for scoring
  brand: string; // Used for synergy bonuses
}

export interface VibeItems {
  coffee: boolean;
  plant: boolean;
  lamp: boolean;
}

export interface ConfiguratorState {
  budget: number;
  environment: Environment;
  selectedProducts: Partial<Record<Category, Product>>;
  vibeItems: VibeItems;
}
