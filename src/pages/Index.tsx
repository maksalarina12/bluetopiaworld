import { useState } from "react";
import { Link } from "react-router-dom";
import HudOverlay from "@/components/HudOverlay";
import Navigation from "@/components/Navigation";
import ContentCard from "@/components/ContentCard";
import TrackList from "@/components/TrackList";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/aryiion-logo.png";
import card1 from "@/assets/card-1.jpg";
import card2 from "@/assets/card-2.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";

const Index = () => {
  const [showTrackList, setShowTrackList] = useState(false);

  const contentItems = [
    { id: 1, title: "Genesis Protocol", image: card1 },
    { id: 2, title: "Neon District", image: card2 },
    { id: 3, title: "Cyber Dreams", image: card3 },
    { id: 4, title: "Digital Warfare", image: card4 },
  ];

  const scrollToTracks = () => {
    setShowTrackList(true);
    setTimeout(() => {
      document.getElementById('tracklist')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HudOverlay />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroBg})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background"></div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center animate-fade-in">
          <div className="mb-8 font-mono text-sm tracking-widest text-primary uppercase animate-pulse-glow">
            Explore
          </div>
          
          {/* Logo with interaction */}
          <Link to="/explore" className="inline-block group">
            <img 
              src={logo} 
              alt="Aryiion Logo" 
              className="w-64 md:w-96 mx-auto transition-all duration-500 hover:scale-110 hover:drop-shadow-[0_0_30px_rgba(34,197,94,0.6)] cursor-pointer animate-fade-in filter brightness-110"
            />
          </Link>
          
          <button 
            onClick={scrollToTracks}
            className="mt-8 font-mono text-sm tracking-widest text-muted-foreground hover:text-primary uppercase transition-all duration-300 hover:scale-110 cursor-pointer group block mx-auto"
          >
            <span className="block group-hover:text-primary transition-colors">Bluetopia World</span>
            <div className="w-0 h-0.5 bg-primary mx-auto mt-1 group-hover:w-full transition-all duration-300"></div>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <div className="w-px h-12 bg-primary opacity-50"></div>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow"></div>
          </div>
        </div>
      </section>

      {/* Track List Section */}
      {showTrackList && (
        <section id="tracklist" className="relative z-10 container mx-auto px-4 py-24">
          <TrackList />
        </section>
      )}

      {/* Content Grid */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {contentItems.map((item, index) => (
            <ContentCard
              key={item.id}
              title={item.title}
              image={item.image}
              delay={index * 150}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="font-mono text-sm text-muted-foreground">
            © 2025 ARYIION. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
