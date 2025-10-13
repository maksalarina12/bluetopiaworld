import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HudOverlay from "@/components/HudOverlay";

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const videos = [
    {
      id: 1,
      title: "Bluetopia - Official Music Video",
      duration: "3:45",
      thumbnail: "/src/assets/aryiion-logo.png",
      views: "1.2M",
      date: "2025",
      category: "Music Video",
      description: "The official music video for Bluetopia, featuring stunning visuals and atmospheric cinematography."
    },
    {
      id: 2,
      title: "Behind the Scenes - Studio Session",
      duration: "8:32",
      thumbnail: "/src/assets/aryiion-logo.png",
      views: "456K",
      date: "2024",
      category: "Behind the Scenes",
      description: "Exclusive look at the creative process behind Aryiion's latest tracks."
    },
    {
      id: 3,
      title: "Live Performance - Electronic Dreams",
      duration: "12:15",
      thumbnail: "/src/assets/aryiion-logo.png",
      views: "789K",
      date: "2024",
      category: "Live Performance",
      description: "Captivating live rendition of Electronic Dreams with full visual production."
    },
    {
      id: 4,
      title: "Interview - The Creative Process",
      duration: "15:42",
      thumbnail: "/src/assets/aryiion-logo.png",
      views: "234K",
      date: "2024",
      category: "Interview",
      description: "Deep dive into Aryiion's creative philosophy and musical journey."
    },
    {
      id: 5,
      title: "Visual Art - Digital Dreams",
      duration: "5:18",
      thumbnail: "/src/assets/aryiion-logo.png",
      views: "567K",
      date: "2024",
      category: "Visual Art",
      description: "Abstract visual journey through digital landscapes and electronic soundscapes."
    },
    {
      id: 6,
      title: "Tutorial - Music Production",
      duration: "22:30",
      thumbnail: "/src/assets/aryiion-logo.png",
      views: "123K",
      date: "2024",
      category: "Tutorial",
      description: "Step-by-step guide to creating electronic music with Aryiion's techniques."
    },
    {
      id: 7,
      title: "Concert Highlights - World Tour",
      duration: "18:45",
      thumbnail: "/src/assets/aryiion-logo.png",
      views: "2.1M",
      date: "2024",
      category: "Concert",
      description: "Best moments from Aryiion's international tour performances."
    },
    {
      id: 8,
      title: "Collaboration - Artist Feature",
      duration: "6:52",
      thumbnail: "/src/assets/aryiion-logo.png",
      views: "345K",
      date: "2024",
      category: "Collaboration",
      description: "Special collaboration with emerging artists in the electronic music scene."
    }
  ];

  const categories = ["All", "Music Video", "Behind the Scenes", "Live Performance", "Interview", "Visual Art", "Tutorial", "Concert", "Collaboration"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVideos = activeCategory === "All" 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HudOverlay />
      
      <div className="pt-32 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="font-mono text-sm tracking-widest text-primary uppercase mb-4 animate-pulse-glow">
              Visual Experience
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-wider mb-4">
              Videos
            </h1>
            <Link to="/" className="inline-block mt-4 font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
              ← Back to Home
            </Link>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-mono text-sm uppercase tracking-wider ${
                  activeCategory === category
                    ? 'border-primary bg-primary text-background'
                    : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {filteredVideos.map((video, index) => (
              <div
                key={video.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:scale-105 transform cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedVideo(video.id)}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center text-2xl">
                      ▶
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded font-mono text-xs">
                    {video.duration}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-primary/90 text-background px-3 py-1 rounded-full font-mono text-xs uppercase">
                    {video.category}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wider mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <span className="font-mono">{video.views} views</span>
                    <span className="font-mono">{video.date}</span>
                  </div>
                  
                  <p className="font-mono text-xs text-muted-foreground line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Video Modal */}
          {selectedVideo && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <div className="bg-card border border-primary rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider">
                    {videos.find(v => v.id === selectedVideo)?.title}
                  </h3>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="w-8 h-8 rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
                
                <div className="aspect-video bg-black rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-4xl">🎬</span>
                    </div>
                    <p className="font-mono text-sm text-muted-foreground">
                      Video player would be embedded here
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="font-mono text-muted-foreground">
                      {videos.find(v => v.id === selectedVideo)?.views} views
                    </span>
                    <span className="font-mono text-muted-foreground">
                      {videos.find(v => v.id === selectedVideo)?.date}
                    </span>
                    <span className="font-mono text-muted-foreground">
                      {videos.find(v => v.id === selectedVideo)?.duration}
                    </span>
                  </div>
                  
                  <p className="font-mono text-sm text-muted-foreground">
                    {videos.find(v => v.id === selectedVideo)?.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card border border-primary/30 rounded-2xl p-8 text-center group hover:border-primary transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <div className="font-mono text-sm text-muted-foreground uppercase tracking-wider">Total Videos</div>
            </div>
            
            <div className="bg-card border border-primary/30 rounded-2xl p-8 text-center group hover:border-primary transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">5.2M</div>
              <div className="font-mono text-sm text-muted-foreground uppercase tracking-wider">Total Views</div>
            </div>
            
            <div className="bg-card border border-primary/30 rounded-2xl p-8 text-center group hover:border-primary transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">2.1M</div>
              <div className="font-mono text-sm text-muted-foreground uppercase tracking-wider">Most Viewed</div>
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

export default Videos;
