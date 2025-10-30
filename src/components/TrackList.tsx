import React from 'react';
import { Link } from 'react-router-dom';

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
  const tracks: Track[] = [
    { id: 1, title: "CINDERELLA", artist: "Aryiion", url: "https://open.spotify.com/track/4vJ9KIddqbKmWzdsHtWjux?si=9064a6649db44cc3" },
    { id: 3, title: "TEDUH", artist: "Aryiion", url: "https://open.spotify.com/track/3Elry9AmmaBkLdWc4KPrri?si=6f38442f1b3f4031" },
    { id: 2, title: "I WANT IT ALL", artist: "Aryiion", features: "FADHIL", url: "https://open.spotify.com/track/2SVfgASZ3cXxlzLoIOHbGb?si=32cdf0ac44fe461d" },
    { id: 4, title: "BEHIND", artist: "Aryiion", features: "Lil-Khai, Yung Uber", url: "https://open.spotify.com/track/3SS4TDyOSjDRxwhLjKFgtY?si=67f10753506d433a" },
    { id: 5, title: "PERCAYA", artist: "Aryiion", url: "https://open.spotify.com/track/0ahy2PU4BguC2VJr9JqoTo?si=a6955d3753574d02" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 backdrop-blur-sm">
      <div className="mb-16 text-center animate-fade-in">
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wider mb-3">
          List Track of
        </h2>
        <div className="font-display text-5xl md:text-6xl font-bold uppercase tracking-wider text-primary">
          Bluetopia
        </div>
      </div>
      
      <div className="space-y-6">
        {tracks.map((track, index) => (
          <a
            key={track.id}
            href={track.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-card border-2 border-border hover:border-primary p-8 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] cursor-pointer animate-fade-in block"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-5">
              {/* Track number */}
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 border-2 border-primary font-mono text-xl font-bold text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                {track.id}
              </div>
              
              {/* Track info */}
              <div className="flex-1">
                <div className="font-display text-xl md:text-2xl font-bold uppercase tracking-wider group-hover:text-primary transition-colors duration-300">
                  {track.artist} - {track.title}
                </div>
                {track.features && (
                  <div className="font-mono text-sm text-muted-foreground mt-1">
                    Feat. {track.features}
                  </div>
                )}
              </div>
              
              {/* Spotify icon */}
              <div className="flex-shrink-0">
                <div className="w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.44-.482.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Animated line */}
            <div className="absolute bottom-0 left-8 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
        ))}
      </div>
      
      {/* Back button */}
      <div className="mt-20 text-center">
        <button
          onClick={onBackToTop}
          className="font-display text-base uppercase tracking-wider px-10 py-5 border-2 border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300"
        >
          Back to Top
        </button>
      </div>
    </div>
  );
};

export default TrackList;
