import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Shield, Home, Phone } from "lucide-react";

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <ShoppingBag className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">Mobile Parts</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link 
            to="/products" 
            className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/products" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <ShoppingBag className="h-4 w-4" />
            Products
          </Link>
          <Link 
            to="/admin" 
            className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/admin" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Shield className="h-4 w-4" />
            Admin
          </Link>
          <a 
            href="https://wa.me/919997429607"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
