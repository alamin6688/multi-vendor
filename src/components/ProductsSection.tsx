import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Skeleton } from "./ui/skeleton";
import { fetchProducts, fetchCategories } from "@/api/mockApi";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  vendor: string;
  image: string;
  discount: number;
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface ProductsSectionProps {
  selectedCategory: string;
  isDark: boolean;
  onProductClick: (productId: number) => void;
  onAddToCart: (e: React.MouseEvent, productId: number) => void;
}

const SKELETON_COUNT = 8;

const ProductCardSkeleton = ({ isDark }: { isDark: boolean }) => (
  <div className="w-full">
    <Skeleton
      className={`aspect-square w-full ${
        isDark ? "bg-slate-700" : "bg-blue-100"
      }`}
    />
    <div className="p-4">
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/2 mb-2" />
      <Skeleton className="h-4 w-1/3" />
    </div>
  </div>
);

const ProductsSection = ({
  selectedCategory,
  isDark,
  onProductClick,
  onAddToCart,
}: ProductsSectionProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchProducts(), fetchCategories()]).then(
      ([prods, cats]: [Product[], Category[]]) => {
        setProducts(prods);
        setCategories(cats);
        setLoading(false);
      }
    );
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const categoryName =
    selectedCategory === "all"
      ? "All Products"
      : categories.find((c) => c.id === selectedCategory)?.name;

  return (
    <section className="pt-6 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2
            className={`text-3xl font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {categoryName}
          </h2>
          <p className={`${isDark ? "text-slate-300" : "text-slate-600"}`}>
            Showing {loading ? "--" : filteredProducts.length} products
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                <ProductCardSkeleton key={i} isDark={isDark} />
              ))
            : filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isDark={isDark}
                  onProductClick={onProductClick}
                  onAddToCart={onAddToCart}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
