
import ProductCard from './ProductCard';

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
  products: Product[];
  categories: Category[];
  selectedCategory: string;
  isDark: boolean;
  onProductClick: (productId: number) => void;
  onAddToCart: (e: React.MouseEvent, productId: number) => void;
}

const ProductsSection = ({ 
  products, 
  categories, 
  selectedCategory, 
  isDark, 
  onProductClick, 
  onAddToCart 
}: ProductsSectionProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Showing {products.length} products
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
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
