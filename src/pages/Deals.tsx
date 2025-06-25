import { useState, useEffect } from "react";
import { Clock, Flame, Zap, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer/Footer";

interface Deal {
  id: number;
  name: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  vendor: string;
  stock: number;
  sold: number;
  endTime: Date;
  badge: "HOT" | "LIMITED" | "FLASH" | "BESTSELLER";
  isFlashSale?: boolean;
}

const Deals = () => {
  const [isDark, setIsDark] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const deals: Deal[] = [
    {
      id: 1,
      name: "Wireless Gaming Headset Pro",
      originalPrice: 199,
      salePrice: 99,
      discount: 50,
      rating: 4.8,
      reviews: 324,
      image: "🎧",
      category: "Gaming",
      vendor: "TechZone Pro",
      stock: 25,
      sold: 175,
      endTime: new Date(Date.now() + 8 * 60 * 60 * 1000), // 8 hours from now
      badge: "HOT",
      isFlashSale: true,
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      originalPrice: 299,
      salePrice: 179,
      discount: 40,
      rating: 4.9,
      reviews: 567,
      image: "⌚",
      category: "Wearables",
      vendor: "GadgetHub",
      stock: 12,
      sold: 88,
      endTime: new Date(Date.now() + 6 * 60 * 60 * 1000), // 6 hours from now
      badge: "LIMITED",
      isFlashSale: true,
    },
    {
      id: 3,
      name: "Premium Coffee Machine",
      originalPrice: 399,
      salePrice: 249,
      discount: 38,
      rating: 4.7,
      reviews: 234,
      image: "☕",
      category: "Home & Kitchen",
      vendor: "Home Essentials",
      stock: 45,
      sold: 155,
      endTime: new Date(Date.now() + 12 * 60 * 60 * 1000), // 12 hours from now
      badge: "BESTSELLER",
    },
    {
      id: 4,
      name: "Mechanical Gaming Keyboard",
      originalPrice: 159,
      salePrice: 89,
      discount: 44,
      rating: 4.6,
      reviews: 445,
      image: "⌨️",
      category: "Gaming",
      vendor: "TechZone Pro",
      stock: 8,
      sold: 92,
      endTime: new Date(Date.now() + 4 * 60 * 60 * 1000), // 4 hours from now
      badge: "FLASH",
      isFlashSale: true,
    },
    {
      id: 5,
      name: "Wireless Phone Charger",
      originalPrice: 79,
      salePrice: 39,
      discount: 51,
      rating: 4.4,
      reviews: 189,
      image: "🔋",
      category: "Accessories",
      vendor: "GadgetHub",
      stock: 67,
      sold: 233,
      endTime: new Date(Date.now() + 18 * 60 * 60 * 1000), // 18 hours from now
      badge: "HOT",
    },
    {
      id: 6,
      name: "Smart Home Speaker",
      originalPrice: 149,
      salePrice: 79,
      discount: 47,
      rating: 4.5,
      reviews: 323,
      image: "🔊",
      category: "Smart Home",
      vendor: "Home Essentials",
      stock: 15,
      sold: 85,
      endTime: new Date(Date.now() + 10 * 60 * 60 * 1000), // 10 hours from now
      badge: "LIMITED",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const getTimeRemaining = (endTime: Date) => {
    const total = endTime.getTime() - currentTime.getTime();
    const hours = Math.floor(total / (1000 * 60 * 60));
    const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((total % (1000 * 60)) / 1000);

    return { total, hours, minutes, seconds };
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "HOT":
        return "bg-red-500";
      case "LIMITED":
        return "bg-orange-500";
      case "FLASH":
        return "bg-yellow-500 text-black";
      case "BESTSELLER":
        return "bg-green-500";
      default:
        return "bg-blue-500";
    }
  };

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case "HOT":
        return <Flame className="h-3 w-3" />;
      case "LIMITED":
        return <Clock className="h-3 w-3" />;
      case "FLASH":
        return <Zap className="h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDark
          ? "dark bg-slate-900"
          : "bg-gradient-to-br from-red-50 via-white to-orange-50"
      }`}
    >
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Flash Sale Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 p-8 mb-12 text-center">
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Zap className="h-8 w-8 text-yellow-300" />
                <h1 className="text-4xl font-bold text-white">
                  Flash Sale Event
                </h1>
                <Zap className="h-8 w-8 text-yellow-300" />
              </div>
              <p className="text-xl text-white/90 mb-6">
                Unbeatable deals with up to 70% off! Limited time only.
              </p>
              <div className="inline-flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <Clock className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">
                  Ends in 23:45:12
                </span>
              </div>
            </div>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
            </div>
          </div>

          {/* Deals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deals.map((deal) => {
              const timeRemaining = getTimeRemaining(deal.endTime);
              const stockPercentage =
                (deal.stock / (deal.stock + deal.sold)) * 100;

              return (
                <Card
                  key={deal.id}
                  className={`${
                    isDark
                      ? "bg-slate-800/50 border-slate-700"
                      : "bg-white/70 border-orange-100"
                  } backdrop-blur-lg hover:scale-105 transition-all duration-300 overflow-hidden group`}
                >
                  <div className="relative">
                    <div
                      className={`aspect-square ${
                        isDark ? "bg-slate-700" : "bg-orange-50"
                      } flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {deal.image}
                    </div>

                    {/* Discount Badge */}
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white font-bold">
                      -{deal.discount}%
                    </Badge>

                    {/* Deal Badge */}
                    <Badge
                      className={`absolute top-2 right-2 ${getBadgeColor(
                        deal.badge
                      )} text-white font-bold flex items-center space-x-1`}
                    >
                      {getBadgeIcon(deal.badge)}
                      <span>{deal.badge}</span>
                    </Badge>
                  </div>

                  <CardContent className="p-4">
                    <h3
                      className={`font-semibold mb-2 ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {deal.name}
                    </h3>

                    <p
                      className={`text-sm mb-2 ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      by {deal.vendor}
                    </p>

                    <div className="flex items-center space-x-1 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(deal.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span
                        className={`text-xs ${
                          isDark ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        ({deal.reviews})
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 mb-3">
                      <span
                        className={`text-2xl font-bold ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        ${deal.salePrice}
                      </span>
                      <span
                        className={`text-lg line-through ${
                          isDark ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        ${deal.originalPrice}
                      </span>
                    </div>

                    {/* Countdown Timer */}
                    {deal.isFlashSale && timeRemaining.total > 0 && (
                      <div className="mb-3 p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                        <div className="flex items-center justify-center space-x-1 text-red-600 dark:text-red-400">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm font-semibold">
                            {timeRemaining.hours.toString().padStart(2, "0")}:
                            {timeRemaining.minutes.toString().padStart(2, "0")}:
                            {timeRemaining.seconds.toString().padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Stock Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span
                          className={`${
                            isDark ? "text-slate-400" : "text-slate-500"
                          }`}
                        >
                          {deal.sold} sold
                        </span>
                        <span
                          className={`${
                            isDark ? "text-slate-400" : "text-slate-500"
                          }`}
                        >
                          {deal.stock} left
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${100 - stockPercentage}%` }}
                        ></div>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Grab Deal Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Load More Section */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8"
            >
              Load More Deals
            </Button>
          </div>
        </div>
      </div>

      <Footer isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  );
};

export default Deals;
