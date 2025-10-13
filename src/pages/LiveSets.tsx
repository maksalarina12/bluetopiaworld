import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HudOverlay from "@/components/HudOverlay";

const LiveSets = () => {
  const [selectedSet, setSelectedSet] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  const liveSets = [
    {
      id: 1,
      title: "Bluetopia World Tour - Jakarta",
      date: "2025-01-15",
      venue: "Jakarta Convention Center",
      duration: "2:15:30",
      description: "Opening night of the Bluetopia World Tour featuring the complete new album plus fan favorites",
      tracks: 18,
      audience: "5,000",
      energy: 95
    },
    {
      id: 2,
      title: "Electronic Dreams Live",
      date: "2024-12-08",
      venue: "Bandung Electronic Festival",
      duration: "1:45:20",
      description: "Special performance at the Electronic Dreams Festival with exclusive remixes and unreleased tracks",
      tracks: 14,
      audience: "3,500",
      energy: 92
    },
    {
      id: 3,
      title: "Underground Sessions",
      date: "2024-11-22",
      venue: "Warehouse 28",
      duration: "3:30:45",
      description: "Intimate underground performance with experimental sounds and extended improvisations",
      tracks: 22,
      audience: "800",
      energy: 88
    },
    {
      id: 4,
      title: "Festival Circuit Finale",
      date: "2024-10-30",
      venue: "Surabaya Music Festival",
      duration: "1:30:15",
      description: "Closing performance of the festival season with high-energy set and crowd interaction",
      tracks: 12,
      audience: "8,000",
      energy: 98
    },
    {
      id: 5,
      title: "Studio Live Stream",
      date: "2024-09-14",
      venue: "Aryiion Studio",
      duration: "2:00:00",
      description: "Exclusive live stream from the studio with behind-the-scenes insights and Q&A session",
      tracks: 16,
      audience: "2,500",
      energy: 85
    },
    {
      id: 6,
      title: "Collaboration Night",
      date: "2024-08-18",
      venue: "Music Lab Jakarta",
      duration: "2:45:30",
      description: "Special collaborative performance with local artists and surprise guest appearances",
      tracks: 20,
      audience: "1,200",
      energy: 90
    }
  ];

  // Waveform Visualizer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawWaveform = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (isPlaying) {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, 'rgba(34, 197, 94, 0.8)');
        gradient.addColorStop(0.5, 'rgba(34, 197, 94, 1)');
        gradient.addColorStop(1, 'rgba(34, 197, 94, 0.8)');
        
        ctx.fillStyle = gradient;
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        
        const centerY = canvas.height / 2;
        const amplitude = canvas.height * 0.3;
        
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 2) {
          const frequency = 0.02;
          const wave1 = Math.sin(x * frequency) * amplitude;
          const wave2 = Math.sin(x * frequency * 2) * amplitude * 0.5;
          const wave3 = Math.sin(x * frequency * 0.5) * amplitude * 0.3;
          const y = centerY + wave1 + wave2 + wave3;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
        
        // Add frequency bars
        for (let i = 0; i < 32; i++) {
          const barWidth = canvas.width / 32;
          const barHeight = Math.random() * canvas.height * 0.4;
          const x = i * barWidth;
          const y = canvas.height - barHeight;
          
          ctx.fillRect(x, y, barWidth - 2, barHeight);
        }
      }
      
      animationRef.current = requestAnimationFrame(drawWaveform);
    };

    drawWaveform();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HudOverlay />
      
      <div className="pt-32 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="font-mono text-sm tracking-widest text-primary uppercase mb-4 animate-pulse-glow">
              Live Experience
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-wider mb-4">
              Live Sets
            </h1>
            <Link to="/" className="inline-block mt-4 font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
              ← Back to Home
            </Link>
          </div>

          {/* Waveform Visualizer */}
          <div className="mb-16">
            <div className="relative bg-black/50 rounded-2xl p-8 border border-primary/30 overflow-hidden">
              <canvas
                ref={canvasRef}
                width={800}
                height={200}
                className="w-full h-48 rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Live Sets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {liveSets.map((set, index) => (
              <div
                key={set.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:scale-105 transform cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedSet(set.id)}
              >
                {/* Set Header */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">🎧</span>
                    </div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-wider group-hover:text-primary transition-colors">
                      {set.title}
                    </h3>
                  </div>
                  
                  {/* Energy Level */}
                  <div className="absolute top-4 right-4 bg-primary/90 text-background px-3 py-1 rounded-full font-mono text-xs">
                    {set.energy}% Energy
                  </div>
                </div>

                {/* Set Info */}
                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-mono text-muted-foreground">Date</span>
                      <span className="font-mono">{set.date}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-mono text-muted-foreground">Venue</span>
                      <span className="font-mono">{set.venue}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-mono text-muted-foreground">Duration</span>
                      <span className="font-mono">{set.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-mono text-muted-foreground">Tracks</span>
                      <span className="font-mono">{set.tracks}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-mono text-muted-foreground">Audience</span>
                      <span className="font-mono">{set.audience}</span>
                    </div>
                  </div>
                  
                  <p className="font-mono text-xs text-muted-foreground line-clamp-2">
                    {set.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Live Set Modal */}
          {selectedSet && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <div className="bg-card border border-primary rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider">
                    {liveSets.find(s => s.id === selectedSet)?.title}
                  </h3>
                  <button
                    onClick={() => setSelectedSet(null)}
                    className="w-8 h-8 rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
                
                {/* Player Section */}
                <div className="bg-black rounded-2xl p-8 mb-6">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <span className="text-4xl">🎵</span>
                      </div>
                      <p className="font-mono text-sm text-muted-foreground">
                        Live audio player would be embedded here
                      </p>
                    </div>
                  </div>
                  
                  {/* Player Controls */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-4">
                      <button 
                        onClick={togglePlay}
                        className="w-12 h-12 rounded-full bg-primary text-background hover:scale-110 transition-all duration-300 flex items-center justify-center text-xl"
                      >
                        {isPlaying ? '⏸' : '▶'}
                      </button>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono text-muted-foreground">
                        <span>{formatTime(currentTime)}</span>
                        <span>{liveSets.find(s => s.id === selectedSet)?.duration}</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all duration-300"
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Set Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-display text-lg font-bold uppercase tracking-wider mb-3">Performance Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-mono text-muted-foreground">Date:</span>
                        <span className="font-mono">{liveSets.find(s => s.id === selectedSet)?.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-mono text-muted-foreground">Venue:</span>
                        <span className="font-mono">{liveSets.find(s => s.id === selectedSet)?.venue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-mono text-muted-foreground">Duration:</span>
                        <span className="font-mono">{liveSets.find(s => s.id === selectedSet)?.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-mono text-muted-foreground">Tracks:</span>
                        <span className="font-mono">{liveSets.find(s => s.id === selectedSet)?.tracks}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-mono text-muted-foreground">Audience:</span>
                        <span className="font-mono">{liveSets.find(s => s.id === selectedSet)?.audience}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-display text-lg font-bold uppercase tracking-wider mb-3">Description</h4>
                    <p className="font-mono text-sm text-muted-foreground">
                      {liveSets.find(s => s.id === selectedSet)?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-card border border-primary/30 rounded-2xl p-8 text-center group hover:border-primary transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <div className="font-mono text-sm text-muted-foreground uppercase tracking-wider">Live Sets</div>
            </div>
            
            <div className="bg-card border border-primary/30 rounded-2xl p-8 text-center group hover:border-primary transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">21K</div>
              <div className="font-mono text-sm text-muted-foreground uppercase tracking-wider">Total Audience</div>
            </div>
            
            <div className="bg-card border border-primary/30 rounded-2xl p-8 text-center group hover:border-primary transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">102</div>
              <div className="font-mono text-sm text-muted-foreground uppercase tracking-wider">Tracks Played</div>
            </div>
            
            <div className="bg-card border border-primary/30 rounded-2xl p-8 text-center group hover:border-primary transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">91%</div>
              <div className="font-mono text-sm text-muted-foreground uppercase tracking-wider">Avg Energy</div>
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

export default LiveSets;
