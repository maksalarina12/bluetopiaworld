import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import HudOverlay from "@/components/HudOverlay";
import { Link } from "react-router-dom";
import { useState } from "react";
import aryiionLogo from "@/assets/aryiion-logo.png";
import anomalyblack2 from "@/assets/anomalyblack2.jpg";
import anomalywhite2 from "@/assets/anomalywhite2.jpg";
import anomalyblack from "@/assets/anomalyblack.jpg";
import anomalywhite from "@/assets/anomalywhite.jpg";
import front from "@/assets/front.png";
import backligh from "@/assets/backligh.png";
import korekkanan from "@/assets/korekkanan.png";
import korekkiri from "@/assets/korekkiri.png";
import frontcap from "@/assets/frontcap.png";
import backcap from "@/assets/backcap.png";
import front11 from "@/assets/front11.png";
import back11 from "@/assets/back11.png";

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
      price: "$7,83",
      description: "Anomaly it's describe our life with galaxy vibes",
      image: anomalyblack2,
      hoverImage: anomalywhite2,
      shopeeUrl: "https://shopee.co.id/product/1146843343/25956401270/",
      status: "Pre-order"
    },
    {
      id: 2,
      name: "Anomaly T-Shirt",
      price: "$7.83",
      description: "Anomaly it's describe our life with anomali faces",
      image: anomalyblack,
      hoverImage: anomalywhite,
      shopeeUrl: "https://shopee.co.id/product/1146843343/25855094589/",
      status: "Pre-order"
    },
    {
      id: 3,
      name: "Bluetopia Lighter",
      price: "$7,82",
      description: "Big Lighter with skull",
      image: front,
      hoverImage: backligh,
      shopeeUrl: "https://shopee.co.id/aryiion-electronic-dreams-cd",
      status: "In Stock"
    },
    {
      id: 4,
      name: "BLUETOPIA MINI LIGHTER",
      price: "$3.31",
      description: "Mini Lighter with skull",
      image: korekkanan,
      hoverImage: korekkiri,
      shopeeUrl: "https://shopee.co.id/aryiion-hoodie",
      status: "In Stock"
    },
    {
      id: 5,
      name: "BLUETOPIA CAP",
      price: "$7.23",
      description: "Cap with Bluetopia logo snd skull",
      image: frontcap,
      hoverImage: backcap,
      shopeeUrl: "https://shopee.co.id/aryiion-digital-bundle",
      status: "Digital"
    },
    { 
      id: 6,
      name: "BLUETOPIA NECKLACE",
      price: "$6.62",
      description: "Necklace with Bluetopia logo",
      image: front11,
      hoverImage: back11,
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
            {/* Back to Home removed */}
          </div>

          {/* Shop Notice with marketplace links */}
          <Card className="bg-card/50 backdrop-blur mb-12 border-primary/20 animate-fade-in">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="font-display text-xl font-bold text-primary mb-3 uppercase tracking-wider">Official Merchandise</h3>
                <p className="text-muted-foreground font-mono text-sm mb-5">
                  Find our products on your favorite marketplaces.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <a
                    href="https://www.tokopedia.com/silentghoststorez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-primary/40 hover:border-primary text-foreground hover:text-primary transition-colors duration-300 bg-background/40"
                  >
                    {/* Tokopedia logo (simple T glyph) */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                      <path d="M4 6h16v3h-6v9h-4V9H4V6z" fill="currentColor"/>
                    </svg>
                    <span className="font-display tracking-wider uppercase text-sm">Tokopedia</span>
                  </a>
                  <a
                    href="https://shopee.co.id/silentghoststorez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-primary/40 hover:border-primary text-foreground hover:text-primary transition-colors duration-300 bg-background/40"
                  >
                    {/* Shopee bag icon */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                      <path d="M7 9V7a5 5 0 0 1 10 0v2h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h2zm2 0h6V7a3 3 0 0 0-6 0v2z" fill="currentColor"/>
                    </svg>
                    <span className="font-display tracking-wider uppercase text-sm">Shopee</span>
                  </a>
                </div>
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

          {/* Shop Info - keep Payment and Support only */}
          <Card className="bg-card/50 backdrop-blur border-primary/20 animate-fade-in">
            <CardHeader>
              <CardTitle className="font-display text-3xl uppercase tracking-wider text-primary">Shop Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wider mb-3 text-foreground group-hover:text-primary transition-colors">Payment</h3>
                  <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                    Secure payment through marketplace platforms.
                  </p>
                </div>
                <div className="group">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wider mb-3 text-foreground group-hover:text-primary transition-colors">Support</h3>
                  <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                    Contact us via marketplace chat for any questions.
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
