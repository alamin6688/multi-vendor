import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VendorsSection from "@/components/VendorsSection";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/footer/Footer";

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation();
    console.log(`Added product ${productId} to cart`);
    navigate("/cart");
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDark
          ? "dark bg-slate-900"
          : "bg-gradient-to-br from-blue-50 via-white to-blue-100"
      }`}
    >
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />

      {/* TODO: Refactor HeroSection and VendorsSection to use API-driven data if needed */}
      <HeroSection
        isDark={isDark}
        categories={[]}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <VendorsSection vendors={[]} isDark={isDark} />

      <ProductsSection
        selectedCategory={selectedCategory}
        isDark={isDark}
        onProductClick={handleProductClick}
        onAddToCart={handleAddToCart}
      />

      <Footer isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  );
};

export default Index;
