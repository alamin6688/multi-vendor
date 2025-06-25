
import { useState } from 'react';
import { Search, ShoppingCart, User, Menu, Sun, Moon, Heart, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navigation = ({ isDark, toggleTheme }: NavigationProps) => {
  const navigate = useNavigate();

  const categories = {
    'Tech Gadgets': [
      { name: 'Smartphones', path: '/category/smartphones' },
      { name: 'Laptops', path: '/category/laptops' },
      { name: 'Audio', path: '/category/audio' },
      { name: 'Wearables', path: '/category/wearables' },
      { name: 'Gaming', path: '/category/gaming' }
    ],
    'Fashion': [
      { name: 'Men\'s Clothing', path: '/category/mens-clothing' },
      { name: 'Women\'s Clothing', path: '/category/womens-clothing' },
      { name: 'Shoes', path: '/category/shoes' },
      { name: 'Accessories', path: '/category/accessories' },
      { name: 'Jewelry', path: '/category/jewelry' }
    ],
    'Home Items': [
      { name: 'Furniture', path: '/category/furniture' },
      { name: 'Kitchen', path: '/category/kitchen' },
      { name: 'Decor', path: '/category/decor' },
      { name: 'Appliances', path: '/category/appliances' },
      { name: 'Garden', path: '/category/garden' }
    ]
  };

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-lg ${isDark ? 'bg-slate-900/80 border-slate-700' : 'bg-white/80 border-blue-100'} border-b transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                MarketPlace
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={`${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-blue-600'}`}>
                      Categories
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid grid-cols-3 gap-6 p-6 w-[600px]">
                        {Object.entries(categories).map(([category, items]) => (
                          <div key={category} className="space-y-3">
                            <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
                              {category}
                            </h3>
                            <ul className="space-y-2">
                              {items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.path}
                                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <Button 
                variant="ghost" 
                onClick={() => navigate('/vendors')}
                className={`${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-blue-600'}`}
              >
                Vendors
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => navigate('/deals')}
                className={`${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-blue-600'}`}
              >
                Deals
              </Button>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
              <Input
                placeholder="Search products, vendors..."
                className={`pl-10 ${isDark ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400' : 'bg-white/70 border-blue-200 backdrop-blur-sm'}`}
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-blue-600'}`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate('/wishlist')}
              className={`${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-blue-600'}`}
            >
              <Heart className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate('/cart')}
              className={`${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-blue-600'}`}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate('/profile')}
              className={`${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-blue-600'}`}
            >
              <User className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className={`md:hidden ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-blue-600'}`}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
