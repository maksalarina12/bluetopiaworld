import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HudOverlay from "@/components/HudOverlay";
import kenanganhilangslow from "@/assets/kenanganhilangslow.jpg";
import aryiionLogo from "@/assets/aryiion-logo.png";
import { useIsMobile } from "@/hooks/use-mobile";

// Image functions
const getKenanganhilangslow = () => kenanganhilangslow;
const getAryiionLogo = () => aryiionLogo;

const Videos = () => {
  const isMobile = useIsMobile();
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getYouTubeEmbedUrl = (url: string): string => {
    try {
      // Handle youtu.be short links, watch?v=, and full URLs with params
      const u = new URL(url);
      let videoId = '';
      
      if (u.hostname.includes('youtu.be')) {
        videoId = u.pathname.replace('/', '');
      } else if (u.searchParams.get('v')) {
        videoId = u.searchParams.get('v') as string;
      } else if (u.pathname.startsWith('/embed/')) {
        // Already an embed URL, return as is
        return url;
      } else {
        // Fallback to original
        return url;
      }
      
      // Create embed URL with parameters to allow playback without login
      const embedParams = new URLSearchParams({
        'autoplay': '0',
        'mute': '0',
        'controls': '1',
        'showinfo': '0',
        'rel': '0',
        'modestbranding': '1',
        'iv_load_policy': '3',
        'fs': '1',
        'cc_load_policy': '0',
        'start': '0',
        'end': '',
        'vq': 'auto',
        'origin': window.location.origin
      });
      
      return `https://www.youtube.com/embed/${videoId}?${embedParams.toString()}`;
    } catch {
      return url;
    }
  };


  const videos = [
    {
      id: 1,
      title: "Aryiion - CINDERELLA",
      thumbnail: getKenanganhilangslow(),
      youtubeUrl: "https://youtu.be/5IiAqc-RdUA", // Direct YouTube link - ganti dengan link YouTube Anda
    },
    {
      id: 2,
      title: "Aryiion - I WANT IT ALL Ft. FADHIL",
      thumbnail: getAryiionLogo(),
      youtubeUrl: "https://youtu.be/4ZVOQNcFNzI", // Direct YouTube link - ganti dengan lin
    },
    {
      id: 3,
      title: "Aryiion - CINDERELLA",
      thumbnail: getAryiionLogo(),
      youtubeUrl: "https://youtu.be/CZvI_0L7MmA", // Direct YouTube link - ganti dengan link YouT
    },
    {
      id: 4,
      title: "Aryiion - BEHIND Ft. Lil-Khai, Yung Uber",
      thumbnail: getAryiionLogo(),
      youtubeUrl: "https://youtu.be/f0LBtzOVZWo", // Direct YouTube link - ganti dengan link YouTube Anda
    },
    {
      id: 5,
      title: "Aryiion - PERCAYA",
      thumbnail: getAryiionLogo(),
      youtubeUrl: "https://youtu.be/IpSUPF_PDj4", // Direct YouTube link - ganti dengan link YouTub
    },
    {
      id: 6,
      title: "Aryiion - Kenangan Yang Hilang (Slowed Version)",
      thumbnail: getAryiionLogo(),
      youtubeUrl: "https://youtu.be/ez8v-GV-_g0", // Direct YouTube link - ganti dengan link YouTube Anda
    },
    {
      id: 7,
      title: "Aryiion - Kau Dan Bulan (Speed Up Ver)",
      thumbnail: getAryiionLogo(),
      youtubeUrl: "https://youtu.be/V4NP82WJDdE?si=5v1cmxyZMCDT5uQI", // Direct YouTube link - ganti dengan link YouTube Anda

    },
    {
      id: 8,
      title: "Aryiion - Kenangan Yang Hilang (Music Video)",
      thumbnail: getAryiionLogo(),
      youtubeUrl: "https://youtu.be/xEtDFvRf-vQ?si=2WZY7ivNlUsODwzp", // Direct YouTube link - ganti dengan link YouTube Anda
    },
    {
      id: 9,
      title: "Aryiion - Ego Ft. Yung Uber (Official Lyrics Video)",
      thumbnail: getAryiionLogo(),
      youtubeUrl: "https://youtu.be/Fk8eAOfkaGg?si=G8rczdogb59jjqJi", // Direct YouTube link - ganti dengan link YouTube Anda

    },
    {
      id: 10,
      title: "Aryiion - AKU BUKAN KAMU Ft. Sobat Ray",
      thumbnail: getAryiionLogo(),
      youtubeUrl: "https://youtu.be/IRVuo5idp0U?si=ATBe2A1WFgHery8U", // Direct YouTube link - ganti dengan link YouTube Anda

    },
    {
      id: 11,
      title: "Aryiion - Kau Dan Bulan (Official Music Video)",
      thumbnail: getAryiionLogo(),
      youtubeUrl: "https://youtu.be/yWM57Ky_3RQ?si=RSd-sEGzDMu7TDOw", // Direct YouTube link - ganti dengan link YouTube Anda

    },
    {
      id: 12,
      title: "Aryiion - Seandainya (Official Lyric Video) (Prod By Giant Beat)",
      thumbnail: getAryiionLogo(),
      youtubeUrl: "https://youtu.be/0Ljf4b6FuSw?si=6GLgOlEEb1f-joid", // Direct YouTube link - ganti dengan link YouTube Anda

    },
    {
      id: 13,
      title: "Aryiion - Jatuh cinta padamu (audio)",
      thumbnail: getAryiionLogo(),
      youtubeUrl: "https://youtu.be/b9dmTf507SU?si=umETy4bpNV-OC32s", // Direct YouTube link - ganti dengan link YouTube Anda

    },
    {
      id: 14,
      title: "Aryiion - Dari mimpi (audio)",
      thumbnail: getAryiionLogo(),
      youtubeUrl: "https://youtu.be/y0gFGSyhrn0", // Direct YouTube link - ganti dengan link YouTube Anda

    },
    {
      id: 15,
      title: "HEILNUAN - Ku hanya ingin tau Ft. Aryiion (Official Lyric Video)(Prod RX808)",
      thumbnail: getAryiionLogo(),
      youtubeUrl: "https://youtu.be/CQvSdD1BJ1I", // Direct YouTube link - ganti dengan link YouTube Anda

    },
    {
      id: 16,
      title: "Aryiion - Putri Ft. pink (Official Lyric Video)",
      thumbnail: getAryiionLogo(),
      youtubeUrl: "https://youtu.be/3pY1GVy6OGU", // Direct YouTube link - ganti dengan link YouTube Anda

    },
    {
      id: 17,
      title: "Aryiion - Pengembara [Official Music Video]",
      thumbnail: getAryiionLogo(),
      youtubeUrl: "https://youtu.be/Qv3-Xj2HB4o", // Direct YouTube link - ganti dengan link YouTube Anda

    },
    {
      id: 18,
      title: "Aryiion - Lupakan Aku {Official Lyrics Video}(PROD BEATS BY CON)",
      thumbnail: getAryiionLogo(),
      youtubeUrl: "https://youtu.be/0XEFpf8JiQ0", // Direct YouTube link - ganti dengan link YouTube Anda

    },
    {
      id: 19,
      title: "Aryiion - lepaskan Ft Yung Uber (official lyric video)(PROD BEATS BY CON)",
      thumbnail: getAryiionLogo(),
      youtubeUrl: "https://youtu.be/bbWTk4Z54h0", // Direct YouTube link - ganti dengan link YouTube Anda

    },
    {
      id: 20,
      title: "Sobat Ray - Tak Ada Yang Berduka ft. Aryiion ( PROD BY BOYFIFTY )",
      thumbnail: getAryiionLogo(),
      youtubeUrl: "https://youtu.be/MT6r1HWIAbE", // Direct YouTube link - ganti dengan link YouTube Anda

    },
  ];


  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HudOverlay />
      
      <div className="pt-28 md:pt-32 px-4 py-10 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <div className="font-mono text-xs md:text-sm tracking-widest text-primary uppercase mb-3 md:mb-4 animate-pulse-glow">
              Visual Experience
            </div>
            <h1 className="font-display text-4xl md:text-8xl font-bold uppercase tracking-wider mb-4">
              Videos
            </h1>
          </div>


          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 mb-12 md:mb-16">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="group bg-card border-2 border-primary/40 rounded-2xl overflow-hidden hover:border-primary transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.35)] hover:scale-[1.01] md:hover:scale-[1.02] transform relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Inline YouTube Embed (like AllSongs) */}
                <div className="relative aspect-video bg-black overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={getYouTubeEmbedUrl(video.youtubeUrl)}
                    title={`${video.title} - YouTube`}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="w-full h-full"
                    sandbox="allow-scripts allow-same-origin allow-presentation allow-forms"
                  ></iframe>
                </div>

                {/* Video Info */}
                <div className="p-5 md:p-6">
                  <h3 className="font-display text-base md:text-lg font-bold uppercase tracking-wider mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  
                  <div className="h-2"></div>
                  
                  {/* YouTube Direct Link Button */}
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary text-primary hover:text-primary px-3 md:px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105"
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
          {/* No modal needed; embedded inline like AllSongs */}

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

export default Videos;
