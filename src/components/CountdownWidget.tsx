import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownWidget = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: October 26, 2025 at 18:00 WIB (UTC+7)
    const targetDate = new Date('2025-10-26T18:00:00+07:00');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center gap-6 mb-8">
      <div className="text-center">
        <h3 className="font-mono text-lg tracking-widest text-primary uppercase mb-2">
          Album Release Countdown
        </h3>
        <p className="font-mono text-sm text-muted-foreground">
          October 26, 2025 • 18:00 WIB
        </p>
      </div>
      
      <div className="flex gap-4 md:gap-6">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div className="bg-card border border-primary/30 rounded-lg p-4 min-w-[80px] text-center group hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <div className="font-mono text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
              {formatNumber(timeLeft.days)}
            </div>
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-1">
              Days
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="bg-card border border-primary/30 rounded-lg p-4 min-w-[80px] text-center group hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <div className="font-mono text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
              {formatNumber(timeLeft.hours)}
            </div>
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-1">
              Hours
            </div>
          </div>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="bg-card border border-primary/30 rounded-lg p-4 min-w-[80px] text-center group hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <div className="font-mono text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
              {formatNumber(timeLeft.minutes)}
            </div>
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-1">
              Minutes
            </div>
          </div>
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="bg-card border border-primary/30 rounded-lg p-4 min-w-[80px] text-center group hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <div className="font-mono text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
              {formatNumber(timeLeft.seconds)}
            </div>
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-1">
              Seconds
            </div>
          </div>
        </div>
      </div>

      {/* Separator dots */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
        <div className="w-1 h-1 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="w-1 h-1 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default CountdownWidget;
