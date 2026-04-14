export interface ColorPalette {
  id: string;
  name: string;
  colors: string[];
}

export const colorPalettes: ColorPalette[] = [
  { id: 'blue-professional', name: 'Professional Blue', colors: ['#1e3a5f', '#2563eb', '#60a5fa', '#dbeafe'] },
  { id: 'green-nature', name: 'Natural Green', colors: ['#14532d', '#16a34a', '#4ade80', '#dcfce7'] },
  { id: 'red-bold', name: 'Bold Red', colors: ['#7f1d1d', '#dc2626', '#f87171', '#fee2e2'] },
  { id: 'purple-creative', name: 'Creative Purple', colors: ['#581c87', '#7c3aed', '#a78bfa', '#ede9fe'] },
  { id: 'orange-warm', name: 'Warm Orange', colors: ['#7c2d12', '#ea580c', '#fb923c', '#ffedd5'] },
  { id: 'teal-modern', name: 'Modern Teal', colors: ['#134e4a', '#0d9488', '#2dd4bf', '#ccfbf1'] },
  { id: 'pink-playful', name: 'Playful Pink', colors: ['#831843', '#db2777', '#f472b6', '#fce7f3'] },
  { id: 'navy-corporate', name: 'Corporate Navy', colors: ['#1e293b', '#334155', '#64748b', '#cbd5e1'] },
  { id: 'gold-luxury', name: 'Luxury Gold', colors: ['#78350f', '#b45309', '#f59e0b', '#fef3c7'] },
  { id: 'monochrome', name: 'Monochrome', colors: ['#18181b', '#3f3f46', '#71717a', '#e4e4e7'] },
  { id: 'sunset', name: 'Sunset', colors: ['#9a3412', '#e11d48', '#f97316', '#fde68a'] },
  { id: 'ocean', name: 'Ocean Breeze', colors: ['#1e3a5f', '#0891b2', '#06b6d4', '#a5f3fc'] },
  { id: 'forest', name: 'Forest', colors: ['#1a2e05', '#4d7c0f', '#84cc16', '#d9f99d'] },
  { id: 'berry', name: 'Berry', colors: ['#4a044e', '#9333ea', '#c084fc', '#f3e8ff'] },
  { id: 'coral', name: 'Coral', colors: ['#7c2d12', '#e11d48', '#fb7185', '#ffe4e6'] },
  { id: 'mint', name: 'Fresh Mint', colors: ['#022c22', '#047857', '#34d399', '#d1fae5'] },
];

export const fontOptions = [
  { id: 'inter', name: 'Inter', class: 'font-inter', family: "'Inter', sans-serif" },
  { id: 'playfair', name: 'Playfair Display', class: 'font-playfair', family: "'Playfair Display', serif" },
  { id: 'montserrat', name: 'Montserrat', class: 'font-montserrat', family: "'Montserrat', sans-serif" },
  { id: 'poppins', name: 'Poppins', class: 'font-poppins', family: "'Poppins', sans-serif" },
  { id: 'raleway', name: 'Raleway', class: 'font-raleway', family: "'Raleway', sans-serif" },
  { id: 'roboto', name: 'Roboto', class: 'font-roboto', family: "'Roboto', sans-serif" },
  { id: 'oswald', name: 'Oswald', class: 'font-oswald', family: "'Oswald', sans-serif" },
  { id: 'lato', name: 'Lato', class: 'font-lato', family: "'Lato', sans-serif" },
  { id: 'merriweather', name: 'Merriweather', class: 'font-merriweather', family: "'Merriweather', serif" },
  { id: 'open-sans', name: 'Open Sans', class: 'font-open-sans', family: "'Open Sans', sans-serif" },
];

export const industries = [
  { id: 'technology', name: 'Technology', emoji: '💻' },
  { id: 'business', name: 'Business', emoji: '💼' },
  { id: 'food-drink', name: 'Food & Drink', emoji: '🍕' },
  { id: 'health-fitness', name: 'Health & Fitness', emoji: '❤️' },
  { id: 'nature-environment', name: 'Nature & Environment', emoji: '🌿' },
  { id: 'creative-art', name: 'Creative & Art', emoji: '🎨' },
  { id: 'education', name: 'Education', emoji: '📚' },
  { id: 'animals-pets', name: 'Animals & Pets', emoji: '🐾' },
  { id: 'home-real-estate', name: 'Home & Real Estate', emoji: '🏠' },
  { id: 'fashion-beauty', name: 'Fashion & Beauty', emoji: '✨' },
  { id: 'sports-recreation', name: 'Sports & Recreation', emoji: '🏆' },
  { id: 'travel-tourism', name: 'Travel & Tourism', emoji: '🌍' },
  { id: 'finance-banking', name: 'Finance & Banking', emoji: '💰' },
  { id: 'other', name: 'Other', emoji: '🔮' },
];

export const layoutOptions = [
  { id: 'icon-left', name: 'Icon Left', description: 'Icon to the left of text' },
  { id: 'icon-top', name: 'Icon Top', description: 'Icon above the text' },
  { id: 'icon-right', name: 'Icon Right', description: 'Icon to the right of text' },
  { id: 'icon-only', name: 'Icon Only', description: 'Just the icon, no text' },
  { id: 'text-only', name: 'Text Only', description: 'Just the text, no icon' },
  { id: 'icon-badge', name: 'Icon Badge', description: 'Icon in a circle badge' },
];
