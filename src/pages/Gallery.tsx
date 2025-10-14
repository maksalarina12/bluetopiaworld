import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HudOverlay from "@/components/HudOverlay";
import CircularGallery from "@/components/CircularGallery";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      src: "/src/assets/foto1.png",
      title: "-",
      description: "-",
      date: "2025"
    },
    {
      id: 2,
      src: "/src/assets/foto2.png",
      title: "Concert Performance",
      description: "Electrifying performance at the main stage",
      date: "2024"
    },
    {
      id: 3,
      src: "/src/assets/foto3.png",
      title: "Album Artwork",
      description: "Visual representation of the musical journey",
      date: "2025"
    },
    {
      id: 4,
      src: "/src/assets/foto4.png",
      title: "Backstage Moments",
      description: "Candid moments before the show",
      date: "2024"
    },
    {
      id: 5,
      src: "/src/assets/foto5.png",
      title: "Visual Effects",
      description: "Stunning visual effects during live performance",
      date: "2024"
    },
    {
      id: 6,
      src: "/src/assets/foto6.png",
      title: "Fan Interaction",
      description: "Connecting with the audience",
      date: "2024"
    },
    {
      id: 7,
      src: "/src/assets/foto7.png",
      title: "Equipment Setup",
      description: "The technical side of the performance",
      date: "2024"
    },
    {
      id: 8,
      src: "/src/assets/bluetopia.jpg",
      title: "Bluetopia Album",
      description: "Immersive stage design and lighting",
      date: "2024"
    },
    {
      id: 9,
      src: "/src/assets/aryiion-logo.png",
      title: "Collaboration",
      description: "Working with other artists",
      date: "2024"
    },
    {
      id: 10,
      src: "/src/assets/aryiion-logo.png",
      title: "Recording Process",
      description: "The creative process in the studio",
      date: "2024"
    },
    {
      id: 11,
      src: "/src/assets/aryiion-logo.png",
      title: "Light Show",
      description: "Mesmerizing light show synchronization",
      date: "2024"
    },
    {
      id: 12,
      src: "/src/assets/aryiion-logo.png",
      title: "Crowd Energy",
      description: "The energy of the live audience",
      date: "2024"
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
              Visual Collection
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-wider mb-4">
              Gallery
            </h1>
          </div>


          {/* Circular Gallery */}
          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery 
              bend={3} 
              textColor="#ffffff" 
              borderRadius={0.05} 
              scrollEase={0.02}
              items={images.map(img => ({
                image: img.src,
                text: img.title
              }))}
            />
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
                      const currentIndex = images.findIndex(img => img.id === selectedImage);
                      const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
                      setSelectedImage(images[prevIndex].id);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                  >
                    ‹
                  </button>
                  
                  <button
                    onClick={() => {
                      const currentIndex = images.findIndex(img => img.id === selectedImage);
                      const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
                      setSelectedImage(images[nextIndex].id);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                  >
                    ›
                  </button>
                  
                  {/* Image */}
                  <div className="aspect-video bg-black rounded-2xl overflow-hidden">
                    <img 
                      src={images.find(img => img.id === selectedImage)?.src} 
                      alt={images.find(img => img.id === selectedImage)?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white mb-2">
                      {images.find(img => img.id === selectedImage)?.title}
                    </h3>
                    <p className="font-mono text-sm text-white/80 mb-2">
                      {images.find(img => img.id === selectedImage)?.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-white/60">
                      <span className="font-mono">
                        {images.find(img => img.id === selectedImage)?.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-10 border-t border-border py-4 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="font-mono text-xs text-muted-foreground">
            © 2025 ARYIION. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
