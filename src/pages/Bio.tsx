import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HudOverlay from "@/components/HudOverlay";

const Bio = () => {
  const [activeSection, setActiveSection] = useState("story");
  const [hoveredTimeline, setHoveredTimeline] = useState<number | null>(null);

  const timeline = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Started the musical journey with first electronic experiments",
      achievements: ["First Track Released", "Studio Setup", "Sound Discovery"]
    },
    {
      year: "2021",
      title: "Digital Evolution",
      description: "Explored new soundscapes and digital production techniques",
      achievements: ["Kau Dan Bulan", "Sound Design", "Visual Integration"]
    },
    {
      year: "2023",
      title: "Creative Breakthrough",
      description: "Developed signature sound and visual identity",
      achievements: ["Kenangan Yang Hilang", "Live Performances", "Fan Base Growth"]
    },
    {
      year: "2025",
      title: "Bluetopia Era",
      description: "Entering a new chapter with expanded creative vision",
      achievements: ["Bluetopia Release", "World Tour", "Collaborations"]
    }
  ];

  const stats = [
    { label: "Tracks Released", value: "12", icon: "🎵" },
    { label: "Years Active", value: "6", icon: "⏰" },
    { label: "Live Performances", value: "50+", icon: "🎤" },
    { label: "Countries Visited", value: "15", icon: "🌍" },
    { label: "Collaborations", value: "8", icon: "🤝" },
    { label: "Awards Won", value: "3", icon: "🏆" }
  ];

  const influences = [
    { name: "Aphex Twin", genre: "Ambient Electronic", impact: "Sound Design" },
    { name: "Boards of Canada", genre: "IDM", impact: "Atmospheric Production" },
    { name: "Burial", genre: "Future Garage", impact: "Rhythmic Innovation" },
    { name: "Oneohtrix Point Never", genre: "Experimental", impact: "Sonic Exploration" },
    { name: "Tim Hecker", genre: "Ambient", impact: "Textural Soundscapes" }
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
            <Link to="/" className="inline-block mt-4 font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
              ← Back to Home
            </Link>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { id: "story", label: "Story" },
              { id: "timeline", label: "Timeline" },
              { id: "influences", label: "Influences" },
              { id: "stats", label: "Statistics" }
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
                  Aryiion is an electronic music producer and visual artist who creates immersive soundscapes 
                  that blend ambient textures with rhythmic complexity. Born from a fascination with digital 
                  sound manipulation and visual storytelling, Aryiion's work explores the intersection of 
                  technology and human emotion.
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
                
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    onMouseEnter={() => setHoveredTimeline(index)}
                    onMouseLeave={() => setHoveredTimeline(null)}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-2 border-background z-10 animate-pulse-glow"></div>
                    
                    {/* Content Card */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <div className={`bg-card border rounded-2xl p-8 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] group ${
                        hoveredTimeline === index ? 'border-primary' : 'border-border hover:border-primary'
                      }`}>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="font-mono text-2xl font-bold text-primary">{item.year}</span>
                          <div className="flex-1 h-px bg-primary opacity-30"></div>
                        </div>
                        
                        <h3 className="font-display text-2xl font-bold uppercase tracking-wider mb-3 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        
                        <p className="font-mono text-sm text-muted-foreground mb-4">
                          {item.description}
                        </p>
                        
                        <div className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="font-mono text-xs text-muted-foreground">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Influences Section */}
          {activeSection === "influences" && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="font-display text-4xl font-bold uppercase tracking-wider mb-4">
                  Musical Influences
                </h2>
                <p className="font-mono text-muted-foreground">
                  Artists and sounds that have shaped Aryiion's creative vision
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {influences.map((influence, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-2xl p-6 group hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h3 className="font-display text-xl font-bold uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">
                      {influence.name}
                    </h3>
                    <p className="font-mono text-sm text-primary mb-2">{influence.genre}</p>
                    <p className="font-mono text-xs text-muted-foreground">{influence.impact}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stats Section */}
          {activeSection === "stats" && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="font-display text-4xl font-bold uppercase tracking-wider mb-4">
                  Career Statistics
                </h2>
                <p className="font-mono text-muted-foreground">
                  Numbers that tell the story of Aryiion's musical journey
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-card border border-primary/30 rounded-2xl p-8 text-center group hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="font-mono text-sm text-muted-foreground uppercase tracking-wider">
                      {stat.label}
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
          <div className="font-mono text-sm text-muted-foreground">
            © 2025 ARYIION. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Bio;
