import { Product } from '../types';

export const products: Product[] = [
  // Headphones
  {
    id: 'h-1',
    name: 'Basic Wired Buds',
    price: 20,
    image: '/images/headphones-budget.png',
    category: 'headphones',
    tier: 'budget',
    tags: ['compact'],
    focusPoints: 5,
    brand: 'Generic'
  },
  {
    id: 'h-2',
    name: 'Focus ANC Over-Ear',
    price: 80,
    image: '/images/headphones-value.png',
    category: 'headphones',
    tier: 'value',
    tags: ['noise-cancelling', 'wireless', 'ergonomic'],
    focusPoints: 15,
    brand: 'SoundCore'
  },
  {
    id: 'h-3',
    name: 'Studio Pro Master',
    price: 350,
    image: '/images/headphones-premium.png',
    category: 'headphones',
    tier: 'premium',
    tags: ['noise-cancelling', 'aesthetic', 'wireless'],
    focusPoints: 20,
    brand: 'AudioTech'
  },

  // Mouse
  {
    id: 'm-1',
    name: 'Clicky Basic',
    price: 15,
    image: '/images/mouse-budget.png',
    category: 'mouse',
    tier: 'budget',
    tags: ['compact'],
    focusPoints: 5,
    brand: 'Generic'
  },
  {
    id: 'm-2',
    name: 'ErgoLift Vertical',
    price: 50,
    image: '/images/mouse-value.png',
    category: 'mouse',
    tier: 'value',
    tags: ['ergonomic', 'wireless'],
    focusPoints: 18,
    brand: 'LogiTech'
  },
  {
    id: 'm-3',
    name: 'Pro Gamer Ultralight',
    price: 120,
    image: '/images/mouse-premium.png',
    category: 'mouse',
    tier: 'premium',
    tags: ['wireless', 'rgb', 'aesthetic'],
    focusPoints: 12,
    brand: 'Razer'
  },

  // Keyboard
  {
    id: 'k-1',
    name: 'Membrane Slim',
    price: 25,
    image: '/images/keyboard-budget.png',
    category: 'keyboard',
    tier: 'budget',
    tags: ['compact'],
    focusPoints: 6,
    brand: 'Generic'
  },
  {
    id: 'k-2',
    name: 'Mech Tactile TKL',
    price: 90,
    image: '/images/keyboard-value.png',
    category: 'keyboard',
    tier: 'value',
    tags: ['aesthetic', 'ergonomic'],
    focusPoints: 16,
    brand: 'LogiTech'
  },
  {
    id: 'k-3',
    name: 'Custom Aluminum 65%',
    price: 250,
    image: '/images/keyboard-premium.png',
    category: 'keyboard',
    tier: 'premium',
    tags: ['aesthetic', 'wireless', 'rgb'],
    focusPoints: 19,
    brand: 'KeyCult'
  },

  // Laptop Stand
  {
    id: 'ls-1',
    name: 'Plastic Foldable',
    price: 15,
    image: '/images/stand-budget.png',
    category: 'laptop-stand',
    tier: 'budget',
    tags: ['compact'],
    focusPoints: 8,
    brand: 'Generic'
  },
  {
    id: 'ls-2',
    name: 'Aluminum Riser',
    price: 45,
    image: '/images/stand-value.png',
    category: 'laptop-stand',
    tier: 'value',
    tags: ['aesthetic', 'ergonomic'],
    focusPoints: 14,
    brand: 'TwelveSouth'
  },
  {
    id: 'ls-3',
    name: 'Adjustable Arm Mount',
    price: 100,
    image: '/images/stand-premium.png',
    category: 'laptop-stand',
    tier: 'premium',
    tags: ['ergonomic', 'aesthetic'],
    focusPoints: 18,
    brand: 'ErgoTron'
  },

  // Monitor
  {
    id: 'mn-1',
    name: '21" Basic 1080p',
    price: 90,
    image: '/images/monitor-budget.png',
    category: 'monitor',
    tier: 'budget',
    tags: ['compact'],
    focusPoints: 10,
    brand: 'Dell'
  },
  {
    id: 'mn-2',
    name: '27" 1440p IPS',
    price: 250,
    image: '/images/monitor-value.png',
    category: 'monitor',
    tier: 'value',
    tags: ['aesthetic'],
    focusPoints: 17,
    brand: 'Dell'
  },
  {
    id: 'mn-3',
    name: '34" Ultrawide Curved',
    price: 500,
    image: '/images/monitor-premium.png',
    category: 'monitor',
    tier: 'premium',
    tags: ['aesthetic', 'ergonomic'],
    focusPoints: 20,
    brand: 'Samsung'
  }
];
