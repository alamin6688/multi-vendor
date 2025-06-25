// This file simulates API calls for products, vendors, and categories.
// Replace the mock data and setTimeouts with real fetch/database calls later.

// --- PRODUCTS ---
export const fetchProducts = async () => {
  // TODO: Replace with real API call, e.g. fetch('/api/products')
  // Example: return fetch('/api/products').then(res => res.json());
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Wireless Earbuds Pro",
          price: 299,
          rating: 4.8,
          reviews: 124,
          category: "tech",
          vendor: "TechZone Pro",
          image: "🎧",
          discount: 20,
        },
        {
          id: 2,
          name: "Smart Watch Series X",
          price: 449,
          rating: 4.9,
          reviews: 89,
          category: "tech",
          vendor: "GadgetHub",
          image: "⌚",
          discount: 0,
        },
        {
          id: 3,
          name: "Designer Jacket",
          price: 199,
          rating: 4.7,
          reviews: 56,
          category: "fashion",
          vendor: "Fashion Forward",
          image: "🧥",
          discount: 15,
        },
        {
          id: 4,
          name: "Premium Coffee Maker",
          price: 159,
          rating: 4.6,
          reviews: 78,
          category: "home",
          vendor: "Home Essentials",
          image: "☕",
          discount: 25,
        },
        {
          id: 5,
          name: "Gaming Mechanical Keyboard",
          price: 129,
          rating: 4.8,
          reviews: 203,
          category: "tech",
          vendor: "TechZone Pro",
          image: "⌨️",
          discount: 10,
        },
        {
          id: 6,
          name: "Luxury Handbag",
          price: 299,
          rating: 4.9,
          reviews: 45,
          category: "fashion",
          vendor: "Fashion Forward",
          image: "👜",
          discount: 0,
        },
        {
          id: 7,
          name: "Smart Home Speaker",
          price: 89,
          rating: 4.5,
          reviews: 167,
          category: "home",
          vendor: "Home Essentials",
          image: "🔊",
          discount: 30,
        },
        {
          id: 8,
          name: "Fitness Tracker",
          price: 79,
          rating: 4.4,
          reviews: 92,
          category: "tech",
          vendor: "GadgetHub",
          image: "📱",
          discount: 20,
        },
      ]);
    }, 300);
  });
};

// --- VENDORS ---
export const fetchVendors = async () => {
  // TODO: Replace with real API call, e.g. fetch('/api/vendors')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "TechZone Pro",
          rating: 4.8,
          products: 150,
          image: "🏢",
          verified: true,
        },
        {
          id: 2,
          name: "Fashion Forward",
          rating: 4.9,
          products: 89,
          image: "👗",
          verified: true,
        },
        {
          id: 3,
          name: "Home Essentials",
          rating: 4.7,
          products: 200,
          image: "🏡",
          verified: true,
        },
        {
          id: 4,
          name: "GadgetHub",
          rating: 4.6,
          products: 75,
          image: "🔧",
          verified: false,
        },
      ]);
    }, 300);
  });
};

// --- CATEGORIES ---
export const fetchCategories = async () => {
  // TODO: Replace with real API call, e.g. fetch('/api/categories')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: "all", name: "All Products", icon: "🏪" },
        { id: "tech", name: "Tech Gadgets", icon: "📱" },
        { id: "fashion", name: "Fashion", icon: "👔" },
        { id: "home", name: "Home Items", icon: "🏠" },
      ]);
    }, 300);
  });
};

// --- Example for future database fetch ---
// export const fetchProducts = async () => {
//   return fetch('/api/products').then(res => res.json());
// };
