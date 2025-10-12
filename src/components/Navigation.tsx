import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between p-4">
      <Button 
        variant="ghost" 
        className="font-display text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors"
      >
        Back
      </Button>
      
      <Button 
        variant="ghost"
        className="font-display text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors"
      >
        Shop
      </Button>
    </nav>
  );
};

export default Navigation;
