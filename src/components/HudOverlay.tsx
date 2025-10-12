import { useEffect, useState } from "react";

const HudOverlay = () => {
  const [time, setTime] = useState(new Date());
  const [coords] = useState({
    lat: "29°45'36.35\"N",
    long: "95°21'41.63\"W",
  });

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  const formatDate = () => {
    return time.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).toUpperCase();
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-20 font-mono text-xs">
      {/* Top Left - Coordinates */}
      <div className="absolute top-4 left-4 text-primary animate-pulse-glow">
        <div className="flex gap-4">
          <span>{coords.lat}</span>
          <span>{coords.long}</span>
        </div>
      </div>

      {/* Top Right - Date & Time */}
      <div className="absolute top-4 right-4 text-primary animate-pulse-glow text-right">
        <div>{formatDate()}</div>
        <div className="text-accent">{formatTime(time)}</div>
      </div>

      {/* Bottom Left - System Status */}
      <div className="absolute bottom-4 left-4 text-primary">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></span>
            <span>SYSTEM ONLINE</span>
          </div>
          <div className="text-muted-foreground">STATUS: ACTIVE</div>
        </div>
      </div>

      {/* Bottom Right - Technical Info */}
      <div className="absolute bottom-4 right-4 text-primary text-right">
        <div className="flex flex-col gap-1">
          <div>ALT: 89.1 FT</div>
          <div className="text-accent">HDG: 261.1°</div>
        </div>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary opacity-50"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary opacity-50"></div>
    </div>
  );
};

export default HudOverlay;
