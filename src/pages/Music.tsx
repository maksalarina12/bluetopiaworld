import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { allSongs } from "@/data/songs";
import Navigation from "@/components/Navigation";
import HudOverlay from "@/components/HudOverlay";
import FadeContent from "@/components/FadeContent";
import Noise from "@/components/Noise";

const Music = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  const tracks = [
    {
      id: 1,
      title: "CINDERELLA",
      artist: "Aryiion",
      duration: "3:45",
      cover: "/src/assets/aryiion-logo.png",
      audio: "https://open.spotify.com/embed/track/6SZ0nVZU0ZOuayrz2tqBIp?utm_source=generator"
    },
    {
      id: 2,
      title: "I WANT IT ALL",
      artist: "Aryiion Ft. FADHIL",
      duration: "4:12",
      cover: "/src/assets/aryiion-logo.png",
      audio: ""
    },
    {
      id: 3,
      title: "TEDUH",
      artist: "Aryiion",
      duration: "3:28",
      cover: "/src/assets/aryiion-logo.png",
      audio: ""
    },
    {
      id: 4,
      title: "BEHIND",
      artist: "Aryiion Ft. Lil-Khai, Yung Uber",
      duration: "4:05",
      cover: "/src/assets/aryiion-logo.png",
      audio: "https://open.spotify.com/embed/track/0XEFpf8JiQ0"
    },
    {
      id: 5,
      title: "PERCAYA",
      artist: "Aryiion",
      duration: "3:52",
      cover: "/src/assets/aryiion-logo.png",
      audio: "https://open.spotify.com/embed/track/5GsS2jzsPz7bHtP5iA5Lob"
    },
  ];

  // Song list for external links (not part of the main player queue)
  const songList = allSongs;

  // Audio Visualizer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawVisualizer = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (isPlaying) {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'rgba(34, 197, 94, 0.8)');
        gradient.addColorStop(1, 'rgba(34, 197, 94, 0.2)');
        
        ctx.fillStyle = gradient;
        
        for (let i = 0; i < 32; i++) {
          const barHeight = Math.random() * canvas.height * 0.8;
          const x = (canvas.width / 32) * i;
          const y = canvas.height - barHeight;
          
          ctx.fillRect(x, y, canvas.width / 32 - 2, barHeight);
        }
      }
      
      animationRef.current = requestAnimationFrame(drawVisualizer);
    };

    drawVisualizer();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <HudOverlay />
      
      <div className="pt-32 px-4 py-12 flex-1">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className="text-center mb-16 animate-fade-in">
              <div className="font-mono text-sm tracking-widest text-primary uppercase mb-4 animate-pulse-glow">
                Audio Experience
              </div>
              <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-wider mb-4">
                Music
              </h1>
            </div>
          </FadeContent>

          {/* Audio Visualizer with Bluetopia Image */}
          <FadeContent blur={true} duration={1200} easing="ease-out" initialOpacity={0} delay={200}>
            <div className="mb-16">
              <div className="relative rounded-2xl border border-primary/30 overflow-hidden">
                <img 
                  src="/src/assets/bluetopia.jpg" 
                  alt="Bluetopia" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none"></div>
                {/* Noise Effect on border */}
                <div className="absolute inset-0 pointer-events-none">
                  <Noise
                    patternSize={250}
                    patternScaleX={1}
                    patternScaleY={1}
                    patternRefreshInterval={2}
                    patternAlpha={15}
                  />
                </div>
                <canvas
                  ref={canvasRef}
                  width={800}
                  height={200}
                  className="absolute inset-0 w-full h-full rounded-lg"
                />
              </div>
            </div>
          </FadeContent>

          {/* Main Player */}
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={400}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              {/* Album Art & Spotify Link */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-primary/30 rounded-2xl p-8 text-center group hover:border-primary transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                  <div className="relative mb-8">
                    <div className="relative w-64 h-64 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <img 
                        src="/src/assets/bluetopia.jpg" 
                        alt="Bluetopia Album"
                        className="w-full h-full object-cover"
                      />
                      {/* Noise Effect only on album art */}
                      <div className="absolute inset-0 pointer-events-none">
                        <Noise
                          patternSize={250}
                          patternScaleX={1}
                          patternScaleY={1}
                          patternRefreshInterval={2}
                          patternAlpha={15}
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">
                    Bluetopia
                  </h3>
                  <p className="font-mono text-sm text-muted-foreground mb-6">
                    Aryiion
                  </p>
                  
                  {/* Spotify Link */}
                  <a 
                    href="https://open.spotify.com/artist/your-artist-id" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-background px-6 py-3 rounded-lg font-mono text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                  >
                    View on Spotify
                  </a>
                </div>
              </div>

              {/* Track List */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {tracks.map((track, index) => (
                    <div
                      key={`player-${track.id}`}
                      className={`group bg-card border rounded-lg p-4 cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] ${
                        index === currentTrack 
                          ? 'border-primary bg-primary/10' 
                          : 'border-border'
                      }`}
                      onClick={() => setCurrentTrack(index)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 border border-primary rounded-lg flex items-center justify-center">
                          <span className="font-mono text-sm font-bold text-primary">
                            {index + 1}
                          </span>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-display text-lg font-bold uppercase tracking-wider group-hover:text-primary transition-colors">
                            {track.title}
                          </h4>
                          <p className="font-mono text-sm text-muted-foreground">
                            {track.artist}
                          </p>
                        </div>
                        
                        <div className="text-right">
                          <span className="font-mono text-sm text-muted-foreground">
                            {track.duration}
                          </span>
                          {index === currentTrack && (
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse mt-1 mx-auto"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeContent>

          {/* Spotify Integration */}
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={600}>
            <div className="bg-card border border-primary/30 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-center mb-6">
                Stream on Spotify
              </h3>
              <div className="max-w-2xl mx-auto">
                <iframe 
                  src={tracks[currentTrack].audio}
                  width="100%" 
                  height="152" 
                  frameBorder="0" 
                  allowTransparency={true} 
                  allow="encrypted-media"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </FadeContent>
          <div className="text-center mt-4">
            <Link
              to="/all-songs"
              className="font-mono text-xs md:text-sm tracking-widest uppercase text-primary hover:text-primary/80 underline underline-offset-4"
            >
              View all songs →
            </Link>
          </div>
          {/* Removed extra Track List card as requested */}
        </div>
      </div>

      {/* Footer */}
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={800}>
      <footer className="relative z-10 border-t border-border py-8 mt-auto">
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

export default Music;
