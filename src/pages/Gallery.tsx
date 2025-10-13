import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HudOverlay from "@/components/HudOverlay";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const images = [
    {
      id: 1,
      src: "/src/assets/aryiion-logo.png",
      title: "Studio Session",
      category: "Behind the Scenes",
      description: "Aryiion in the studio creating magic",
      date: "2025"
    },
    {
      id: 2,
      src: "/src/assets/aryiion-logo.png",
      title: "Concert Performance",
      category: "Live",
      description: "Electrifying performance at the main stage",
      date: "2024"
    },
    {
      id: 3,
      src: "/src/assets/aryiion-logo.png",
      title: "Album Artwork",
      category: "Artwork",
      description: "Visual representation of the musical journey",
      date: "2025"
    },
    {
      id: 4,
      src: "/src/assets/aryiion-logo.png",
      title: "Backstage Moments",
      category: "Behind the Scenes",
      description: "Candid moments before the show",
      date: "2024"
    },
    {
      id: 5,
      src: "/src/assets/aryiion-logo.png",
      title: "Visual Effects",
      category: "Visuals",
      description: "Stunning visual effects during live performance",
      date: "2024"
    },
    {
      id: 6,
      src: "/src/assets/aryiion-logo.png",
      title: "Fan Interaction",
      category: "Fans",
      description: "Connecting with the audience",
      date: "2024"
    },
    {
      id: 7,
      src: "/src/assets/aryiion-logo.png",
      title: "Equipment Setup",
      category: "Behind the Scenes",
      description: "The technical side of the performance",
      date: "2024"
    },
    {
      id: 8,
      src: "/src/assets/aryiion-logo.png",
      title: "Stage Design",
      category: "Visuals",
      description: "Immersive stage design and lighting",
      date: "2024"
    },
    {
      id: 9,
      src: "/src/assets/aryiion-logo.png",
      title: "Collaboration",
      category: "Artwork",
      description: "Working with other artists",
      date: "2024"
    },
    {
      id: 10,
      src: "/src/assets/aryiion-logo.png",
      title: "Recording Process",
      category: "Behind the Scenes",
      description: "The creative process in the studio",
      date: "2024"
    },
    {
      id: 11,
      src: "/src/assets/aryiion-logo.png",
      title: "Light Show",
      category: "Visuals",
      description: "Mesmerizing light show synchronization",
      date: "2024"
    },
    {
      id: 12,
      src: "/src/assets/aryiion-logo.png",
      title: "Crowd Energy",
      category: "Live",
      description: "The energy of the live audience",
      date: "2024"
    }
  ];

  const categories = ["All", "Behind the Scenes", "Live", "Artwork", "Visuals", "Fans"];
  const filteredImages = activeFilter === "All" 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HudOverlay />
      
      <div className="pt-32 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="font-mono text-sm tracking-widest text-primary uppercase mb-4 animate-pulse-glow">
              Visual Collection
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-wider mb-4">
              Gallery
            </h1>
            <Link to="/" className="inline-block mt-4 font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
              ← Back to Home
            </Link>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-mono text-sm uppercase tracking-wider ${
                  activeFilter === category
                    ? 'border-primary bg-primary text-background'
                    : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 mb-16">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] cursor-pointer break-inside-avoid"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(image.id)}
              >
                {/* Image Container */}
                <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center mb-3 mx-auto">
                        <span className="text-2xl">🔍</span>
                      </div>
                      <p className="font-mono text-sm text-white">View Full Size</p>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-primary/90 text-background px-3 py-1 rounded-full font-mono text-xs uppercase">
                    {image.category}
                  </div>
                </div>

                {/* Image Info */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">
                    {image.title}
                  </h3>
                  
                  <p className="font-mono text-sm text-muted-foreground mb-3">
                    {image.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-mono">{image.date}</span>
                    <span className="font-mono">#{image.id.toString().padStart(3, '0')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
              <div className="max-w-6xl max-h-[90vh] w-full">
                <div className="relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                  >
                    ×
                  </button>
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={() => {
                      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
                      const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
                      setSelectedImage(filteredImages[prevIndex].id);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                  >
                    ‹
                  </button>
                  
                  <button
                    onClick={() => {
                      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
                      const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
                      setSelectedImage(filteredImages[nextIndex].id);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                  >
                    ›
                  </button>
                  
                  {/* Image */}
                  <div className="aspect-video bg-black rounded-2xl overflow-hidden">
                    <img 
                      src={filteredImages.find(img => img.id === selectedImage)?.src} 
                      alt={filteredImages.find(img => img.id === selectedImage)?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white mb-2">
                      {filteredImages.find(img => img.id === selectedImage)?.title}
                    </h3>
                    <p className="font-mono text-sm text-white/80 mb-2">
                      {filteredImages.find(img => img.id === selectedImage)?.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-white/60">
                      <span className="font-mono">
                        {filteredImages.find(img => img.id === selectedImage)?.category}
                      </span>
                      <span className="font-mono">
                        {filteredImages.find(img => img.id === selectedImage)?.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-card border border-primary/30 rounded-2xl p-8 text-center group hover:border-primary transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">24</div>
              <div className="font-mono text-sm text-muted-foreground uppercase tracking-wider">Total Images</div>
            </div>
            
            <div className="bg-card border border-primary/30 rounded-2xl p-8 text-center group hover:border-primary transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <div className="font-mono text-sm text-muted-foreground uppercase tracking-wider">Categories</div>
            </div>
            
            <div className="bg-card border border-primary/30 rounded-2xl p-8 text-center group hover:border-primary transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">2024</div>
              <div className="font-mono text-sm text-muted-foreground uppercase tracking-wider">Latest Update</div>
            </div>
            
            <div className="bg-card border border-primary/30 rounded-2xl p-8 text-center group hover:border-primary transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">HD</div>
              <div className="font-mono text-sm text-muted-foreground uppercase tracking-wider">Quality</div>
            </div>
          </div>
        </div>
      </div>

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

export default Gallery;
