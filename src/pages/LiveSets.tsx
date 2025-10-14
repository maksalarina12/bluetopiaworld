import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HudOverlay from "@/components/HudOverlay";
import BlurText from "@/components/BlurText";
import TrueFocus from "@/components/TrueFocus";

const LiveSets = () => {
  const handleAnimationComplete = () => {
    console.log('Blur text animation completed!');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HudOverlay />
      
      <div className="pt-32 px-4 py-12">
        <div className="max-w-7xl mx-auto">

          {/* Coming Soon Section */}
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              {/* Large Coming Soon Text with TrueFocus Animation */}
              <div className="relative">
                <TrueFocus 
                  sentence="COMING SOON"
                  manualMode={false}
                  blurAmount={8}
                  borderColor="#22c55e"
                  glowColor="rgba(34, 197, 94, 0.6)"
                  animationDuration={1.5}
                  pauseBetweenAnimations={2}
                />
                
                {/* Animated Background Elements */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-96 h-96 border-2 border-primary/20 rounded-full animate-spin-slow"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-64 h-64 border border-primary/10 rounded-full animate-spin-reverse"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-32 h-32 border border-primary/5 rounded-full animate-spin-slow"></div>
                </div>
              </div>

              {/* Subtitle */}
              <div className="mt-8">
                <BlurText
                  text="Live performances and exclusive sets"
                  delay={1000}
                  animateBy="words"
                  direction="top"
                  animationFrom={{ filter: 'blur(10px)', opacity: 0, y: -50 }}
                  animationTo={[
                    { filter: 'blur(5px)', opacity: 0.5, y: 5 },
                    { filter: 'blur(0px)', opacity: 1, y: 0 }
                  ]}
                  onAnimationComplete={handleAnimationComplete}
                  className="font-mono text-lg text-muted-foreground uppercase tracking-wider"
                />
              </div>

              {/* Animated Dots */}
              <div className="flex justify-center gap-2 mt-8">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-10 border-t border-border py-4 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="font-mono text-xs text-muted-foreground">
            © 2025 ARYIION. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LiveSets;