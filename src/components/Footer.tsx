import { MessageCircle, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Mobile Parts Store</h3>
            <p className="text-sm text-muted-foreground">
              Your trusted source for quality mobile spare parts. Fast delivery, competitive prices.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="/admin" className="hover:text-primary transition-colors">Admin</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/919997429607" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp: +91 99974 29607
              </a>
              <a 
                href="mailto:info@mobileparts.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@mobileparts.com
              </a>
              <a 
                href="tel:+919997429607"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 99974 29607
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Mobile Parts Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
