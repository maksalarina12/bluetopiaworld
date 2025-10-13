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
      title: "Kenangan Yang Hilang - Slowed Ver",
      duration: "3:45",
      thumbnail: "/src/assets/kenanganhilangslow.jpg",
      youtubeUrl: "https://youtu.be/ez8v-GV-_g0?si=WQTeM7b4G1ZIZTVr", // Direct YouTube link - ganti dengan link YouTube Anda
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
      youtubeUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw", // Direct YouTube link - ganti dengan link YouTube Anda
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
      youtubeUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE", // Direct YouTube link - ganti dengan link YouTube Anda
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
      youtubeUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0", // Direct YouTube link - ganti dengan link YouTube Anda
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
      youtubeUrl: "https://www.youtube.com/watch?v=kJQP7kiw5Fk", // Direct YouTube link - ganti dengan link YouTube Anda
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
      youtubeUrl: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ", // Direct YouTube link - ganti dengan link YouTube Anda
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
      youtubeUrl: "https://www.youtube.com/watch?v=L_jWHffIx5E", // Direct YouTube link - ganti dengan link YouTube Anda
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
      youtubeUrl: "https://www.youtube.com/watch?v=YQHsXMglC9A", // Direct YouTube link - ganti dengan link YouTube Anda
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
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:scale-105 transform cursor-pointer relative"
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
                    <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300">
                      ▶
                    </div>
                  </div>
                  
                  {/* YouTube Play Button Overlay */}
                  <div className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300">
                    YouTube
                  </div>
                  
                  {/* Thumbnail Quality Indicator */}
                  <div className="absolute top-4 left-4 bg-black/60 text-white px-2 py-1 rounded text-xs font-mono opacity-0 group-hover:opacity-100 transition-all duration-300">
                    HD
                  </div>
                  
                  {/* YouTube Logo */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  
                  {/* Hover Preview Tooltip */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                    <div className="bg-black/90 text-white p-3 rounded-lg shadow-2xl max-w-xs">
                      <div className="text-center">
                        <p className="font-mono text-xs text-primary mb-1">YouTube Preview</p>
                        <p className="font-display text-sm font-bold uppercase tracking-wider line-clamp-2">
                          {video.title}
                        </p>
                        <p className="font-mono text-xs text-muted-foreground mt-1">
                          Click to watch embedded or open on YouTube
                        </p>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                    </div>
                  </div>
                  
                  {/* Large Preview on Hover */}
                  <div className="absolute -top-4 -left-4 w-80 h-45 bg-black/95 rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <p className="font-mono text-xs">Video Preview</p>
                      </div>
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
                  
                  <p className="font-mono text-xs text-muted-foreground line-clamp-2 mb-4">
                    {video.description}
                  </p>
                  
                  {/* YouTube Direct Link Button */}
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary text-primary hover:text-primary px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Watch on YouTube
                  </a>
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
                    <img 
                      src={videos.find(v => v.id === selectedVideo)?.thumbnail} 
                      alt={videos.find(v => v.id === selectedVideo)?.title}
                      className="w-full h-full object-cover rounded-lg mb-4"
                    />
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-4xl">🎬</span>
                    </div>
                    <p className="font-mono text-sm text-muted-foreground mb-4">
                      Video player would be embedded here
                    </p>
                    <a
                      href={videos.find(v => v.id === selectedVideo)?.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary text-primary hover:text-primary px-6 py-3 rounded-lg font-mono text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      Watch on YouTube
                    </a>
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

export default Videos;
