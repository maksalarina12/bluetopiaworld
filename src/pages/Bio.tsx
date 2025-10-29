import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HudOverlay from "@/components/HudOverlay";
import ppspotify from "@/assets/ppspotify.jpeg";

// Image functions
const getPpspotify = () => ppspotify;
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
                    src={getPpspotify()} 
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

              {/* Media Section */}
              <div className="bg-card border border-primary/30 rounded-2xl p-8">
                <BlurText
                  text="MEDIA"
                  delay={100}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  animationFrom={animationFrom}
                  animationTo={animationTo}
                  className="font-display text-3xl font-bold uppercase tracking-wider mb-8 text-center"
                />
                
                {/* Social Media Section */}
                <div className="mb-8">
                  <h4 className="font-mono text-lg text-primary uppercase tracking-wider mb-6 text-center">Social Media</h4>
                  <div className="flex flex-wrap justify-center gap-6">
                    {/* Instagram */}
                    <a 
                      href="https://instagram.com/aryiion" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-16 h-16 bg-card border border-primary/30 rounded-xl hover:border-primary hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                    >
                      <svg className="w-8 h-8 text-primary group-hover:text-primary/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>

                    {/* Facebook */}
                    <a 
                      href="https://facebook.com/aryiion" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-16 h-16 bg-card border border-primary/30 rounded-xl hover:border-primary hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                    >
                      <svg className="w-8 h-8 text-primary group-hover:text-primary/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>

                    {/* X (Twitter) */}
                    <a 
                      href="https://x.com/aryiion" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-16 h-16 bg-card border border-primary/30 rounded-xl hover:border-primary hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                    >
                      <svg className="w-8 h-8 text-primary group-hover:text-primary/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>

                    {/* TikTok */}
                    <a 
                      href="https://tiktok.com/@aryiion" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-16 h-16 bg-card border border-primary/30 rounded-xl hover:border-primary hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                    >
                      <svg className="w-8 h-8 text-primary group-hover:text-primary/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>

                    {/* YouTube */}
                    <a 
                      href="https://youtube.com/@aryiion" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-16 h-16 bg-card border border-primary/30 rounded-xl hover:border-primary hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                    >
                      <svg className="w-8 h-8 text-primary group-hover:text-primary/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Music Platforms Section */}
                <div>
                  <h4 className="font-mono text-lg text-primary uppercase tracking-wider mb-6 text-center">Music Platforms</h4>
                  <div className="flex flex-wrap justify-center gap-6">
                    {/* Spotify */}
                    <a 
                      href="https://open.spotify.com/artist/6Nv8bJwUXb104DH9Y6tcBn" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-16 h-16 bg-card border border-primary/30 rounded-xl hover:border-primary hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                    >
                      <svg className="w-8 h-8 text-primary group-hover:text-primary/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                    </a>

                    {/* Apple Music */}
                    <a 
                      href="https://music.apple.com/us/artist/aryiion/1838886827" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-16 h-16 bg-card border border-primary/30 rounded-xl hover:border-primary hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                    >
                      <svg className="w-8 h-8 text-primary group-hover:text-primary/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"/>
                      </svg>
                    </a>

                    {/* Prime Music */}
                    <a 
                      href="https://music.amazon.com/artists/B0FQJ8445T/aryiion?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_BN4YtAqRSNFE71R8EjUGtKrRK" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-16 h-16 bg-card border border-primary/30 rounded-xl hover:border-primary hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                    >
                      <svg className="w-8 h-8 text-primary group-hover:text-primary/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-17v6l5 3-5 3v6l8-9-8-9z"/>
                      </svg>
                    </a>

                    {/* Tidal */}
                    <a 
                      href="https://tidal.com/artist/aryiion" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-16 h-16 bg-card border border-primary/30 rounded-xl hover:border-primary hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                    >
                      <svg className="w-8 h-8 text-primary group-hover:text-primary/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-17v6l5 3-5 3v6l8-9-8-9z"/>
                      </svg>
                    </a>

                    {/* SoundCloud */}
                    <a 
                      href="https://soundcloud.com/aryiion" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-16 h-16 bg-card border border-primary/30 rounded-xl hover:border-primary hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                    >
                      <svg className="w-8 h-8 text-primary group-hover:text-primary/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-17v6l5 3-5 3v6l8-9-8-9z"/>
                      </svg>
                    </a>

                    {/* Web */}
                    <a 
                      href="www.aryiion.my.id" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-16 h-16 bg-card border border-primary/30 rounded-xl hover:border-primary hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                    >
                      <svg className="w-8 h-8 text-primary group-hover:text-primary/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </a>

                    {/* Wikipedia */}
                    <a 
                      href="https://en.wikipedia.org/wiki/Aryiion" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-16 h-16 bg-card border border-primary/30 rounded-xl hover:border-primary hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                    >
                      <svg className="w-8 h-8 text-primary group-hover:text-primary/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-17v6l5 3-5 3v6l8-9-8-9z"/>
                      </svg>
                    </a>
                  </div>
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
