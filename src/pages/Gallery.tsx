import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HudOverlay from "@/components/HudOverlay";
import CircularGallery from "@/components/CircularGallery";
import foto1 from "@/assets/foto1.png";
import foto2 from "@/assets/foto2.png";
import foto3 from "@/assets/foto3.png";
import foto4 from "@/assets/foto4.png";
import foto5 from "@/assets/foto5.png";
import foto6 from "@/assets/foto6.png";
import foto7 from "@/assets/foto7.png";
import bluetopiaImage from "@/assets/bluetopia.jpg";
import aryiionLogo from "@/assets/aryiion-logo.png";
import { useIsMobile } from "@/hooks/use-mobile";

// Image functions
const getFoto1 = () => foto1;
const getFoto2 = () => foto2;
const getFoto3 = () => foto3;
const getFoto4 = () => foto4;
const getFoto5 = () => foto5;
const getFoto6 = () => foto6;
const getFoto7 = () => foto7;
const getBluetopiaImage = () => bluetopiaImage;
const getAryiionLogo = () => aryiionLogo;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const images = [
    {
      id: 1,
      src: getFoto1(),
    },
    {
      id: 2,
      src: getFoto2(),
    },
    {
      id: 3,
      src: getFoto3(),
    },
    {
      id: 4,
      src: getFoto4(),
    },
    {
      id: 5,
      src: getFoto5(),
    },
    {
      id: 6,
      src: getFoto6(),
    },
    {
      id: 7,
      src: getFoto7(),
    },
    {
      id: 8,
      src: getBluetopiaImage(),
    },
    {
      id: 9,
      src: getAryiionLogo(),
    },
    {
      id: 10,
      src: getAryiionLogo(),
    },
    {
      id: 11,
      src: getAryiionLogo(),
    },
    {
      id: 12,
      src: getAryiionLogo(),
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
          <div style={{ height: isMobile ? '560px' : '900px', position: 'relative' }}>
            <CircularGallery 
              bend={3} 
              textColor="#ffffff" 
              borderRadius={0.05} 
              scrollEase={0.02}
              items={images.map(img => ({
                image: img.src,
                text: ""
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
                      alt="gallery"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Hide text overlay */}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-6 mt-auto bg-background">
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
