
import { Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

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

interface ProductCardProps {
  product: Product;
  isDark: boolean;
  onProductClick: (productId: number) => void;
  onAddToCart: (e: React.MouseEvent, productId: number) => void;
}

const ProductCard = ({ product, isDark, onProductClick, onAddToCart }: ProductCardProps) => {
  return (
    <Card 
      onClick={() => onProductClick(product.id)}
      className={`${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white/70 border-blue-100'} backdrop-blur-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden`}
    >
      <CardContent className="p-0">
        <div className="relative">
          <div className={`aspect-square ${isDark ? 'bg-slate-700' : 'bg-blue-50'} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}>
            {product.image}
          </div>
          {product.discount > 0 && (
            <Badge className="absolute top-2 left-2 bg-red-500 text-white">
              -{product.discount}%
            </Badge>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/80 backdrop-blur-sm hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              // Handle wishlist functionality
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-4">
          <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {product.name}
          </h3>
          
          <p className={`text-sm mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            by {product.vendor}
          </p>
          
          <div className="flex items-center space-x-1 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              ({product.reviews})
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                ${product.discount > 0 ? (product.price * (1 - product.discount / 100)).toFixed(0) : product.price}
              </span>
              {product.discount > 0 && (
                <span className={`text-sm line-through ml-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  ${product.price}
                </span>
              )}
            </div>
            
            <Button 
              size="sm" 
              onClick={(e) => onAddToCart(e, product.id)}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
