import { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  Sun,
  Moon,
  Heart,
  ChevronDown,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navigation = ({ isDark, toggleTheme }: NavigationProps) => {
  const navigate = useNavigate();

  const categories = {
    "Tech Gadgets": [
      { name: "Smartphones", path: "/category/smartphones" },
      { name: "Laptops", path: "/category/laptops" },
      { name: "Audio", path: "/category/audio" },
      { name: "Wearables", path: "/category/wearables" },
      { name: "Gaming", path: "/category/gaming" },
    ],
    Fashion: [
      { name: "Men's Clothing", path: "/category/mens-clothing" },
      { name: "Women's Clothing", path: "/category/womens-clothing" },
      { name: "Shoes", path: "/category/shoes" },
      { name: "Accessories", path: "/category/accessories" },
      { name: "Jewelry", path: "/category/jewelry" },
    ],
    "Home Items": [
      { name: "Furniture", path: "/category/furniture" },
      { name: "Kitchen", path: "/category/kitchen" },
      { name: "Decor", path: "/category/decor" },
      { name: "Appliances", path: "/category/appliances" },
      { name: "Garden", path: "/category/garden" },
    ],
  };

  // --- Search functionality state and logic ---
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<
    { type: "vendor" | "product"; name: string; path: string }[]
  >([]);
  // Example vendor and product data for search (should be replaced with real data in production)
  const vendors = [
    { name: "TechZone Pro", path: "/vendors#techzone-pro" },
    { name: "Fashion Forward", path: "/vendors#fashion-forward" },
    { name: "Home Essentials", path: "/vendors#home-essentials" },
    { name: "GadgetHub", path: "/vendors#gadgethub" },
    { name: "Artisan Crafts", path: "/vendors#artisan-crafts" },
    { name: "Sports Central", path: "/vendors#sports-central" },
  ];
  const products = [
    {
      name: "Wireless Gaming Headset Pro",
      path: "/deals#wireless-gaming-headset-pro",
    },
    { name: "Smart Fitness Watch", path: "/deals#smart-fitness-watch" },
    { name: "Premium Coffee Machine", path: "/deals#premium-coffee-machine" },
    {
      name: "Mechanical Gaming Keyboard",
      path: "/deals#mechanical-gaming-keyboard",
    },
    { name: "Wireless Phone Charger", path: "/deals#wireless-phone-charger" },
    { name: "Smart Home Speaker", path: "/deals#smart-home-speaker" },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim().length === 0) {
      setSearchResults([]);
      return;
    }
    const vendorResults = vendors
      .filter((v) => v.name.toLowerCase().includes(value.toLowerCase()))
      .map((v) => ({ ...v, type: "vendor" as const }));
    const productResults = products
      .filter((p) => p.name.toLowerCase().includes(value.toLowerCase()))
      .map((p) => ({ ...p, type: "product" as const }));
    setSearchResults([...vendorResults, ...productResults]);
  };

  const handleResultClick = (path: string) => {
    setSearchTerm("");
    setSearchResults([]);
    navigate(path);
  };

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-lg ${
        isDark
          ? "bg-slate-900/80 border-slate-700"
          : "bg-white/80 border-blue-100"
      } border-b transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                M
              </div>
              <span
                className={`text-xl font-bold ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                MarketPlace
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`${
                        isDark
                          ? "text-slate-300 hover:text-white"
                          : "text-slate-600 hover:text-blue-600"
                      }`}
                    >
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
                onClick={() => navigate("/vendors")}
                className={`${
                  isDark
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                Vendors
              </Button>
              <Button
                variant="ghost"
                onClick={() => navigate("/deals")}
                className={`${
                  isDark
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                Deals
              </Button>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              />
              <Input
                placeholder="Search products, vendors..."
                value={searchTerm}
                onChange={handleSearchChange}
                className={`pl-10 ${
                  isDark
                    ? "bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                    : "bg-white/70 border-blue-200 backdrop-blur-sm"
                }`}
                autoComplete="off"
              />
              {searchResults.length > 0 && (
                <div
                  className={`absolute left-0 right-0 mt-2 bg-white dark:bg-slate-800 border border-blue-200 dark:border-slate-700 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto`}
                >
                  <ul>
                    {searchResults.map((result, idx) => (
                      <li
                        key={result.type + "-" + result.name + "-" + idx}
                        className="px-4 py-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-slate-700 flex items-center gap-2"
                        onClick={() => handleResultClick(result.path)}
                      >
                        <span
                          className={`inline-block w-2 h-2 rounded-full ${
                            result.type === "vendor"
                              ? "bg-green-500"
                              : "bg-blue-500"
                          }`}
                        ></span>
                        <span className="font-medium">{result.name}</span>
                        <span className="text-xs ml-auto px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300">
                          {result.type === "vendor" ? "Vendor" : "Product"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`${
                isDark
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/wishlist")}
              className={`${
                isDark
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              <Heart className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/cart")}
              className={`${
                isDark
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/profile")}
              className={`${
                isDark
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              <User className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${
                isDark
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
