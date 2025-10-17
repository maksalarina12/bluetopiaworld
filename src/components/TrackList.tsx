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

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="text-center animate-fade-in">
        <Link to="/all-songs" className="inline-block">
          <span className="font-display text-sm uppercase tracking-wider px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-background transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] inline-block">
            show all songs realesed
          </span>
        </Link>
      </div>
    </div>
  );
};

export default TrackList;
