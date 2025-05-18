
import { Heart, Download, Link, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SoundListItemProps {
  title: string;
  artist: string;
  tags: string[];
  duration: string;
  bpm?: string;
  imageUrl: string;
  onPlay?: () => void;
}

const SoundListItem = ({
  title,
  artist,
  tags,
  duration,
  bpm,
  imageUrl,
  onPlay,
}: SoundListItemProps) => {
  return (
    <div className="group flex items-center gap-4 p-4 hover:bg-card/80 rounded-md transition-colors">
      <div className="min-w-[60px] w-[60px] h-[60px] rounded-md overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-base">{title}</h3>
        <p className="text-muted-foreground text-sm">{artist}</p>
      </div>
      
      <div className="hidden md:flex flex-wrap items-center gap-2 max-w-[200px]">
        {tags.map((tag, i) => (
          <Badge key={i} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>
      
      <div className="hidden md:flex flex-col items-end min-w-[80px]">
        <span className="font-medium">{duration}</span>
        {bpm && <span className="text-sm text-muted-foreground">{bpm} BPM</span>}
      </div>
      
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button size="icon" variant="ghost">
          <Plus className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="ghost">
          <Heart className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="ghost">
          <Link className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="ghost">
          <Download className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default SoundListItem;
