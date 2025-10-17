import Navigation from "@/components/Navigation";
import HudOverlay from "@/components/HudOverlay";
import { Link } from "react-router-dom";
import { Music, Video, Image as ImageIcon, Headphones, User } from "lucide-react";

const Explore = () => {

  const categories = [
    { icon: Music, label: "Music", link: "/music" },
    { icon: Video, label: "Videos", link: "/videos" },
    { icon: ImageIcon, label: "Gallery", link: "/gallery" },
    { icon: User, label: "Bio", link: "/bio" },
    { icon: Headphones, label: "Live Sets", link: "/live-sets" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <HudOverlay />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden flex-1">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="font-mono text-sm tracking-widest text-primary uppercase mb-4 animate-pulse-glow">
              Discover
            </div>
            <h1 className="font-display text-6xl md:text-9xl font-bold uppercase tracking-wider mb-6">
              Explore
            </h1>
            <p className="font-mono text-muted-foreground max-w-2xl mx-auto mb-8">
              Dive into the world of Aryiion. Experience the music, visuals, and stories that shape our universe.
            </p>
            {/* Back to Home removed */}
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-20">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.label}
                  to={cat.link}
                  className="group relative bg-card border-2 border-border hover:border-primary p-6 rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] cursor-pointer animate-fade-in hover:scale-105 transform"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary group-hover:text-background transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-wider mb-1 group-hover:text-primary transition-colors">
                      {cat.label}
                    </h3>
                    <p className="font-mono text-xs text-muted-foreground">
                      {cat.count}
                    </p>
                  </div>
                  <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <div className="font-mono text-xs text-muted-foreground">
            © 2025 ARYIION. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Explore;
