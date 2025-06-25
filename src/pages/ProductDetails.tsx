import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  Heart,
  ShoppingCart,
  Plus,
  Minus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import Navigation from "@/components/Navigation";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in real app, this would come from API
  const product = {
    id: 1,
    name: "Wireless Earbuds Pro",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 124,
    category: "tech",
    vendor: "TechZone Pro",
    image: "🎧",
    discount: 20,
    description:
      "Premium wireless earbuds with active noise cancellation, 30-hour battery life, and crystal-clear sound quality. Perfect for music lovers and professionals.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Wireless charging case",
      "IPX7 water resistance",
      "Touch controls",
      "Voice assistant support",
    ],
    images: ["🎧", "📱", "🔊", "⚡"],
    inStock: true,
    specifications: {
      "Battery Life": "30 hours",
      Connectivity: "Bluetooth 5.3",
      "Water Resistance": "IPX7",
      Weight: "45g",
      "Charging Time": "2 hours",
    },
  };

  const handleAddToCart = () => {
    // In real app, this would add to cart state/API
    console.log(`Added ${quantity} of product ${id} to cart`);
    navigate("/cart");
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Navigation isDark={false} toggleTheme={() => {}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 text-slate-600 hover:text-blue-600"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <Card className="bg-white/70 border-blue-100 backdrop-blur-lg">
              <CardContent className="p-8">
                <div className="aspect-square bg-blue-50 rounded-lg flex items-center justify-center text-8xl mb-4">
                  {product.images[selectedImage]}
                </div>
                <div className="flex space-x-2 justify-center">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center text-2xl ${
                        selectedImage === index
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 bg-white hover:border-blue-300"
                      }`}
                    >
                      {img}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Badge className="bg-green-100 text-green-800">
                  ✓ In Stock
                </Badge>
                {product.discount > 0 && (
                  <Badge className="bg-red-500 text-white">
                    -{product.discount}% OFF
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                {product.name}
              </h1>

              <p className="text-slate-600 mb-4">by {product.vendor}</p>

              <div className="flex items-center space-x-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-slate-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-slate-900">
                ${product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xl text-slate-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">
                Key Features:
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-slate-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-slate-900">Quantity:</span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decrementQuantity}
                    className="h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={incrementQuantity}
                    className="h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Specifications */}
            <Card className="bg-white/70 border-blue-100 backdrop-blur-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-4">
                  Specifications
                </h3>
                <div className="space-y-2">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-slate-600">{key}:</span>
                        <span className="font-medium text-slate-900">
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
