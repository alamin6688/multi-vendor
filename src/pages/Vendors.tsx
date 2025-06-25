import { useState, useEffect } from "react";
import { fetchVendors } from "@/api/mockApi";
import { Skeleton } from "@/components/ui/skeleton";
import { Star, MapPin, ShoppingBag, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer/Footer";

interface Vendor {
  id: number;
  name: string;
  profileImage: string;
  coverImage: string;
  rating: number;
  totalReviews: number;
  totalProducts: number;
  followers: number;
  location: string;
  categories: string[];
  verified: boolean;
  joinedDate: string;
  description: string;
  isFollowing: boolean;
}

const Vendors = () => {
  const [isDark, setIsDark] = useState(false);
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetchVendors().then((data: Vendor[]) => {
      // Map mock API vendor data to local Vendor type (add missing fields with defaults)
      setVendors(
        data.map((v) => ({
          id: v.id,
          name: v.name,
          profileImage: v.profileImage || "🏢",
          coverImage: v.coverImage || "📱", // placeholder
          rating: v.rating,
          totalReviews: v.totalReviews ?? 0,
          totalProducts: v.totalProducts ?? 0,
          followers: v.followers ?? 0,
          location: v.location ?? "-",
          categories: v.categories ?? [],
          verified: v.verified,
          joinedDate: v.joinedDate ?? "-",
          description: v.description ?? "-",
          isFollowing: v.isFollowing ?? false,
        }))
      );
      setLoading(false);
    });
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleFollow = (vendorId: number) => {
    setVendors(
      vendors.map((vendor) =>
        vendor.id === vendorId
          ? {
              ...vendor,
              isFollowing: !vendor.isFollowing,
              followers: vendor.isFollowing
                ? vendor.followers - 1
                : vendor.followers + 1,
            }
          : vendor
      )
    );
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDark
          ? "dark bg-slate-900"
          : "bg-gradient-to-br from-blue-50 via-white to-blue-100"
      }`}
    >
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1
              className={`text-4xl font-bold mb-4 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Featured Vendors
            </h1>
            <p
              className={`text-lg ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Discover amazing sellers and their unique products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton
                    key={i}
                    className="h-72 w-full bg-gray-200 dark:bg-slate-700 rounded-xl"
                  />
                ))
              : vendors.map((vendor) => (
                  <Card
                    key={vendor.id}
                    className={`${
                      isDark
                        ? "bg-slate-800/50 border-slate-700"
                        : "bg-white/70 border-blue-100"
                    } backdrop-blur-lg hover:scale-105 transition-all duration-300 overflow-hidden`}
                  >
                    <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-6xl">
                      {vendor.profileImage}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{vendor.profileImage}</div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h3
                                className={`font-bold text-lg ${
                                  isDark ? "text-white" : "text-slate-900"
                                }`}
                              >
                                {vendor.name}
                              </h3>
                              {vendor.verified && (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              )}
                            </div>
                            <div className="flex items-center space-x-1 text-sm">
                              <MapPin
                                className={`h-3 w-3 ${
                                  isDark ? "text-slate-400" : "text-slate-500"
                                }`}
                              />
                              <span
                                className={`${
                                  isDark ? "text-slate-400" : "text-slate-500"
                                }`}
                              >
                                {vendor.location}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant={vendor.isFollowing ? "secondary" : "default"}
                          onClick={() => handleFollow(vendor.id)}
                          className={
                            vendor.isFollowing
                              ? ""
                              : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                          }
                        >
                          {vendor.isFollowing ? "Following" : "Follow"}
                        </Button>
                      </div>
                      <p
                        className={`text-sm mb-4 ${
                          isDark ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {vendor.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {vendor.categories.map((category) => (
                          <Badge
                            key={category}
                            variant="secondary"
                            className="text-xs"
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span
                              className={`text-sm font-semibold ${
                                isDark ? "text-white" : "text-slate-900"
                              }`}
                            >
                              {vendor.rating}
                            </span>
                          </div>
                          <span
                            className={`text-xs ${
                              isDark ? "text-slate-400" : "text-slate-500"
                            }`}
                          >
                            {vendor.totalReviews} reviews
                          </span>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1">
                            <ShoppingBag
                              className={`h-4 w-4 ${
                                isDark ? "text-slate-300" : "text-slate-600"
                              }`}
                            />
                            <span
                              className={`text-sm font-semibold ${
                                isDark ? "text-white" : "text-slate-900"
                              }`}
                            >
                              {vendor.totalProducts}
                            </span>
                          </div>
                          <span
                            className={`text-xs ${
                              isDark ? "text-slate-400" : "text-slate-500"
                            }`}
                          >
                            products
                          </span>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1">
                            <Users
                              className={`h-4 w-4 ${
                                isDark ? "text-slate-300" : "text-slate-600"
                              }`}
                            />
                            <span
                              className={`text-sm font-semibold ${
                                isDark ? "text-white" : "text-slate-900"
                              }`}
                            >
                              {vendor.followers}
                            </span>
                          </div>
                          <span
                            className={`text-xs ${
                              isDark ? "text-slate-400" : "text-slate-500"
                            }`}
                          >
                            followers
                          </span>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                        Visit Store
                      </Button>
                    </CardContent>
                  </Card>
                ))}
          </div>
        </div>
        <Footer isDark={isDark} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default Vendors;
