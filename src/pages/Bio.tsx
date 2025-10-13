import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HudOverlay from "@/components/HudOverlay";

const Bio = () => {
  const [activeSection, setActiveSection] = useState("story");
  const [hoveredTimeline, setHoveredTimeline] = useState<number | null>(null);

  const journeyEras = [
    { id: 1, title: "BLUETOPIA ERA", description: "The beginning of a new chapter", year: "2025", spotifyUrl: "https://open.spotify.com/track/6SZ0nVZU0ZOuayrz2tqBIp" },
    { id: 2, title: "KENANGAN YANG HILANG", description: "Fragments of the past", year: "2023", spotifyUrl: "https://open.spotify.com/track/6SZ0nVZU0ZOuayrz2tqBIp?si=53629e57ea234389" },
    { id: 3, title: "KAU DAN BULAN", description: "Emotions in digital form", year: "2021", spotifyUrl: "https://open.spotify.com/track/0PR7gLVNIwp1plbCFTffM0?si=f9abe2c3d2134aae" },
    { id: 5, title: "LUPAKAN AKU", description: "The inception of growth", year: "2019", spotifyUrl: "https://open.spotify.com/track/0XEFpf8JiQ0?si=3hY8gKrH9G8yAtRx" },
    { id: 6, title: "LEPASKAN", description: "The inception of growth", year: "2019", spotifyUrl: "https://open.spotify.com/track/5GsS2jzsPz7bHtP5iA5Lob?si=0bac5eb3f6814cc8" },
    { id: 7, title: "SEANDAINYA", description: "The inception of growth", year: "2019", spotifyUrl: "https://open.spotify.com/track/6SZ0nVZU0ZOuayrz2tqBIp" },
    { id: 8, title: "JATUH CINTA PADAMU", description: "The inception of growth", year: "2019", spotifyUrl: "https://open.spotify.com/track/6SZ0nVZU0ZOuayrz2tqBIp" },
    { id: 9, title: "DARI MIMPI", description: "The inception of growth", year: "2019", spotifyUrl: "https://open.spotify.com/track/2MGUvZpXpPZ7YucifAmuFE?si=96cef3e00e1e46e9" },
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
              Artist Profile
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-wider mb-4">
              Bio
            </h1>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { id: "story", label: "Story" },
              { id: "timeline", label: "Timeline" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`px-8 py-4 rounded-full border-2 transition-all duration-300 font-mono text-sm uppercase tracking-wider ${
                  activeSection === tab.id
                    ? 'border-primary bg-primary text-background'
                    : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Story Section */}
          {activeSection === "story" && (
            <div className="space-y-12">
              <div className="bg-card border border-primary/30 rounded-2xl p-12 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-6xl">🎭</span>
                </div>
                <h2 className="font-display text-4xl font-bold uppercase tracking-wider mb-6">
                  The Artist Behind the Music
                </h2>
                <p className="font-mono text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Aryiion is an emerging artist from Indonesia, born in 2005, blending the soulful touch of R&B, the raw flow of Modern Rap, and the emotional depth of Slow Rock.
                His sound moves between smooth melodies and heartfelt lyricism, creating music that speaks to love, struggle, and self-reflection. From his beginnings on Aryiion.
                Aryiion has built a loyal following through his honest storytelling and authentic vibe. With his unique voice and cinematic production style, he delivers tracks
                that feel both intimate and timeless. Now, Aryiion is gearing up for his upcoming album, dropping on October 26, 2025 a project that showcases his growth, emotion,
                and artistic evolution. This relese marks a new chapter for Aryiion as he continues shaping his sound and making his mark on the next wave of Indonesian music.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-2xl p-8 group hover:border-primary transition-all duration-300">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider mb-4 group-hover:text-primary transition-colors">
                    Creative Philosophy
                  </h3>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                    "Music is the bridge between the digital and the organic. Every sound tells a story, 
                    every rhythm carries emotion, and every composition is a journey through the depths 
                    of human experience."
                  </p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8 group hover:border-primary transition-all duration-300">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider mb-4 group-hover:text-primary transition-colors">
                    Visual Identity
                  </h3>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                    "The visual element is as important as the audio. Each track is accompanied by 
                    carefully crafted visuals that enhance the emotional impact and create a complete 
                    sensory experience."
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Timeline Section */}
          {activeSection === "timeline" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="font-display text-4xl font-bold uppercase tracking-wider mb-4">
                  Musical Journey
                </h2>
                <p className="font-mono text-muted-foreground">
                  A timeline of key moments in Aryiion's artistic evolution
                </p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary opacity-30"></div>
                
                {journeyEras.map((era, index) => (
                  <div
                    key={era.id}
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background z-10 animate-pulse-glow"></div>
                    
                    {/* Content card */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
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
                            className="font-display text-xl font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-all duration-300 mb-2 block hover:text-primary cursor-pointer hover:scale-105 transform"
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
          )}

        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="font-mono text-xs text-muted-foreground">
            © 2025 ARYIION. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Bio;
