import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBag, Shield, Home, Phone, Menu, Smartphone } from "lucide-react";

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = ({ mobile = false, onLinkClick = () => {} }) => (
    <>
      <Link 
        to="/" 
        onClick={onLinkClick}
        className={`flex items-center gap-2 ${mobile ? 'text-base py-3' : 'text-sm'} font-medium transition-colors hover:text-primary ${
          location.pathname === "/" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        <Home className={mobile ? "h-5 w-5" : "h-4 w-4"} />
        Home
      </Link>
      <Link 
        to="/products" 
        onClick={onLinkClick}
        className={`flex items-center gap-2 ${mobile ? 'text-base py-3' : 'text-sm'} font-medium transition-colors hover:text-primary ${
          location.pathname === "/products" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        <ShoppingBag className={mobile ? "h-5 w-5" : "h-4 w-4"} />
        Products
      </Link>
      <Link 
        to="/admin" 
        onClick={onLinkClick}
        className={`flex items-center gap-2 ${mobile ? 'text-base py-3' : 'text-sm'} font-medium transition-colors hover:text-primary ${
          location.pathname === "/admin" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        <Shield className={mobile ? "h-5 w-5" : "h-4 w-4"} />
        Admin
      </Link>
      <a 
        href="https://wa.me/919997429607"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onLinkClick}
        className={`flex items-center gap-2 ${mobile ? 'text-base py-3' : 'text-sm'} font-medium text-muted-foreground transition-colors hover:text-primary`}
      >
        <Phone className={mobile ? "h-5 w-5" : "h-4 w-4"} />
        Contact Us
      </a>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Smartphone className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
            <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-primary/20 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground leading-tight">Mobile Parts</span>
            <span className="text-[10px] text-muted-foreground leading-tight">Quality Spare Parts</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[350px]">
            <div className="flex flex-col gap-1 mt-8">
              <div className="mb-6 pb-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-8 w-8 text-primary" />
                  <div>
                    <h2 className="text-xl font-bold text-foreground">Mobile Parts</h2>
                    <p className="text-sm text-muted-foreground">Quality Spare Parts</p>
                  </div>
                </div>
              </div>
              <NavLinks mobile onLinkClick={() => setIsOpen(false)} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
