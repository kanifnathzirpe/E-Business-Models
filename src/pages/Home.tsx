import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, ShoppingCart, Users, ArrowRight, Globe, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-glow/10" />
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            E-Business Hub
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore the future of digital commerce through comprehensive Business-to-Business, 
            Business-to-Consumer, and Consumer-to-Consumer models
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/b2b">
                Start Exploring <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* What is E-Business Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What is E-Business?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Electronic business encompasses all aspects of operating an online business, 
              from electronic commerce to customer service and supply chain management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur">
              <CardHeader>
                <Globe className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access markets worldwide and connect with customers beyond geographical boundaries
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur">
              <CardHeader>
                <TrendingUp className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>Cost Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reduce operational costs and increase profit margins through digital automation
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur">
              <CardHeader>
                <Shield className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>Security & Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced security measures ensure safe transactions and data protection
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Models Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Business Models</h2>
            <p className="text-lg text-muted-foreground">
              Discover the three main types of electronic business relationships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* B2B Card */}
            <Card className="hover:shadow-xl transition-all duration-300 group border-0 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-b2b-primary to-b2b-secondary"></div>
              <CardHeader className="text-center pb-4">
                <Building2 className="w-16 h-16 mx-auto text-b2b-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-2xl text-b2b-primary">Business to Business</CardTitle>
                <CardDescription className="text-lg">
                  Companies selling products or services to other businesses
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li>• Bulk order processing</li>
                  <li>• Volume-based pricing</li>
                  <li>• Quote request system</li>
                  <li>• Enterprise solutions</li>
                </ul>
                <Button variant="b2b" className="w-full" asChild>
                  <Link to="/b2b">
                    Explore B2B Platform
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* B2C Card */}
            <Card className="hover:shadow-xl transition-all duration-300 group border-0 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-b2c-primary to-b2c-secondary"></div>
              <CardHeader className="text-center pb-4">
                <ShoppingCart className="w-16 h-16 mx-auto text-b2c-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-2xl text-b2c-primary">Business to Consumer</CardTitle>
                <CardDescription className="text-lg">
                  Companies selling directly to individual customers
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li>• Online shopping cart</li>
                  <li>• Secure checkout</li>
                  <li>• Product catalogs</li>
                  <li>• Customer reviews</li>
                </ul>
                <Button variant="b2c" className="w-full" asChild>
                  <Link to="/b2c">
                    Shop B2C Store
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* C2C Card */}
            <Card className="hover:shadow-xl transition-all duration-300 group border-0 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-c2c-primary to-c2c-secondary"></div>
              <CardHeader className="text-center pb-4">
                <Users className="w-16 h-16 mx-auto text-c2c-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-2xl text-c2c-primary">Consumer to Consumer</CardTitle>
                <CardDescription className="text-lg">
                  Individuals selling to other individuals through marketplaces
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li>• Peer-to-peer marketplace</li>
                  <li>• User-generated listings</li>
                  <li>• Direct communication</li>
                  <li>• Community trading</li>
                </ul>
                <Button variant="c2c" className="w-full" asChild>
                  <Link to="/c2c">
                    Join C2C Marketplace
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary-glow/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your E-Business Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose the business model that best fits your needs and start exploring the possibilities
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Get Started Today
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;