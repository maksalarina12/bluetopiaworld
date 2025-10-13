import React from 'react';

interface Track {
  id: number;
  title: string;
  artist: string;
  features?: string;
}

interface TrackListProps {
  onBackToTop: () => void;
}

const TrackList: React.FC<TrackListProps> = ({ onBackToTop }) => {
  // TrackList component with back to top functionality
  const tracks: Track[] = [
    { id: 1, title: "CINDERELLA", artist: "Aryiion" },
    { id: 2, title: "I WANT IT ALL", artist: "Aryiion", features: "FADHIL" },
    { id: 3, title: "TEDUH", artist: "Aryiion" },
    { id: 4, title: "BEHIND", artist: "Aryiion", features: "Lil-Khai, Yung Uber" },
    { id: 5, title: "PERCAYA", artist: "Aryiion" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="mb-8 text-center animate-fade-in">
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wider mb-2">
          List Track Of
        </h2>
        <div className="font-display text-5xl md:text-6xl font-bold uppercase tracking-wider text-primary">
          Bluetopia
        </div>
      </div>

      <div className="space-y-4">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            className="group relative bg-card border-2 border-border hover:border-primary p-6 rounded-lg transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] cursor-pointer animate-fade-in hover:scale-105 transform overflow-hidden will-change-transform"
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

              {/* Play indicator */}
              <div className="flex-shrink-0">
                <div className="w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125">
                  <div className="w-0 h-0 border-l-[12px] border-l-primary border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
                </div>
              </div>
            </div>

            {/* Animated line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
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
