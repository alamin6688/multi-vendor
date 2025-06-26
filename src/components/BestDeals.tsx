import React, { useState, useEffect } from "react";
import { Zap, Star } from "lucide-react";

// Best Deals Component
const BestDeals = ({ isDark }: { isDark: boolean }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const deals = [
    {
      title: "Premium Wireless Headphones",
      originalPrice: 199,
      discountPrice: 149,
      discount: 25,
      vendor: "TechWorld",
      rating: 4.8,
      image: "📱",
    },
    {
      title: "Designer Summer Collection",
      originalPrice: 89,
      discountPrice: 59,
      discount: 34,
      vendor: "FashionHub",
      rating: 4.9,
      image: "👕",
    },
    {
      title: "Smart Home Starter Kit",
      originalPrice: 299,
      discountPrice: 199,
      discount: 33,
      vendor: "HomeAuto",
      rating: 4.7,
      image: "🏠",
    },
  ];

  return (
    <section
      className={`py-16 ${
        isDark ? "bg-slate-900" : "bg-gradient-to-br from-red-50 to-orange-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Zap
              className={`h-6 w-6 ${
                isDark ? "text-red-400" : "text-red-600"
              } mr-2`}
            />
            <h2
              className={`text-3xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Best Deals
            </h2>
          </div>
          <p className={`${isDark ? "text-slate-300" : "text-gray-600"} mb-6`}>
            Limited time offers you can't miss
          </p>
          {/* Countdown Timer */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div
              className={`rounded-lg p-3 shadow-sm ${
                isDark ? "bg-slate-800" : "bg-white"
              }`}
            >
              <div
                className={`text-2xl font-bold ${
                  isDark ? "text-red-400" : "text-red-600"
                }`}
              >
                {timeLeft.hours.toString().padStart(2, "0")}
              </div>
              <div
                className={`text-xs ${
                  isDark ? "text-slate-400" : "text-gray-500"
                }`}
              >
                Hours
              </div>
            </div>
            <div className={isDark ? "text-red-400" : "text-red-600"}>:</div>
            <div
              className={`rounded-lg p-3 shadow-sm ${
                isDark ? "bg-slate-800" : "bg-white"
              }`}
            >
              <div
                className={`text-2xl font-bold ${
                  isDark ? "text-red-400" : "text-red-600"
                }`}
              >
                {timeLeft.minutes.toString().padStart(2, "0")}
              </div>
              <div
                className={`text-xs ${
                  isDark ? "text-slate-400" : "text-gray-500"
                }`}
              >
                Minutes
              </div>
            </div>
            <div className={isDark ? "text-red-400" : "text-red-600"}>:</div>
            <div
              className={`rounded-lg p-3 shadow-sm ${
                isDark ? "bg-slate-800" : "bg-white"
              }`}
            >
              <div
                className={`text-2xl font-bold ${
                  isDark ? "text-red-400" : "text-red-600"
                }`}
              >
                {timeLeft.seconds.toString().padStart(2, "0")}
              </div>
              <div
                className={`text-xs ${
                  isDark ? "text-slate-400" : "text-gray-500"
                }`}
              >
                Seconds
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {deals.map((deal, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group ${
                isDark ? "bg-slate-800" : "bg-white"
              }`}
            >
              <div className="relative">
                <div
                  className={`h-48 bg-gradient-to-br ${
                    isDark
                      ? "from-slate-700 to-slate-800"
                      : "from-gray-100 to-gray-200"
                  } flex items-center justify-center text-6xl`}
                >
                  {deal.image}
                </div>
                <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
                  -{deal.discount}%
                </div>
              </div>
              <div className="p-6">
                <h3
                  className={`font-semibold mb-2 group-hover:text-blue-400 transition-colors ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {deal.title}
                </h3>
                <div className="flex items-center mb-3">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span
                    className={`text-sm ml-1 ${
                      isDark ? "text-slate-300" : "text-gray-600"
                    }`}
                  >
                    {deal.rating}
                  </span>
                  <span
                    className={`text-sm ml-2 ${
                      isDark ? "text-slate-400" : "text-gray-400"
                    }`}
                  >
                    by {deal.vendor}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-xl font-bold ${
                        isDark ? "text-red-400" : "text-red-600"
                      }`}
                    >
                      ${deal.discountPrice}
                    </span>
                    <span
                      className={`text-sm line-through ${
                        isDark ? "text-slate-400" : "text-gray-400"
                      }`}
                    >
                      ${deal.originalPrice}
                    </span>
                  </div>
                  <button
                    className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                      isDark
                        ? "bg-red-700 text-white hover:bg-red-800"
                        : "bg-red-600 text-white hover:bg-red-700"
                    }`}
                  >
                    Grab Deal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestDeals;
