import React from 'react';

interface Track {
  id: number;
  title: string;
  artist: string;
  features?: string;
  url?: string;
}

interface TrackListProps {
  onBackToTop: () => void;
}

const TrackList: React.FC<TrackListProps> = ({ onBackToTop }) => {
  // TrackList component with back to top functionality
  const tracks: Track[] = [
    { 
      id: 1, 
      title: "CINDERELLA", 
      artist: "Aryiion",
      url: "https://open.youtu.be/lxI11IGSBiE"
    },
    { 
      id: 2, 
      title: "I WANT IT ALL", 
      artist: "Aryiion", 
      features: "FADHIL",
      url: "https://open.https://youtu.be/7V-xXnkfvAM"
    },
    { 
      id: 3, 
      title: "TEDUH", 
      artist: "Aryiion",
      url: "https://open.youtu.be/Q1ZJDFHkqBs"
    },
    { 
      id: 4, 
      title: "BEHIND", 
      artist: "Aryiion", 
      features: "Lil-Khai, Yung Uber",
      url: "https://open.https://youtu.be/Hcn0cA2uf0M"
    },
    { 
      id: 5, 
      title: "PERCAYA", 
      artist: "Aryiion",
      url: "https://open.youtu.be/J8-wrhG-x90"
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="mb-8 text-center animate-fade-in">
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wider mb-2">
          List Track Of
        </h2>
        <div className="font-display text-5xl md:text-6xl font-bold uppercase tracking-wider text-primary mb-4">
          Bluetopia
        </div>
        <p className="font-mono text-sm text-muted-foreground uppercase tracking-wider">
          Click any track to listen on Spotify
        </p>
      </div>

      <div className="space-y-4">
        {tracks.map((track, index) => (
          <a
            key={track.id}
            href={track.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-card border-2 border-border hover:border-primary p-6 rounded-lg transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] cursor-pointer animate-fade-in hover:scale-105 transform overflow-hidden will-change-transform block"
            style={{ animationDelay: `${index * 100}ms`, transformOrigin: 'center' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-4 relative z-10">
              {/* Track number */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 border-2 border-primary font-mono text-xl font-bold text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500 group-hover:scale-110">
                {track.id}
              </div>

              {/* Track info */}
              <div className="flex-1">
                <div className="font-display text-xl md:text-2xl font-bold uppercase tracking-wider group-hover:text-primary transition-all duration-300 group-hover:scale-105 transform">
                  {track.artist} - {track.title}
                </div>
                {track.features && (
                  <div className="font-mono text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors duration-300">
                    Feat. {track.features}
                  </div>
                )}
              </div>

              {/* External link indicator */}
              <div className="flex-shrink-0">
                <div className="w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125">
                  <svg 
                    className="w-5 h-5 text-primary" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Animated line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
        ))}
      </div>

      {/* Back button */}
      <div className="mt-12 text-center">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            onBackToTop();
          }}
          className="font-display text-sm uppercase tracking-wider px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-background transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] group relative overflow-hidden will-change-transform"
          style={{ transformOrigin: 'center' }}
        >
          <span className="relative z-10">← Back to Top</span>
          <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full blur-xl"></div>
        </button>
      </div>
    </div>
  );
};

export default TrackList;
