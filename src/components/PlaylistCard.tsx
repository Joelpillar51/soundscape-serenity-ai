
import React from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Playlist } from "@/data/playlistsData";

interface PlaylistCardProps {
  playlist: Playlist;
  onClick: () => void;
  isSelected: boolean;
}

const PlaylistCard = ({ playlist, onClick, isSelected }: PlaylistCardProps) => {
  const { title, description, imageUrl, soundCount, totalDuration } = playlist;

  return (
    <div 
      className={`playlist-card group cursor-pointer hover:scale-[1.02] transition-all duration-200 bg-card rounded-xl overflow-hidden ${isSelected ? 'ring-2 ring-primary' : ''}`}
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button size="icon" variant="secondary" className="rounded-full h-12 w-12">
            <Play className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold line-clamp-1">{title}</h3>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{description}</p>
        <div className="flex justify-between mt-2">
          <span className="text-xs text-muted-foreground">{soundCount} sounds</span>
          <span className="text-xs text-muted-foreground">{totalDuration}</span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
