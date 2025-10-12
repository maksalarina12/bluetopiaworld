import { useState } from "react";
import { Link } from "react-router-dom";
import HudOverlay from "@/components/HudOverlay";
import Navigation from "@/components/Navigation";
import TrackList from "@/components/TrackList";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/aryiion-logo.png";

const Index = () => {
  const [showTrackList, setShowTrackList] = useState(false);

  const journeyEras = [
    { id: 1, title: "BLUETOPIA ERA", description: "The beginning of a new chapter", year: "2025" },
    { id: 2, title: "LOST MEMORY ERA", description: "Fragments of the past", year: "2023" },
    { id: 3, title: "HEARTED ERA", description: "Emotions in digital form", year: "2021" },
    { id: 4, title: "BLOOM ERA", description: "The inception of growth", year: "2019" },
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

      {/* Journey Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wider text-foreground mb-4">
              THE JOURNEY
            </h2>
            <p className="font-mono text-sm tracking-widest text-primary uppercase">
              A timeline of creation and evolution
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary opacity-30"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {journeyEras.map((era, index) => (
                <div
                  key={era.id}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background z-10 animate-pulse-glow"></div>
                  
                  {/* Content card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] group">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-sm text-primary font-bold">{era.year}</span>
                        <div className="flex-1 h-px bg-primary opacity-30"></div>
                      </div>
                      <h3 className="font-display text-xl font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                        {era.title}
                      </h3>
                      <p className="text-muted-foreground text-sm font-mono">
                        {era.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
