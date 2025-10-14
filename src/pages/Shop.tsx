import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import HudOverlay from "@/components/HudOverlay";
import { Link } from "react-router-dom";
import { useState } from "react";
import aryiionLogo from "@/assets/aryiion-logo.png";

// Hover Image Component
const HoverImage = ({ src, hoverSrc, alt, className }: { src: string; hoverSrc: string; alt: string; className: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={src} 
        alt={alt}
        className={`${className} absolute inset-0 transition-opacity duration-500 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <img 
        src={hoverSrc} 
        alt={alt}
        className={`${className} absolute inset-0 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Anomaly T-Shirt Ver2",
      price: "$7,82",
      description: "Anomaly it's describe our life",
      image: "/src/assets/anomalyblack2.jpg",
      hoverImage: "/src/assets/anomalywhite2.jpg",
      shopeeUrl: "https://shopee.co.id/product/1146843343/25956401270/",
      status: "Pre-order"
    },
    {
      id: 2,
      name: "Anomaly T-Shirt",
      price: "$7,82",
      description: "Anomaly it's describe our life",
      image: "/src/assets/anomalyblack.jpg",
      hoverImage: "/src/assets/anomalywhite.jpg",
      shopeeUrl: "https://shopee.co.id/product/1146843343/25855094589/",
      status: "Pre-order"
    },
    {
      id: 3,
      name: "Bluetopia Lighter",
      price: "$7,82",
      description: "Physical CD of the Electronic Dreams EP",
      image: "/src/assets/front.png",
      hoverImage: "/src/assets/backligh.png",
      shopeeUrl: "https://shopee.co.id/aryiion-electronic-dreams-cd",
      status: "In Stock"
    },
    {
      id: 4,
      name: "Aryiion Hoodie",
      price: "$49.99",
      description: "Comfortable hoodie with embroidered Aryiion branding",
      image: "/src/assets/logowhitedone.png",
      hoverImage: "/src/assets/aryiion-logo.png",
      shopeeUrl: "https://shopee.co.id/aryiion-hoodie",
      status: "In Stock"
    },
    {
      id: 5,
      name: "Digital Album Bundle",
      price: "$9.99",
      description: "Complete digital collection of all Aryiion releases",
      image: "/src/assets/logowhitedone.png",
      hoverImage: "/src/assets/aryiion-logo.png",
      shopeeUrl: "https://shopee.co.id/aryiion-digital-bundle",
      status: "Digital"
    },
    {
      id: 6,
      name: "Aryiion Poster Set",
      price: "$19.99",
      description: "Set of 3 high-quality posters featuring album artwork",
      image: "/src/assets/logowhitedone.png",
      hoverImage: "/src/assets/aryiion-logo.png",
      shopeeUrl: "https://shopee.co.id/aryiion-poster-set",
      status: "In Stock"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HudOverlay />
      
      <div className="pt-32 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="font-mono text-sm tracking-widest text-primary uppercase mb-4 animate-pulse-glow">
              Official Store
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-wider mb-4">
              Shop
            </h1>
            <Link to="/" className="inline-block mt-4 font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
              ← Back to Home
            </Link>
          </div>

          {/* Shop Notice */}
          <Card className="bg-card/50 backdrop-blur mb-12 border-primary/20 animate-fade-in">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="font-display text-xl font-bold text-primary mb-3 uppercase tracking-wider">Official Merchandise</h3>
                <p className="text-muted-foreground font-mono text-sm">
                  All official Aryiion merchandise is available on Shopee. Click any product below to visit our official store.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="group bg-card border-border hover:border-primary transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 w-full aspect-square bg-secondary/30 rounded-lg flex items-center justify-center overflow-hidden">
                    <HoverImage 
                      src={product.image} 
                      hoverSrc={product.hoverImage}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <CardTitle className="font-display text-xl uppercase tracking-wider group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="font-mono text-sm text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold text-primary font-display tracking-wider">{product.price}</span>
                    <span className={`px-3 py-1 rounded font-mono text-xs font-bold uppercase ${
                      product.status === "In Stock" 
                        ? "bg-primary/20 text-primary border border-primary/40" 
                        : product.status === "Pre-order"
                        ? "bg-accent/20 text-accent border border-accent/40"
                        : "bg-secondary text-foreground border border-border"
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full"
                      asChild
                    >
                      <a href={product.shopeeUrl} target="_blank" rel="noopener noreferrer">
                        Buy on Shopee
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      asChild
                    >
                      <a href="#">
                        View Details
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Shop Info */}
          <Card className="bg-card/50 backdrop-blur border-primary/20 animate-fade-in">
            <CardHeader>
              <CardTitle className="font-display text-3xl uppercase tracking-wider text-primary">Shop Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wider mb-3 text-foreground group-hover:text-primary transition-colors">Shipping</h3>
                  <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                    Free shipping on orders over $50. International shipping available.
                  </p>
                </div>
                <div className="group">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wider mb-3 text-foreground group-hover:text-primary transition-colors">Returns</h3>
                  <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                    30-day return policy for all physical merchandise.
                  </p>
                </div>
                <div className="group">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wider mb-3 text-foreground group-hover:text-primary transition-colors">Payment</h3>
                  <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                    Secure payment through Shopee's platform.
                  </p>
                </div>
                <div className="group">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wider mb-3 text-foreground group-hover:text-primary transition-colors">Support</h3>
                  <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                    Contact us through Shopee chat for any questions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="font-mono text-xs text-muted-foreground">
            © 2025 ARYIION. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
