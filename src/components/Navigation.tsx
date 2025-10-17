import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  // Define pages that should go back to Explorer
  const explorerPages = ['/music', '/videos', '/gallery', '/bio', '/live-sets'];
  const shouldGoToExplorer = explorerPages.includes(location.pathname);
  // On all-songs, back should go to /music
  const backHref = location.pathname === '/all-songs'
    ? '/music'
    : shouldGoToExplorer
      ? '/explore'
      : '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <Link to={backHref}>
        <Button 
          variant="ghost" 
          className="font-display text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors"
        >
          {isHome ? "Home" : "← Back"}
        </Button>
      </Link>
      
      <div className="flex gap-2">
        <Link to="/explore">
          <Button 
            variant="ghost"
            className="font-display text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors"
          >
            Explore
          </Button>
        </Link>
        <Link to="/shop">
          <Button 
            variant="ghost"
            className="font-display text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors"
          >
            Shop
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
