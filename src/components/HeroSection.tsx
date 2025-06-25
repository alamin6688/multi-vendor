
import { Button } from '@/components/ui/button';
import AnimatedBackground from './AnimatedBackground';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface HeroSectionProps {
  isDark: boolean;
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const HeroSection = ({ isDark, categories, selectedCategory, onCategoryChange }: HeroSectionProps) => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Discover Amazing
          <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"> Products</span>
        </h1>
        <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Explore thousands of products from verified vendors worldwide. Find exactly what you need with our smart search and category filters.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => onCategoryChange(category.id)}
              className={`${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                  : isDark 
                    ? 'border-slate-600 text-slate-300 hover:bg-slate-800' 
                    : 'border-blue-200 bg-white/70 backdrop-blur-sm hover:bg-blue-50'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
