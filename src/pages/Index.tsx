import { useState } from "react";
import { Link } from "react-router-dom";
import HudOverlay from "@/components/HudOverlay";
import Navigation from "@/components/Navigation";
import TrackList from "@/components/TrackList";
import FadeContent from "@/components/FadeContent";
import TextPressure from "@/components/TextPressure";
import TiltedCard from "@/components/TiltedCard";
import { useIsMobile } from "@/hooks/use-mobile";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/aryiion-logo.png";
import bluetopia from "@/assets/bluetopia.jpg";

// Image functions
const getHeroBg = () => heroBg;
const getLogo = () => logo;
const getBluetopia = () => bluetopia;

const Index = () => {
  const [showTrackList, setShowTrackList] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const isMobile = useIsMobile();

  const journeyEras = [
    { id: 1, title: "BLUETOPIA ERA", description: "The beginning of a new chapter", year: "2025", spotifyUrl: "https://open.spotify.com/album/0ZNnymcJRmUMrU4YJZoYyl?si=I7PcZdSkQxapzoIWZQtbUg" },
    { id: 2, title: "KENANGAN YANG HILANG", description: "Aryiiom", year: "2023", spotifyUrl: "https://open.spotify.com/track/6SZ0nVZU0ZOuayrz2tqBIp?si=53629e57ea234389" },
    { id: 4, title: "EGO", description: "Aryiion, Yung Uber", year: "2022", spotifyUrl: "https://openyoutu.be/Fk8eAOfkaGg?si=NRIgsqNA1wJz8G-h" },
    { id: 3, title: "KAU DAN BULAN", description: "Aryiion", year: "2021", spotifyUrl: "https://open.spotify.com/track/0PR7gLVNIwp1plbCFTffM0?si=f9abe2c3d2134aae" },
    { id: 3, title: "AKU BUKAN KAMU", description: "Aryiion, Sobat Ray", year: "2021", spotifyUrl: "https://openyoutu.be/IRVuo5idp0U?si=DqQNZkw-opFCf5Eg" },
    { id: 3, title: "PUTRI", description: "Aryiion", year: "2022", spotifyUrl: "https://open.spotify.com/track/753l5jZUQI4uW3EWaCbrLJ?si=29638035b76446ca" },
    { id: 3, title: "KU HANYA INGIN TAU", description: "Aryiion, HEILNUAN", year: "2021", spotifyUrl: "https://openyoutu.be/CQvSdD1BJ1I?si=l38Y18LfJzSfYMls" },
    { id: 3, title: "PENGEMBARA", description: "Aryiion", year: "2020", spotifyUrl: "https://openyoutu.be/Qv3-Xj2HB4o?si=VAnx9HFM9O1unG7F" },
    { id: 5, title: "LUPAKAN AKU", description: "Aryiion", year: "2020", spotifyUrl: "https://openyoutu.be/0XEFpf8JiQ0?si=M97TPsz4rXPfBh6m" },
    { id: 6, title: "LEPASKAN", description: "Aryiion, Yung Uber, Yonnyboii", year: "2019", spotifyUrl: "https://open.spotify.com/track/5GsS2jzsPz7bHtP5iA5Lob?si=0bac5eb3f6814cc8" },
    { id: 7, title: "SEANDAINYA", description: "Aryiion", year: "2019", spotifyUrl: "https://open.spotify.com/track/6SZ0nVZU0ZOuayrz2tqBIp" },
    { id: 3, title: "TAK ADA YANG BERDUKA", description: "Aryiion, Sobat Ray", year: "2018", spotifyUrl: "https://openyoutu.be/MT6r1HWIAbE?si=tEH9sw2p74yojEd6" },
    { id: 8, title: "JATUH CINTA PADAMU", description: "Aryiion", year: "2018", spotifyUrl: "https://openyoutu.be/b9dmTf507SU?si=-mSpRs2ZC2WkXE9F" },
    { id: 9, title: "DARI MIMPI", description: "Aryiion", year: "2017", spotifyUrl: "https://openyoutu.be/y0gFGSyhrn0?si=qq30wazj9rMB7FaG" },
  ];

  const scrollToTracks = () => {
    setIsFadingOut(false);
    setShowTrackList(true);
    setTimeout(() => {
      document.getElementById('tracklist')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleBackToTop = () => {
    setIsFadingOut(true);
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setShowTrackList(false);
      setIsFadingOut(false);
    }, 300); // Match the fade-out duration
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
            backgroundImage: `url(${getHeroBg()})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background"></div>
        </div>

        {/* Hero content */}
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <div className="relative z-10 text-center animate-fade-in">
            <div className="mb-8 font-mono text-sm tracking-widest text-primary uppercase animate-pulse-glow">
              Explore
            </div>
            
            {/* Logo with TiltedCard effect */}
            <Link to="/explore" className="inline-block group">
              <TiltedCard
                imageSrc={getLogo()}
                altText="Aryiion Logo"
                captionText="Explore Aryiion's World"
                containerHeight={isMobile ? "260px" : "500px"}
                containerWidth={isMobile ? "260px" : "500px"}
                imageHeight={isMobile ? "260px" : "500px"}
                imageWidth={isMobile ? "260px" : "500px"}
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={false}
              />
            </Link>
            
            <button 
              onClick={scrollToTracks}
              className="mt-8 font-mono text-sm tracking-widest text-muted-foreground hover:text-primary uppercase transition-all duration-500 hover:scale-110 cursor-pointer group block mx-auto relative overflow-hidden will-change-transform"
              style={{ transformOrigin: 'center' }}
            >
              <span className="block group-hover:text-primary transition-colors duration-500 relative z-10">Bluetopia World</span>
              <div className="w-0 h-0.5 bg-primary mx-auto mt-1 group-hover:w-full transition-all duration-500"></div>
              <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full blur-xl"></div>
            </button>
          </div>
        </FadeContent>

        {/* Scroll indicator */}
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={500}>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 group cursor-pointer" onClick={scrollToTracks}>
            <div className="flex flex-col items-center gap-2 animate-bounce group-hover:animate-pulse">
              <div className="w-px h-12 bg-primary opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow group-hover:scale-125 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 blur-sm"></div>
            </div>
          </div>
        </FadeContent>
      </section>

      {/* Track List Section */}
      {showTrackList && (
        <section 
          id="tracklist" 
          className={`relative z-10 container mx-auto px-4 py-24 transition-all duration-300 ${
            isFadingOut 
              ? 'opacity-0 transform translate-y-4' 
              : 'opacity-100 transform translate-y-0 animate-fade-in'
          }`}
        >
          {/* Background blur effect */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm -z-10"></div>
          
          {/* Track List Content with blur effect */}
          <div className="relative z-10 backdrop-blur-sm">
            <TrackList onBackToTop={handleBackToTop} />
          </div>
        </section>
      )}

      {/* PreReleased Album Section */}
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={200}>
        <section className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-wider text-foreground mb-6">
                LATEST ALBUM
              </h2>
              
              {/* Embedded Album Player */}
              <div className="mb-8">
                <iframe 
                  src="https://open.spotify.com/embed/album/0ZNnymcJRmUMrU4YJZoYyl?utm_source=generator&theme=0" 
                  width="100%" 
                  height={isMobile ? 300 : 352}
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  className="rounded-xl shadow-2xl"
                ></iframe>
              </div>
              
              {/* Direct Link */}
              <div className="mb-8">
                <a 
                  href="https://open.spotify.com/album/0ZNnymcJRmUMrU4YJZoYyl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-background font-mono text-lg font-bold uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] group/btn relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="relative z-10">LISTEN ON SPOTIFY</span>
                </a>
              </div>
            </div>
            
          </div>
        </section>
      </FadeContent>

      {/* Journey Section */}
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={400}>
        <section className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <div className="mb-6" style={{position: 'relative', height: isMobile ? '120px' : '180px'}}>
                <TextPressure
                  text="THE JOURNEY"
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor="#ffffff"
                  strokeColor="#22c55e"
                  minFontSize={isMobile ? 36 : 70}
                />
              </div>
              <p className="font-mono text-base tracking-widest text-primary uppercase">
                Song Year To Years
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Central timeline line (hide on mobile) */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary opacity-30"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {journeyEras.map((era, index) => (
                  <div
                    key={era.id}
                    className={`relative flex items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background z-10 animate-pulse-glow"></div>
                    
                    {/* Content card */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="font-mono text-sm text-primary font-bold group-hover:scale-110 transition-transform duration-300">{era.year}</span>
                            <div className="flex-1 h-px bg-primary opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <a 
                            href={era.spotifyUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-display text-lg md:text-xl font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-all duration-300 mb-2 block hover:text-primary cursor-pointer hover:scale-105 transform"
                          >
                            {era.title}
                          </a>
                          <p className="text-muted-foreground text-sm font-mono group-hover:text-foreground transition-colors duration-300">
                            {era.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Footer */}
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={600}>
        <footer className="relative z-10 border-t border-border py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="font-mono text-xs text-muted-foreground">
              © 2025 ARYIION. ALL RIGHTS RESERVED.
            </div>
          </div>
        </footer>
      </FadeContent>
    </div>
  );
};

export default Index;
