import Navigation from "@/components/Navigation";
import HudOverlay from "@/components/HudOverlay";
import ContentCard from "@/components/ContentCard";
import { Link } from "react-router-dom";
import card1 from "@/assets/card-1.jpg";
import card2 from "@/assets/card-2.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";
import { Music, Video, Image as ImageIcon, Headphones } from "lucide-react";

const Explore = () => {
  const contentItems = [
    { id: 1, title: "Genesis Protocol", image: card1, category: "Visual" },
    { id: 2, title: "Neon District", image: card2, category: "Music" },
    { id: 3, title: "Cyber Dreams", image: card3, category: "Experience" },
    { id: 4, title: "Digital Warfare", image: card4, category: "Art" },
  ];

  const categories = [
    { icon: Music, label: "Music", count: "12 Tracks" },
    { icon: Video, label: "Videos", count: "8 Videos" },
    { icon: ImageIcon, label: "Gallery", count: "24 Images" },
    { icon: Headphones, label: "Live Sets", count: "5 Mixes" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HudOverlay />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
            <Link 
              to="/" 
              className="inline-block font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-20">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.label}
                  className="group relative bg-card border-2 border-border hover:border-primary p-6 rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] cursor-pointer animate-fade-in"
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-wider mb-4">
              Featured Content
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {contentItems.map((item, index) => (
              <div key={item.id} className="relative group">
                <ContentCard
                  title={item.title}
                  image={item.image}
                  delay={index * 150}
                />
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-primary/90 text-background font-mono text-xs font-bold uppercase rounded backdrop-blur">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-wider mb-4">
              The Journey
            </h2>
            <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
              A timeline of creation and evolution
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary/30"></div>

              {/* Timeline items */}
              {[
                { year: "2025", title: "Bluetopia Era", desc: "The beginning of a new chapter" },
                { year: "2024", title: "Genesis Protocol", desc: "First major release" },
                { year: "2023", title: "Foundation", desc: "The inception of Aryiion" },
              ].map((item, index) => (
                <div
                  key={item.year}
                  className={`relative mb-12 animate-fade-in ${
                    index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="inline-block bg-card border-2 border-border hover:border-primary p-6 rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] cursor-pointer group">
                    <div className="font-mono text-sm text-primary mb-2">{item.year}</div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-mono text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className={`absolute top-6 w-4 h-4 bg-primary rounded-full border-4 border-background ${
                    index % 2 === 0 ? "md:right-[-8px]" : "md:left-[-8px]"
                  } left-6 md:left-auto`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="font-mono text-sm text-muted-foreground">
            © 2025 ARYIION. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Explore;
