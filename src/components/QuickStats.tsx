import React, { useState, useEffect } from "react";
import { Users, ShoppingCart, Star, Globe } from "lucide-react";

const QuickStats = ({ isDark }: { isDark: boolean }) => {
  const [stats, setStats] = useState([
    {
      label: "Active Vendors",
      value: 0,
      target: 15000,
      suffix: "+",
      icon: Users,
    },
    {
      label: "Products Sold",
      value: 0,
      target: 2500000,
      suffix: "+",
      icon: ShoppingCart,
    },
    {
      label: "Customer Rating",
      value: 0,
      target: 4.9,
      suffix: "★",
      icon: Star,
    },
    {
      label: "Countries Served",
      value: 0,
      target: 120,
      suffix: "+",
      icon: Globe,
    },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setStats((prevStats) =>
        prevStats.map((stat) => ({
          ...stat,
          value:
            stat.value < stat.target
              ? Math.min(stat.target, stat.value + Math.ceil(stat.target / 100))
              : stat.target,
        }))
      );
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toString();
  };

  return (
    <section
      className={`py-16 bg-gradient-to-br ${
        isDark
          ? "from-blue-900 to-indigo-900 text-white"
          : "from-blue-100 to-indigo-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Our Reach & Results
          </h2>
          <p
            className={`max-w-2xl mx-auto ${
              isDark ? "text-blue-200" : "text-blue-700"
            }`}
          >
            Join thousands of satisfied customers and vendors in our growing
            marketplace community
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div
                  className={`backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 group-hover:scale-105 ${
                    isDark
                      ? "bg-white/10 hover:bg-white/20"
                      : "bg-white/80 hover:bg-white"
                  }`}
                >
                  <IconComponent
                    className={`h-8 w-8 mx-auto mb-4 ${
                      isDark ? "text-blue-300" : "text-blue-700"
                    }`}
                  />
                  <div
                    className={`text-3xl lg:text-4xl font-bold mb-2 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {stat.label === "Customer Rating"
                      ? stat.value.toFixed(1)
                      : formatNumber(stat.value)}
                    <span
                      className={isDark ? "text-blue-300" : "text-blue-700"}
                    >
                      {stat.suffix}
                    </span>
                  </div>
                  <div
                    className={
                      isDark
                        ? "text-blue-200"
                        : "text-blue-700 text-sm lg:text-base"
                    }
                  >
                    {stat.label}
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

export default QuickStats;
