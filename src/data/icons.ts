export interface IconData {
  id: string;
  name: string;
  category: string;
  path: string;
  viewBox: string;
}

export const icons: IconData[] = [
  // Technology
  { id: 'tech-1', name: 'Circuit', category: 'Technology', viewBox: '0 0 24 24', path: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
  { id: 'tech-2', name: 'Code', category: 'Technology', viewBox: '0 0 24 24', path: 'M16 18l6-6-6-6M8 6l-6 6 6 6' },
  { id: 'tech-3', name: 'CPU', category: 'Technology', viewBox: '0 0 24 24', path: 'M4 4h16v16H4z M9 9h6v6H9z M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3' },
  { id: 'tech-4', name: 'Cloud', category: 'Technology', viewBox: '0 0 24 24', path: 'M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z' },
  { id: 'tech-5', name: 'Database', category: 'Technology', viewBox: '0 0 24 24', path: 'M12 8c-4 0-7 1.3-7 3s3 3 7 3 7-1.3 7-3-3-3-7-3zM5 11v3c0 1.7 3 3 7 3s7-1.3 7-3v-3M5 14v3c0 1.7 3 3 7 3s7-1.3 7-3v-3' },
  { id: 'tech-6', name: 'Rocket', category: 'Technology', viewBox: '0 0 24 24', path: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z' },

  // Business
  { id: 'biz-1', name: 'Briefcase', category: 'Business', viewBox: '0 0 24 24', path: 'M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2' },
  { id: 'biz-2', name: 'Chart', category: 'Business', viewBox: '0 0 24 24', path: 'M18 20V10M12 20V4M6 20v-6' },
  { id: 'biz-3', name: 'Target', category: 'Business', viewBox: '0 0 24 24', path: 'M12 2a10 10 0 100 20 10 10 0 000-20zM12 6a6 6 0 100 12 6 6 0 000-12zM12 10a2 2 0 100 4 2 2 0 000-4z' },
  { id: 'biz-4', name: 'Handshake', category: 'Business', viewBox: '0 0 24 24', path: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5' },
  { id: 'biz-5', name: 'Lightbulb', category: 'Business', viewBox: '0 0 24 24', path: 'M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z' },
  { id: 'biz-6', name: 'Crown', category: 'Business', viewBox: '0 0 24 24', path: 'M2 20h20M4 20l2-14 4 6 2-8 2 8 4-6 2 14' },

  // Food & Drink
  { id: 'food-1', name: 'Coffee', category: 'Food & Drink', viewBox: '0 0 24 24', path: 'M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3' },
  { id: 'food-2', name: 'Pizza', category: 'Food & Drink', viewBox: '0 0 24 24', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 12h.01M12 8h.01M16 12h.01M12 16h.01' },
  { id: 'food-3', name: 'Utensils', category: 'Food & Drink', viewBox: '0 0 24 24', path: 'M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7' },
  { id: 'food-4', name: 'Cake', category: 'Food & Drink', viewBox: '0 0 24 24', path: 'M20 21v-8a2 2 0 00-2-2H6a2 2 0 00-2 2v8M4 21h16M6 11V6a2 2 0 012-2h1a2 2 0 012 2v1M12 7V3M14 11V6a2 2 0 012-2h1a2 2 0 012 2v3' },

  // Health & Fitness
  { id: 'health-1', name: 'Heart', category: 'Health', viewBox: '0 0 24 24', path: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z' },
  { id: 'health-2', name: 'Activity', category: 'Health', viewBox: '0 0 24 24', path: 'M22 12h-4l-3 9L9 3l-3 9H2' },
  { id: 'health-3', name: 'Shield', category: 'Health', viewBox: '0 0 24 24', path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
  { id: 'health-4', name: 'Cross', category: 'Health', viewBox: '0 0 24 24', path: 'M9 2h6v6h6v6h-6v6H9v-6H3V8h6z' },

  // Nature & Environment
  { id: 'nature-1', name: 'Leaf', category: 'Nature', viewBox: '0 0 24 24', path: 'M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75' },
  { id: 'nature-2', name: 'Tree', category: 'Nature', viewBox: '0 0 24 24', path: 'M12 22V8M5 12l7-10 7 10H5zM8 22h8' },
  { id: 'nature-3', name: 'Sun', category: 'Nature', viewBox: '0 0 24 24', path: 'M12 17a5 5 0 100-10 5 5 0 000 10zM12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42' },
  { id: 'nature-4', name: 'Mountain', category: 'Nature', viewBox: '0 0 24 24', path: 'M8 21l4-10 4 10M2 21l6-14 3.5 7M22 21l-6-14-2 4' },
  { id: 'nature-5', name: 'Droplet', category: 'Nature', viewBox: '0 0 24 24', path: 'M12 2.69l5.66 5.66a8 8 0 11-11.31 0z' },

  // Creative & Art
  { id: 'creative-1', name: 'Palette', category: 'Creative', viewBox: '0 0 24 24', path: 'M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10a2.5 2.5 0 002.5-2.5c0-.61-.23-1.21-.64-1.67-.43-.49-.64-1.13-.64-1.83 0-1.38 1.12-2.5 2.5-2.5H18c3.31 0 6-2.69 6-6 0-4.96-5.49-7.5-12-7.5z' },
  { id: 'creative-2', name: 'Pen', category: 'Creative', viewBox: '0 0 24 24', path: 'M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586' },
  { id: 'creative-3', name: 'Camera', category: 'Creative', viewBox: '0 0 24 24', path: 'M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2zM12 17a4 4 0 100-8 4 4 0 000 8z' },
  { id: 'creative-4', name: 'Music', category: 'Creative', viewBox: '0 0 24 24', path: 'M9 18V5l12-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zM21 16a3 3 0 11-6 0 3 3 0 016 0z' },

  // Education
  { id: 'edu-1', name: 'Book', category: 'Education', viewBox: '0 0 24 24', path: 'M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 004 17V5a2 2 0 012-2h14v14H6.5A2.5 2.5 0 004 19.5z' },
  { id: 'edu-2', name: 'Graduation', category: 'Education', viewBox: '0 0 24 24', path: 'M22 10l-10-6L2 10l10 6 10-6zM6 12v5c0 0 2.5 3 6 3s6-3 6-3v-5' },
  { id: 'edu-3', name: 'Pencil', category: 'Education', viewBox: '0 0 24 24', path: 'M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z' },

  // Animals
  { id: 'animal-1', name: 'Paw', category: 'Animals', viewBox: '0 0 24 24', path: 'M12 18c-2.21 0-4-1.79-4-4 0-1.66 1.34-3 3-3h2c1.66 0 3 1.34 3 3 0 2.21-1.79 4-4 4zM6.5 10c-.83 0-1.5-.67-1.5-1.5S5.67 7 6.5 7s1.5.67 1.5 1.5S7.33 10 6.5 10zM17.5 10c-.83 0-1.5-.67-1.5-1.5S16.67 7 17.5 7s1.5.67 1.5 1.5S18.33 10 17.5 10zM9 5c-.83 0-1.5-.67-1.5-1.5S8.17 2 9 2s1.5.67 1.5 1.5S9.83 5 9 5zM15 5c-.83 0-1.5-.67-1.5-1.5S14.17 2 15 2s1.5.67 1.5 1.5S15.83 5 15 5z' },
  { id: 'animal-2', name: 'Bird', category: 'Animals', viewBox: '0 0 24 24', path: 'M23 3a10.9 10.9 0 01-9.3 5.4 10.48 10.48 0 01-7.1-2.9A10.9 10.9 0 001 11.4a11 11 0 0018.6 7.5A10.48 10.48 0 0023 3z' },
  { id: 'animal-3', name: 'Fish', category: 'Animals', viewBox: '0 0 24 24', path: 'M6.5 12C6.5 7 10 2 16 2c1.5 0 3 .5 4 1.5L22 6l-2 2.5c-1 1-2.5 1.5-4 1.5-6 0-9.5-5-9.5-10zM6.5 12c0 5 3.5 10 9.5 10 1.5 0 3-.5 4-1.5L22 18l-2-2.5c-1-1-2.5-1.5-4-1.5-6 0-9.5 5-9.5 10z' },

  // Home & Real Estate
  { id: 'home-1', name: 'House', category: 'Home', viewBox: '0 0 24 24', path: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10' },
  { id: 'home-2', name: 'Key', category: 'Home', viewBox: '0 0 24 24', path: 'M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.78 7.78 5.5 5.5 0 017.78-7.78zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4' },
  { id: 'home-3', name: 'Building', category: 'Home', viewBox: '0 0 24 24', path: 'M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01' },

  // Abstract & Geometric
  { id: 'abstract-1', name: 'Diamond', category: 'Abstract', viewBox: '0 0 24 24', path: 'M6 3h12l4 6-10 13L2 9z' },
  { id: 'abstract-2', name: 'Hexagon', category: 'Abstract', viewBox: '0 0 24 24', path: 'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' },
  { id: 'abstract-3', name: 'Star', category: 'Abstract', viewBox: '0 0 24 24', path: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
  { id: 'abstract-4', name: 'Circle', category: 'Abstract', viewBox: '0 0 24 24', path: 'M12 2a10 10 0 100 20 10 10 0 000-20zM12 8a4 4 0 100 8 4 4 0 000-8z' },
  { id: 'abstract-5', name: 'Triangle', category: 'Abstract', viewBox: '0 0 24 24', path: 'M12 3L1 21h22L12 3zM12 9l-5.5 9h11L12 9z' },
  { id: 'abstract-6', name: 'Infinity', category: 'Abstract', viewBox: '0 0 24 24', path: 'M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z' },
  { id: 'abstract-7', name: 'Zap', category: 'Abstract', viewBox: '0 0 24 24', path: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
  { id: 'abstract-8', name: 'Layers', category: 'Abstract', viewBox: '0 0 24 24', path: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },

  // Sports
  { id: 'sport-1', name: 'Trophy', category: 'Sports', viewBox: '0 0 24 24', path: 'M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22h10c0-2-0.85-3.25-2.03-3.79A1.08 1.08 0 0114 17v-2.34M18 2H6v7a6 6 0 1012 0V2z' },
  { id: 'sport-2', name: 'Flag', category: 'Sports', viewBox: '0 0 24 24', path: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7' },

  // Fashion
  { id: 'fashion-1', name: 'Scissors', category: 'Fashion', viewBox: '0 0 24 24', path: 'M6 6a3 3 0 100 6 3 3 0 000-6zM6 12a3 3 0 100 6 3 3 0 000-6zM20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12' },
  { id: 'fashion-2', name: 'Gem', category: 'Fashion', viewBox: '0 0 24 24', path: 'M6 3h12l4 6-10 13L2 9zM2 9h20M6 3l-4 6M18 3l4 6M6 3l4 6M18 3l-4 6M10 9l2 13M14 9l-2 13' },

  // Travel
  { id: 'travel-1', name: 'Globe', category: 'Travel', viewBox: '0 0 24 24', path: 'M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z' },
  { id: 'travel-2', name: 'Compass', category: 'Travel', viewBox: '0 0 24 24', path: 'M12 2a10 10 0 100 20 10 10 0 000-20zM16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z' },
  { id: 'travel-3', name: 'Map', category: 'Travel', viewBox: '0 0 24 24', path: 'M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4zM8 2v16M16 6v16' },

  // Finance
  { id: 'finance-1', name: 'Dollar', category: 'Finance', viewBox: '0 0 24 24', path: 'M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6' },
  { id: 'finance-2', name: 'Trending Up', category: 'Finance', viewBox: '0 0 24 24', path: 'M23 6l-9.5 9.5-5-5L1 18M17 6h6v6' },
  { id: 'finance-3', name: 'Wallet', category: 'Finance', viewBox: '0 0 24 24', path: 'M21 12V7H5a2 2 0 010-4h14v4M3 5v14a2 2 0 002 2h16v-5M18 12a2 2 0 100 4h4v-4h-4z' },
];

export const industryIcons: Record<string, string[]> = {
  'Technology': ['tech-1', 'tech-2', 'tech-3', 'tech-4', 'tech-5', 'tech-6', 'abstract-1', 'abstract-7'],
  'Business': ['biz-1', 'biz-2', 'biz-3', 'biz-4', 'biz-5', 'biz-6', 'finance-2', 'abstract-8'],
  'Food & Drink': ['food-1', 'food-2', 'food-3', 'food-4', 'nature-5', 'abstract-3'],
  'Health & Fitness': ['health-1', 'health-2', 'health-3', 'health-4', 'nature-3', 'abstract-7'],
  'Nature & Environment': ['nature-1', 'nature-2', 'nature-3', 'nature-4', 'nature-5', 'animal-2'],
  'Creative & Art': ['creative-1', 'creative-2', 'creative-3', 'creative-4', 'abstract-1', 'abstract-6'],
  'Education': ['edu-1', 'edu-2', 'edu-3', 'book', 'abstract-3', 'biz-5'],
  'Animals & Pets': ['animal-1', 'animal-2', 'animal-3', 'nature-1', 'health-1', 'abstract-3'],
  'Home & Real Estate': ['home-1', 'home-2', 'home-3', 'biz-6', 'abstract-2', 'nature-4'],
  'Fashion & Beauty': ['fashion-1', 'fashion-2', 'creative-1', 'health-1', 'abstract-1', 'abstract-3'],
  'Sports & Recreation': ['sport-1', 'sport-2', 'health-2', 'abstract-7', 'travel-2', 'biz-3'],
  'Travel & Tourism': ['travel-1', 'travel-2', 'travel-3', 'nature-4', 'tech-6', 'abstract-6'],
  'Finance & Banking': ['finance-1', 'finance-2', 'finance-3', 'biz-2', 'biz-3', 'abstract-2'],
  'Other': ['abstract-1', 'abstract-2', 'abstract-3', 'abstract-4', 'abstract-5', 'abstract-6', 'abstract-7', 'abstract-8'],
};

export function getIconById(id: string): IconData | undefined {
  return icons.find(icon => icon.id === id);
}

export function getIconsByCategory(category: string): IconData[] {
  return icons.filter(icon => icon.category === category);
}
