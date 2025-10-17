import Navigation from "@/components/Navigation";
import HudOverlay from "@/components/HudOverlay";
import FadeContent from "@/components/FadeContent";
import { allSongs } from "@/data/songs";
import { Link } from "react-router-dom";

const AllSongs = () => {
  const sorted = [...allSongs].sort((a, b) => a.id - b.id);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <HudOverlay />

      <div className="pt-32 px-4 py-12 flex-1">
        <div className="max-w-5xl mx-auto">
          <FadeContent blur={true} duration={900} easing="ease-out" initialOpacity={0}>
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wider text-foreground">
                All Songs
              </h1>
              <p className="font-mono text-sm tracking-widest text-primary uppercase mt-2">
                Show all songs released
              </p>
              {/* Back button removed as navigation header handles back */}
            </div>
          </FadeContent>

          <div className="space-y-8">
            {sorted.map((song) => {
              const hasSpotify = Boolean(song.audio && song.audio.includes("open.spotify.com"));
              const hasYouTube = !hasSpotify && Boolean(song.youtube && song.youtube.includes("youtube.com"));
              return (
                <FadeContent key={`all-song-${song.id}`} blur={true} duration={700} easing="ease-out" initialOpacity={0}>
                  <div className="bg-card border border-primary/30 rounded-2xl p-6 hover:border-primary transition-all duration-500">
                    <div className="mb-4">
                      <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-wider">
                        {song.title}
                      </h3>
                      <p className="font-mono text-sm text-muted-foreground">{song.artist}</p>
                    </div>
                    {hasSpotify ? (
                      <iframe
                        src={song.audio}
                        width="100%"
                        height="152"
                        frameBorder="0"
                        allowTransparency={true}
                        allow="encrypted-media"
                        className="rounded-lg"
                      ></iframe>
                    ) : hasYouTube ? (
                      <div className="aspect-video w-full">
                        <iframe
                          width="100%"
                          height="100%"
                          src={song.youtube}
                          title={`${song.title} - YouTube`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          className="rounded-lg"
                        ></iframe>
                      </div>
                    ) : (
                      <div className="font-mono text-xs text-muted-foreground">Preview coming soon</div>
                    )}
                  </div>
                </FadeContent>
              );
            })} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSongs;


