import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, ShoppingCart, Users, Home, Phone } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
            <Building2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            E-Business Hub
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
              isActive("/") 
                ? "bg-primary/10 text-primary font-medium" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>

          <Link
            to="/b2b"
            className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
              isActive("/b2b") 
                ? "bg-b2b-primary/10 text-b2b-primary font-medium" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>B2B</span>
          </Link>

          <Link
            to="/b2c"
            className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
              isActive("/b2c") 
                ? "bg-b2c-primary/10 text-b2c-primary font-medium" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>B2C</span>
          </Link>

          <Link
            to="/c2c"
            className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
              isActive("/c2c") 
                ? "bg-c2c-primary/10 text-c2c-primary font-medium" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>C2C</span>
          </Link>

          <Link
            to="/contact"
            className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
              isActive("/contact") 
                ? "bg-primary/10 text-primary font-medium" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>Contact</span>
          </Link>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;