import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import Navigation from "@/components/Navigation";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Earbuds Pro",
      price: 299,
      quantity: 2,
      image: "🎧",
      vendor: "TechZone Pro",
    },
    {
      id: 2,
      name: "Smart Watch Series X",
      price: 449,
      quantity: 1,
      image: "⌚",
      vendor: "GadgetHub",
    },
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

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
          Continue Shopping
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">
              Shopping Cart
            </h1>

            {cartItems.length === 0 ? (
              <Card className="bg-white/70 border-blue-100 backdrop-blur-lg">
                <CardContent className="p-12 text-center">
                  <ShoppingBag className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Add some products to get started
                  </p>
                  <Button
                    onClick={() => navigate("/")}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                  >
                    Start Shopping
                  </Button>
                </CardContent>
              </Card>
            ) : (
              cartItems.map((item) => (
                <Card
                  key={item.id}
                  className="bg-white/70 border-blue-100 backdrop-blur-lg"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-blue-50 rounded-lg flex items-center justify-center text-3xl">
                        {item.image}
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">
                          {item.name}
                        </h3>
                        <p className="text-sm text-slate-600">
                          by {item.vendor}
                        </p>
                        <p className="text-lg font-bold text-slate-900 mt-2">
                          ${item.price}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="h-8 w-8"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="h-8 w-8"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="text-right">
                        <p className="font-bold text-slate-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-600 mt-2"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="space-y-6">
              <Card className="bg-white/70 border-blue-100 backdrop-blur-lg">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">
                    Order Summary
                  </h2>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Subtotal</span>
                      <span className="font-medium">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Shipping</span>
                      <span className="font-medium">
                        ${shipping.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                    size="lg"
                  >
                    Proceed to Checkout
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/70 border-blue-100 backdrop-blur-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-3">
                    Order Benefits
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-slate-600">
                      <Badge className="mr-2 bg-green-100 text-green-800">
                        ✓
                      </Badge>
                      Free shipping on orders over $50
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Badge className="mr-2 bg-green-100 text-green-800">
                        ✓
                      </Badge>
                      30-day return policy
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Badge className="mr-2 bg-green-100 text-green-800">
                        ✓
                      </Badge>
                      Secure payment processing
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
