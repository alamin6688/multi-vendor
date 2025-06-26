import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  ShoppingBag,
  Laptop,
  Home,
  Shirt,
  Dumbbell,
  Sparkles,
  Tag,
  Clock,
  Users,
  ShoppingCart,
  Star,
  Globe,
  Bell,
  Calendar,
  ArrowRight,
  Zap,
} from "lucide-react";

interface TrendingCategoriesProps {
  isDark: boolean;
  onCategoryClick?: (categoryId: string) => void;
}

// Trending Categories Component
export const TrendingCategories = ({
  isDark,
  onCategoryClick,
}: TrendingCategoriesProps) => {
  const categories = [
    {
      id: "electronics",
      name: "Electronics",
      icon: Laptop,
      growth: "+25%",
      products: 1250,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "fashion",
      name: "Fashion",
      icon: Shirt,
      growth: "+18%",
      products: 2100,
      color: "from-pink-500 to-pink-600",
    },
    {
      id: "home",
      name: "Home & Garden",
      icon: Home,
      growth: "+32%",
      products: 890,
      color: "from-green-500 to-green-600",
    },
    {
      id: "sports",
      name: "Sports & Fitness",
      icon: Dumbbell,
      growth: "+15%",
      products: 650,
      color: "from-orange-500 to-orange-600",
    },
    {
      id: "beauty",
      name: "Beauty",
      icon: Sparkles,
      growth: "+22%",
      products: 450,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "books",
      name: "Books",
      icon: ShoppingBag,
      growth: "+12%",
      products: 750,
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section className={`py-16 ${isDark ? "bg-slate-900" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp
              className={`h-6 w-6 ${
                isDark ? "text-blue-400" : "text-blue-600"
              } mr-2`}
            />
            <h2
              className={`text-3xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Trending Categories
            </h2>
          </div>
          <p
            className={`${
              isDark ? "text-slate-300" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            Discover what's popular right now across our marketplace
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className={`group relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 dark:border-slate-700 hover:border-transparent hover:scale-105`}
                onClick={() => onCategoryClick && onCategoryClick(category.id)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>

                  <h3
                    className={`font-semibold mb-2 group-hover:text-gray-300 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {category.name}
                  </h3>

                  <div className="flex items-center justify-between text-sm">
                    <span
                      className={`${
                        isDark ? "text-slate-400" : "text-gray-500"
                      }`}
                    >
                      {category.products} items
                    </span>
                    <span className="text-green-600 font-medium flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {category.growth}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
