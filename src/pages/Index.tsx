
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import VendorsSection from '@/components/VendorsSection';
import ProductsSection from '@/components/ProductsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'All Products', icon: '🏪' },
    { id: 'tech', name: 'Tech Gadgets', icon: '📱' },
    { id: 'fashion', name: 'Fashion', icon: '👔' },
    { id: 'home', name: 'Home Items', icon: '🏠' }
  ];

  const vendors = [
    { id: 1, name: 'TechZone Pro', rating: 4.8, products: 150, image: '🏢', verified: true },
    { id: 2, name: 'Fashion Forward', rating: 4.9, products: 89, image: '👗', verified: true },
    { id: 3, name: 'Home Essentials', rating: 4.7, products: 200, image: '🏡', verified: true },
    { id: 4, name: 'GadgetHub', rating: 4.6, products: 75, image: '🔧', verified: false }
  ];

  const products = [
    { id: 1, name: 'Wireless Earbuds Pro', price: 299, rating: 4.8, reviews: 124, category: 'tech', vendor: 'TechZone Pro', image: '🎧', discount: 20 },
    { id: 2, name: 'Smart Watch Series X', price: 449, rating: 4.9, reviews: 89, category: 'tech', vendor: 'GadgetHub', image: '⌚', discount: 0 },
    { id: 3, name: 'Designer Jacket', price: 199, rating: 4.7, reviews: 56, category: 'fashion', vendor: 'Fashion Forward', image: '🧥', discount: 15 },
    { id: 4, name: 'Premium Coffee Maker', price: 159, rating: 4.6, reviews: 78, category: 'home', vendor: 'Home Essentials', image: '☕', discount: 25 },
    { id: 5, name: 'Gaming Mechanical Keyboard', price: 129, rating: 4.8, reviews: 203, category: 'tech', vendor: 'TechZone Pro', image: '⌨️', discount: 10 },
    { id: 6, name: 'Luxury Handbag', price: 299, rating: 4.9, reviews: 45, category: 'fashion', vendor: 'Fashion Forward', image: '👜', discount: 0 },
    { id: 7, name: 'Smart Home Speaker', price: 89, rating: 4.5, reviews: 167, category: 'home', vendor: 'Home Essentials', image: '🔊', discount: 30 },
    { id: 8, name: 'Fitness Tracker', price: 79, rating: 4.4, reviews: 92, category: 'tech', vendor: 'GadgetHub', image: '📱', discount: 20 }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation();
    console.log(`Added product ${productId} to cart`);
    navigate('/cart');
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDark ? 'dark bg-slate-900' : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'}`}>
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />

      <HeroSection 
        isDark={isDark}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <VendorsSection vendors={vendors} isDark={isDark} />

      <ProductsSection 
        products={filteredProducts}
        categories={categories}
        selectedCategory={selectedCategory}
        isDark={isDark}
        onProductClick={handleProductClick}
        onAddToCart={handleAddToCart}
      />

      <Footer isDark={isDark} />
    </div>
  );
};

export default Index;
