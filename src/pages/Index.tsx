import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag, MessageCircle, Shield, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-whatsapp-light to-background py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground md:text-6xl">
                Quality Mobile Spare Parts at Your Fingertips
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Browse our extensive collection of mobile spare parts and order directly through WhatsApp
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/products">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Browse Products
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg">
                  <a href="https://wa.me/919997429607" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
              Why Choose Us?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Wide Selection</h3>
                <p className="text-muted-foreground">
                  Extensive range of spare parts for all major mobile brands
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">WhatsApp Ordering</h3>
                <p className="text-muted-foreground">
                  Quick and easy ordering through WhatsApp chat
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Quick processing and reliable delivery service
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mb-8 text-lg opacity-90">
              Browse our products or contact us directly on WhatsApp
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/products">View All Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-foreground hover:bg-primary-foreground/10">
                <Link to="/admin">
                  <Shield className="mr-2 h-5 w-5" />
                  Admin Access
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
