
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SoundCardProps {
  title: string;
  category: string;
  imageUrl: string;
  duration?: string;
  onClick?: () => void;
}

const SoundCard = ({ 
  title, 
  category, 
  imageUrl, 
  duration = "10 min", 
  onClick 
}: SoundCardProps) => {
  return (
    <div className="sound-card group" onClick={onClick}>
      <div className="relative aspect-square rounded-md overflow-hidden mb-3">
        <img 
          src={imageUrl || "/placeholder.svg"} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button size="icon" variant="secondary" className="rounded-full h-12 w-12">
            <Play className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm font-medium line-clamp-1">{title}</h3>
        <div className="flex justify-between mt-1">
          <span className="text-xs text-muted-foreground">{category}</span>
          <span className="text-xs text-muted-foreground">{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default SoundCard;
