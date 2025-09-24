import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Users, Plus, MessageCircle, Star, Clock, MapPin, User, Shield } from "lucide-react";
import { useState } from "react";

const C2C = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newAd, setNewAd] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    location: ""
  });

  // Mock marketplace ads
  const ads = [
    {
      id: 1,
      title: "iPhone 13 - Excellent Condition",
      description: "Barely used iPhone 13 with all original accessories. No scratches or damage.",
      price: 650,
      category: "Electronics",
      location: "San Francisco, CA",
      seller: "TechEnthusiast22",
      sellerRating: 4.8,
      postedAt: "2 hours ago",
      image: "📱"
    },
    {
      id: 2,
      title: "Vintage Leather Jacket",
      description: "Authentic vintage leather jacket from the 80s. Size medium, perfect condition.",
      price: 120,
      category: "Fashion",
      location: "New York, NY", 
      seller: "VintageCollector",
      sellerRating: 4.9,
      postedAt: "5 hours ago",
      image: "🧥"
    },
    {
      id: 3,
      title: "Mountain Bike - Trek",
      description: "Trek mountain bike, 21-speed, great for trails. Recently serviced.",
      price: 450,
      category: "Sports",
      location: "Denver, CO",
      seller: "BikeRider99",
      sellerRating: 4.7,
      postedAt: "1 day ago",
      image: "🚴"
    },
    {
      id: 4,
      title: "Professional Camera Lens",
      description: "Canon 50mm f/1.8 lens. Perfect for portraits and low light photography.",
      price: 200,
      category: "Photography",
      location: "Los Angeles, CA",
      seller: "PhotoPro2023",
      sellerRating: 5.0,
      postedAt: "1 day ago",
      image: "📷"
    },
    {
      id: 5,
      title: "Handmade Ceramic Vase",
      description: "Beautiful handcrafted ceramic vase, perfect for home decoration.",
      price: 35,
      category: "Home & Garden",
      location: "Portland, OR",
      seller: "ArtisanCrafts",
      sellerRating: 4.6,
      postedAt: "2 days ago",
      image: "🏺"
    },
    {
      id: 6,
      title: "Gaming Setup - Complete",
      description: "Full gaming setup including monitor, keyboard, mouse, and headset.",
      price: 800,
      category: "Electronics",
      location: "Austin, TX",
      seller: "GamerSetups",
      sellerRating: 4.8,
      postedAt: "3 days ago",
      image: "🎮"
    }
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handlePostAd = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New ad posted:", newAd);
    alert("Ad posted successfully! It will appear in the marketplace shortly.");
    setNewAd({
      title: "",
      description: "",
      price: "",
      category: "",
      location: ""
    });
  };

  const categories = ["Electronics", "Fashion", "Sports", "Photography", "Home & Garden", "Books", "Automotive", "Other"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-c2c-primary to-c2c-secondary text-c2c-foreground">
        <div className="container mx-auto text-center">
          <Users className="w-20 h-20 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Consumer to Consumer Marketplace
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            Buy and sell directly with other consumers. Find unique items and great deals in your community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {!isLoggedIn ? (
              <>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-transparent border-c2c-foreground text-c2c-foreground hover:bg-c2c-foreground hover:text-c2c-primary"
                  onClick={handleLogin}
                >
                  Sign In
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-transparent border-c2c-foreground text-c2c-foreground hover:bg-c2c-foreground hover:text-c2c-primary"
                >
                  Create Account
                </Button>
              </>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-transparent border-c2c-foreground text-c2c-foreground hover:bg-c2c-foreground hover:text-c2c-primary"
                  >
                    <Plus className="mr-2 w-5 h-5" />
                    Post an Ad
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Post New Ad</DialogTitle>
                    <DialogDescription>
                      Create a listing to sell your item
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handlePostAd} className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={newAd.title}
                        onChange={(e) => setNewAd({...newAd, title: e.target.value})}
                        placeholder="What are you selling?"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <select
                        id="category"
                        value={newAd.category}
                        onChange={(e) => setNewAd({...newAd, category: e.target.value})}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                      >
                        <option value="">Select category</option>
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="price">Price ($)</Label>
                        <Input
                          id="price"
                          type="number"
                          value={newAd.price}
                          onChange={(e) => setNewAd({...newAd, price: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={newAd.location}
                          onChange={(e) => setNewAd({...newAd, location: e.target.value})}
                          placeholder="City, State"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={newAd.description}
                        onChange={(e) => setNewAd({...newAd, description: e.target.value})}
                        placeholder="Describe your item..."
                        required
                      />
                    </div>
                    <Button type="submit" variant="c2c" className="w-full">
                      Post Ad
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-c2c-accent/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <User className="w-12 h-12 mx-auto text-c2c-primary mb-4" />
              <h3 className="font-semibold mb-2">Direct Trading</h3>
              <p className="text-sm text-muted-foreground">Connect directly with sellers</p>
            </div>
            <div>
              <MessageCircle className="w-12 h-12 mx-auto text-c2c-primary mb-4" />
              <h3 className="font-semibold mb-2">Easy Communication</h3>
              <p className="text-sm text-muted-foreground">Chat with buyers and sellers</p>
            </div>
            <div>
              <MapPin className="w-12 h-12 mx-auto text-c2c-primary mb-4" />
              <h3 className="font-semibold mb-2">Local Deals</h3>
              <p className="text-sm text-muted-foreground">Find items in your area</p>
            </div>
            <div>
              <Star className="w-12 h-12 mx-auto text-c2c-primary mb-4" />
              <h3 className="font-semibold mb-2">Trusted Community</h3>
              <p className="text-sm text-muted-foreground">Verified user ratings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-c2c-primary">Marketplace</h2>
              <p className="text-lg text-muted-foreground">Discover amazing items from your community</p>
            </div>
            <div className="flex items-center space-x-4">
              <select className="border rounded-md px-3 py-1 text-sm">
                <option>All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <select className="border rounded-md px-3 py-1 text-sm">
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Distance</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ads.map((ad) => (
              <Card key={ad.id} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-c2c-primary">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="text-c2c-primary border-c2c-primary">
                      {ad.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{ad.postedAt}</span>
                    </div>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-2">{ad.image}</div>
                  </div>
                  
                  <CardTitle className="text-xl">{ad.title}</CardTitle>
                  <CardDescription>{ad.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-c2c-primary">${ad.price}</span>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{ad.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span>{ad.seller}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{ad.sellerRating}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="c2c" size="sm" className="flex-1">
                        <MessageCircle className="mr-2 w-4 h-4" />
                        Contact Seller
                      </Button>
                      <Button variant="c2c-outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication Prompt */}
      {!isLoggedIn && (
        <section className="py-16 px-4 bg-c2c-accent/20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-c2c-primary">Join Our Community</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Create an account to start buying and selling with other community members. 
              Enjoy secure transactions and build your reputation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="c2c" size="lg" onClick={handleLogin}>
                Create Account
              </Button>
              <Button variant="c2c-outline" size="lg" onClick={handleLogin}>
                Sign In
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Safety Tips */}
      <section className="py-16 px-4 bg-gradient-to-r from-c2c-primary/10 to-c2c-secondary/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-c2c-primary">Safety Tips</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-8 h-8 mx-auto text-c2c-primary mb-2" />
                <CardTitle className="text-lg">Meet in Public</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Always meet buyers and sellers in public, well-lit areas for exchanges
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <User className="w-8 h-8 mx-auto text-c2c-primary mb-2" />
                <CardTitle className="text-lg">Check Profiles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Review seller ratings and profiles before making any transactions
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <MessageCircle className="w-8 h-8 mx-auto text-c2c-primary mb-2" />
                <CardTitle className="text-lg">Use Platform Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Keep all communications within the platform for your safety and records
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default C2C;