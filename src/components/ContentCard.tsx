import { Card } from "@/components/ui/card";

interface ContentCardProps {
  title: string;
  image: string;
  delay?: number;
}

const ContentCard = ({ title, image, delay = 0 }: ContentCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden bg-card border-border cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-square relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        {/* Title overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <div className="flex items-center gap-2 mt-2 text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors duration-300">
            <span>EXPLORE</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
          </div>
        </div>

        {/* Hover border effect */}
        <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </Card>
  );
};

export default ContentCard;
