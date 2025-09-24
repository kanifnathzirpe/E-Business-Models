import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Heart, Package, Shield, Truck, CreditCard } from "lucide-react";
import { useState } from "react";

const B2C = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      description: "Premium quality headphones with noise cancellation",
      price: 89.99,
      originalPrice: 129.99,
      image: "🎧",
      category: "Electronics",
      rating: 4.8,
      reviews: 324,
      inStock: true
    },
    {
      id: 2,
      name: "Organic Cotton T-Shirt",
      description: "Comfortable and sustainable clothing for everyday wear",
      price: 24.99,
      originalPrice: 34.99,
      image: "👕",
      category: "Fashion",
      rating: 4.6,
      reviews: 156,
      inStock: true
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      description: "Track your health and fitness with advanced sensors",
      price: 199.99,
      originalPrice: 249.99,
      image: "⌚",
      category: "Electronics",
      rating: 4.9,
      reviews: 489,
      inStock: true
    },
    {
      id: 4,
      name: "Ceramic Coffee Mug Set",
      description: "Beautiful handcrafted mugs for your morning coffee",
      price: 39.99,
      originalPrice: 49.99,
      image: "☕",
      category: "Home & Kitchen",
      rating: 4.7,
      reviews: 98,
      inStock: true
    },
    {
      id: 5,
      name: "Yoga Mat Premium",
      description: "Non-slip exercise mat for yoga and fitness",
      price: 59.99,
      originalPrice: 79.99,
      image: "🧘",
      category: "Sports",
      rating: 4.8,
      reviews: 267,
      inStock: false
    },
    {
      id: 6,
      name: "Leather Wallet",
      description: "Genuine leather wallet with RFID protection",
      price: 69.99,
      originalPrice: 89.99,
      image: "👛",
      category: "Accessories",
      rating: 4.5,
      reviews: 143,
      inStock: true
    }
  ];

  const addToCart = (product: any) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-b2c-primary to-b2c-secondary text-b2c-foreground">
        <div className="container mx-auto text-center">
          <ShoppingCart className="w-20 h-20 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Shop Direct to Consumer
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            Discover amazing products at unbeatable prices with fast, secure delivery to your door
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-transparent border-b2c-foreground text-b2c-foreground hover:bg-b2c-foreground hover:text-b2c-primary">
              Shop Now
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-b2c-foreground text-b2c-foreground hover:bg-b2c-foreground hover:text-b2c-primary">
              View Cart ({cart.length})
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-b2c-accent/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <Truck className="w-12 h-12 mx-auto text-b2c-primary mb-4" />
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On orders over $50</p>
            </div>
            <div>
              <Shield className="w-12 h-12 mx-auto text-b2c-primary mb-4" />
              <h3 className="font-semibold mb-2">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">SSL encrypted checkout</p>
            </div>
            <div>
              <Package className="w-12 h-12 mx-auto text-b2c-primary mb-4" />
              <h3 className="font-semibold mb-2">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">30-day return policy</p>
            </div>
            <div>
              <CreditCard className="w-12 h-12 mx-auto text-b2c-primary mb-4" />
              <h3 className="font-semibold mb-2">Multiple Payment</h3>
              <p className="text-sm text-muted-foreground">Cards, PayPal, Apple Pay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-b2c-primary">Featured Products</h2>
              <p className="text-lg text-muted-foreground">Curated selection of our best sellers</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select className="border rounded-md px-3 py-1 text-sm">
                <option>Best Selling</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-all duration-300 group overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="relative">
                    <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {product.image}
                    </div>
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                    >
                      <Heart 
                        className={`w-4 h-4 ${
                          favorites.includes(product.id) 
                            ? 'fill-red-500 text-red-500' 
                            : 'text-gray-400'
                        }`} 
                      />
                    </button>
                    {product.originalPrice > product.price && (
                      <Badge className="absolute top-2 left-2 bg-b2c-primary text-b2c-foreground">
                        Sale
                      </Badge>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="destructive">Out of Stock</Badge>
                      </div>
                    )}
                  </div>
                  <div>
                    <Badge variant="outline" className="text-b2c-primary border-b2c-primary mb-2">
                      {product.category}
                    </Badge>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-muted-foreground">({product.reviews})</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-b2c-primary">
                        ${product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-lg text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    <Button 
                      variant="b2c" 
                      className="w-full"
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <section className="py-16 px-4 bg-b2c-accent/20">
          <div className="container mx-auto max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-b2c-primary">Shopping Cart</CardTitle>
                <CardDescription>Review your items before checkout</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl">{item.image}</span>
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-bold">${item.price}</span>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total:</span>
                      <span className="text-b2c-primary">${getCartTotal().toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button variant="b2c" size="lg" className="w-full">
                    Proceed to Checkout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="py-16 px-4 bg-gradient-to-r from-b2c-primary/10 to-b2c-secondary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-b2c-primary">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get exclusive deals and new product announcements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-b2c-primary"
            />
            <Button variant="b2c">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2C;