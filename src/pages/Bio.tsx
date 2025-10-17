import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HudOverlay from "@/components/HudOverlay";
import ppspotify from "@/assets/ppspotify.jpeg";
import BlurText from "@/components/BlurText";

const Bio = () => {
  const [activeSection] = useState("story");

  const handleAnimationComplete = () => {
    console.log('Blur text animation completed!');
  };

  const animationFrom = { filter: 'blur(10px)', opacity: 0, y: -50 } as any;
  const animationTo = [
    { filter: 'blur(5px)', opacity: 0.5, y: 5 },
    { filter: 'blur(0px)', opacity: 1, y: 0 },
  ] as any;
  const noop = () => {};

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
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <HudOverlay />
      
      <div className="pt-32 px-4 py-12 flex-1">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center">
              <BlurText
                text="Artist Profile"
                delay={100}
                animateBy="words"
                direction="top"
                animationFrom={animationFrom}
                animationTo={animationTo}
                onAnimationComplete={noop}
                className="font-mono text-sm tracking-widest text-primary uppercase mb-4 animate-pulse-glow"
              />
            </div>
            <div className="flex justify-center">
              <BlurText
                text="Bio"
                delay={200}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                animationFrom={animationFrom}
                animationTo={animationTo}
                className="font-display text-6xl md:text-8xl font-bold uppercase tracking-wider mb-4"
              />
            </div>
          </div>

          {/* Navigation Tabs removed - show bio only */}

          {/* Story Section */}
          {activeSection === "story" && (
            <div className="space-y-12">
              <div className="bg-card border border-primary/30 rounded-2xl p-12 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-8 overflow-hidden border-4 border-primary/30">
                  <img 
                    src={ppspotify} 
                    alt="Aryiion Profile" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex justify-center">
                  <BlurText
                    text="The Artist Behind the Music"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    animationFrom={animationFrom}
                    animationTo={animationTo}
                    className="font-display text-4xl font-bold uppercase tracking-wider mb-6"
                  />
                </div>
                <BlurText
                  text="Aryiion is an emerging artist from Indonesia, born in 2005, blending the soulful touch of R&B, the raw flow of Modern Rap, and the emotional depth of Slow Rock. His sound moves between smooth melodies and heartfelt lyricism, creating music that speaks to love, struggle, and self-reflection. From his beginnings on Aryiion. Aryiion has built a loyal following through his honest storytelling and authentic vibe. With his unique voice and cinematic production style, he delivers tracks that feel both intimate and timeless. Now, Aryiion is gearing up for his upcoming album, dropping on October 26, 2025 a project that showcases his growth, emotion, and artistic evolution. This relese marks a new chapter for Aryiion as he continues shaping his sound and making his mark on the next wave of Indonesian music."
                  delay={200}
                  animateBy="words"
                  direction="top"
                  animationFrom={animationFrom}
                  animationTo={animationTo}
                  onAnimationComplete={noop}
                  className="font-mono text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-2xl p-8 group hover:border-primary transition-all duration-300">
                <BlurText
                  text="Creative Philosophy"
                  delay={100}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  animationFrom={animationFrom}
                  animationTo={animationTo}
                  className="font-display text-2xl font-bold uppercase tracking-wider mb-4 group-hover:text-primary transition-colors"
                />
                  <BlurText
                    text="Music for Aryiion is more than sound it’s emotion in motion. Every beat speaks,
                  every lyric breathes life, and every track is a reflection of raw human experience.
                  Blending Hip-Hop rhythm, R&B soul, and the depth of Slow Rock, Aryiion creates a
                  sonic bridge between vulnerability and strength, between story and sound."
                    delay={150}
                    animateBy="words"
                    direction="top"
                    animationFrom={animationFrom}
                    animationTo={animationTo}
                    onAnimationComplete={noop}
                    className="font-mono text-sm text-muted-foreground leading-relaxed"
                  />
                </div>

                <div className="bg-card border border-border rounded-2xl p-8 group hover:border-primary transition-all duration-300">
                <BlurText
                  text="Visual Identity"
                  delay={200}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  animationFrom={animationFrom}
                  animationTo={animationTo}
                  className="font-display text-2xl font-bold uppercase tracking-wider mb-4 group-hover:text-primary transition-colors"
                />
                  <BlurText
                    text="Aryiion believes music should be seen as much as it’s heard. Each release is paired
                  with a carefully crafted visual world — cinematic, moody, and immersive designed to
                  extend the emotion beyond sound. His visuals amplify the message, turning every track
                  into a complete sensory journey."
                    delay={250}
                    animateBy="words"
                    direction="top"
                    animationFrom={animationFrom}
                    animationTo={animationTo}
                    onAnimationComplete={noop}
                    className="font-mono text-sm text-muted-foreground leading-relaxed"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Timeline Section removed */}

        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <BlurText
              text="© 2025 ARYIION. ALL RIGHTS RESERVED."
              delay={100}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              animationFrom={animationFrom}
              animationTo={animationTo}
              className="font-mono text-xs text-muted-foreground text-center"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Bio;
