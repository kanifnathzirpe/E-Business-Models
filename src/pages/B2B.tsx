import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Building2, Package, Star, Quote, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const B2B = () => {
  const [quoteForm, setQuoteForm] = useState({
    companyName: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: ""
  });

  const products = [
    {
      id: 1,
      name: "Premium Rice Bags",
      description: "High-quality organic rice in bulk packaging",
      price: "$500",
      unit: "50 kg bag",
      minOrder: 100,
      category: "Food & Beverages",
      rating: 4.8,
      supplier: "AgriCorp Solutions"
    },
    {
      id: 2,
      name: "Industrial Steel Pipes",
      description: "Heavy-duty steel pipes for construction projects",
      price: "$1,200",
      unit: "per ton",
      minOrder: 5,
      category: "Construction",
      rating: 4.9,
      supplier: "SteelTech Industries"
    },
    {
      id: 3,
      name: "Office Furniture Set",
      description: "Complete office furniture solutions for corporate spaces",
      price: "$800",
      unit: "per desk set",
      minOrder: 50,
      category: "Office Supplies",
      rating: 4.7,
      supplier: "WorkSpace Pro"
    },
    {
      id: 4,
      name: "Medical Equipment Bundle",
      description: "Professional grade medical equipment for hospitals",
      price: "$15,000",
      unit: "complete set",
      minOrder: 1,
      category: "Healthcare",
      rating: 5.0,
      supplier: "MedTech Global"
    },
    {
      id: 5,
      name: "Industrial Chemicals",
      description: "High-purity chemicals for manufacturing processes",
      price: "$300",
      unit: "25 L container",
      minOrder: 20,
      category: "Chemicals",
      rating: 4.6,
      supplier: "ChemPure Ltd"
    },
    {
      id: 6,
      name: "Textile Raw Materials",
      description: "Premium cotton and synthetic fabrics in bulk",
      price: "$25",
      unit: "per yard",
      minOrder: 1000,
      category: "Textiles",
      rating: 4.8,
      supplier: "FabricSource Inc"
    }
  ];

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    console.log("Quote request submitted:", quoteForm);
    alert("Quote request submitted successfully! We'll contact you within 24 hours.");
    setQuoteForm({
      companyName: "",
      email: "",
      phone: "",
      product: "",
      quantity: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-b2b-primary to-b2b-secondary text-b2b-foreground">
        <div className="container mx-auto text-center">
          <Building2 className="w-20 h-20 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Business to Business Solutions
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            Connect with trusted suppliers and access wholesale products with competitive bulk pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-transparent border-b2b-foreground text-b2b-foreground hover:bg-b2b-foreground hover:text-b2b-primary">
              Browse Catalog
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-b2b-foreground text-b2b-foreground hover:bg-b2b-foreground hover:text-b2b-primary">
              Become a Supplier
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 px-4 bg-b2b-accent/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <Package className="w-12 h-12 mx-auto text-b2b-primary mb-4" />
              <h3 className="font-semibold mb-2">Bulk Orders</h3>
              <p className="text-sm text-muted-foreground">Volume-based pricing for cost savings</p>
            </div>
            <div>
              <Quote className="w-12 h-12 mx-auto text-b2b-primary mb-4" />
              <h3 className="font-semibold mb-2">Custom Quotes</h3>
              <p className="text-sm text-muted-foreground">Tailored pricing for your needs</p>
            </div>
            <div>
              <Star className="w-12 h-12 mx-auto text-b2b-primary mb-4" />
              <h3 className="font-semibold mb-2">Verified Suppliers</h3>
              <p className="text-sm text-muted-foreground">Trusted business partners</p>
            </div>
            <div>
              <Building2 className="w-12 h-12 mx-auto text-b2b-primary mb-4" />
              <h3 className="font-semibold mb-2">Enterprise Support</h3>
              <p className="text-sm text-muted-foreground">Dedicated account management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-b2b-primary">Product Catalog</h2>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive range of business products and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-b2b-primary">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-b2b-primary border-b2b-primary">
                      {product.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-b2b-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground">{product.unit}</span>
                    </div>
                    <div className="text-sm">
                      <p><span className="font-medium">Supplier:</span> {product.supplier}</p>
                      <p><span className="font-medium">Min. Order:</span> {product.minOrder} units</p>
                    </div>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="b2b" 
                            size="sm" 
                            className="flex-1"
                            onClick={() => setQuoteForm({...quoteForm, product: product.name})}
                          >
                            Request Quote
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Request Quote</DialogTitle>
                            <DialogDescription>
                              Get a custom quote for {product.name}
                            </DialogDescription>
                          </DialogHeader>
                          <form onSubmit={handleQuoteSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="companyName">Company Name</Label>
                                <Input
                                  id="companyName"
                                  value={quoteForm.companyName}
                                  onChange={(e) => setQuoteForm({...quoteForm, companyName: e.target.value})}
                                  required
                                />
                              </div>
                              <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                  id="email"
                                  type="email"
                                  value={quoteForm.email}
                                  onChange={(e) => setQuoteForm({...quoteForm, email: e.target.value})}
                                  required
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                  id="phone"
                                  value={quoteForm.phone}
                                  onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})}
                                  required
                                />
                              </div>
                              <div>
                                <Label htmlFor="quantity">Quantity</Label>
                                <Input
                                  id="quantity"
                                  type="number"
                                  min={product.minOrder}
                                  value={quoteForm.quantity}
                                  onChange={(e) => setQuoteForm({...quoteForm, quantity: e.target.value})}
                                  required
                                />
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="message">Additional Requirements</Label>
                              <Textarea
                                id="message"
                                value={quoteForm.message}
                                onChange={(e) => setQuoteForm({...quoteForm, message: e.target.value})}
                                placeholder="Any specific requirements or questions..."
                              />
                            </div>
                            <Button type="submit" variant="b2b" className="w-full">
                              Submit Quote Request
                            </Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                      <Button variant="b2b-outline" size="sm">
                        Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-b2b-accent/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-b2b-primary">Need Enterprise Solutions?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our B2B specialists are ready to help you find the perfect products and negotiate the best deals for your business
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-b2b-primary mb-2" />
              <span className="font-medium">Email Support</span>
              <span className="text-sm text-muted-foreground">b2b@ebusinesshub.com</span>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-b2b-primary mb-2" />
              <span className="font-medium">Phone Support</span>
              <span className="text-sm text-muted-foreground">+1-800-B2B-HELP</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-b2b-primary mb-2" />
              <span className="font-medium">Office Location</span>
              <span className="text-sm text-muted-foreground">New York, USA</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2B;