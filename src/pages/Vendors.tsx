import { useState } from "react";
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
  const [vendors, setVendors] = useState<Vendor[]>([
    {
      id: 1,
      name: "TechZone Pro",
      profileImage: "🏢",
      coverImage: "📱",
      rating: 4.8,
      totalReviews: 1248,
      totalProducts: 150,
      followers: 5420,
      location: "San Francisco, CA",
      categories: ["Electronics", "Gadgets", "Accessories"],
      verified: true,
      joinedDate: "2022-01-15",
      description: "Premium tech gadgets and electronics from trusted brands",
      isFollowing: false,
    },
    {
      id: 2,
      name: "Fashion Forward",
      profileImage: "👗",
      coverImage: "👔",
      rating: 4.9,
      totalReviews: 892,
      totalProducts: 89,
      followers: 3240,
      location: "New York, NY",
      categories: ["Fashion", "Clothing", "Accessories"],
      verified: true,
      joinedDate: "2021-08-20",
      description: "Trendy fashion and clothing for modern lifestyle",
      isFollowing: true,
    },
    {
      id: 3,
      name: "Home Essentials",
      profileImage: "🏡",
      coverImage: "🛋️",
      rating: 4.7,
      totalReviews: 656,
      totalProducts: 200,
      followers: 2180,
      location: "Chicago, IL",
      categories: ["Home & Garden", "Furniture", "Decor"],
      verified: true,
      joinedDate: "2021-11-10",
      description: "Quality home essentials and furniture for every space",
      isFollowing: false,
    },
    {
      id: 4,
      name: "GadgetHub",
      profileImage: "🔧",
      coverImage: "⚡",
      rating: 4.6,
      totalReviews: 423,
      totalProducts: 75,
      followers: 1580,
      location: "Austin, TX",
      categories: ["Electronics", "Gaming", "Tech"],
      verified: false,
      joinedDate: "2023-03-05",
      description: "Innovative gadgets and gaming accessories",
      isFollowing: false,
    },
    {
      id: 5,
      name: "Artisan Crafts",
      profileImage: "🎨",
      coverImage: "✨",
      rating: 4.8,
      totalReviews: 234,
      totalProducts: 45,
      followers: 890,
      location: "Portland, OR",
      categories: ["Arts & Crafts", "Handmade", "Gifts"],
      verified: true,
      joinedDate: "2022-06-12",
      description: "Unique handmade crafts and artistic creations",
      isFollowing: false,
    },
    {
      id: 6,
      name: "Sports Central",
      profileImage: "⚽",
      coverImage: "🏃",
      rating: 4.5,
      totalReviews: 567,
      totalProducts: 120,
      followers: 2450,
      location: "Miami, FL",
      categories: ["Sports", "Fitness", "Outdoor"],
      verified: true,
      joinedDate: "2021-12-08",
      description: "Sports equipment and fitness gear for active lifestyles",
      isFollowing: true,
    },
  ]);

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
            {vendors.map((vendor) => (
              <Card
                key={vendor.id}
                className={`${
                  isDark
                    ? "bg-slate-800/50 border-slate-700"
                    : "bg-white/70 border-blue-100"
                } backdrop-blur-lg hover:scale-105 transition-all duration-300 overflow-hidden`}
              >
                <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-6xl">
                  {vendor.coverImage}
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
      </div>

      <Footer isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  );
};

export default Vendors;
