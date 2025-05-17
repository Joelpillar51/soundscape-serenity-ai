
import React, { useState } from "react";
import { Play, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Playlist, Sound } from "@/data/playlistsData";
import { toast } from "@/hooks/use-toast";

interface PlaylistDetailViewProps {
  playlist: Playlist;
}

const PlaylistDetailView = ({ playlist }: PlaylistDetailViewProps) => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const handlePlaySound = (sound: Sound) => {
    toast({
      title: `Playing "${sound.title}"`,
      description: `From playlist: ${playlist.title}`,
    });
  };

  const handleAddToQueue = (sound: Sound) => {
    toast({
      title: "Added to queue",
      description: `"${sound.title}" has been added to your queue`,
    });
  };

  return (
    <div className="bg-card/50 rounded-xl border border-white/5 p-6 mt-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-full md:w-48 lg:w-64 aspect-square rounded-lg overflow-hidden shrink-0">
          <img 
            src={playlist.imageUrl} 
            alt={playlist.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-start p-4">
            <Button 
              size="icon" 
              className="rounded-full h-12 w-12 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Play className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col h-full justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">{playlist.title}</h1>
              <p className="text-muted-foreground mb-4">{playlist.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-secondary rounded-full text-xs">
                  {playlist.soundCount} sounds
                </span>
                <span className="px-3 py-1 bg-secondary rounded-full text-xs">
                  {playlist.totalDuration}
                </span>
                <span className="px-3 py-1 bg-secondary rounded-full text-xs">
                  Created by {playlist.createdBy}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollArea className="h-[400px] mt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">#</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Added</TableHead>
              <TableHead className="w-[100px]">
                <Clock className="h-4 w-4" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {playlist.sounds.map((sound, index) => (
              <TableRow 
                key={sound.id}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredRow(sound.id)}
                onMouseLeave={() => setHoveredRow(null)}
                onClick={() => handlePlaySound(sound)}
              >
                <TableCell className="font-medium">
                  {hoveredRow === sound.id ? (
                    <Play className="h-4 w-4 text-primary" />
                  ) : (
                    index + 1
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded overflow-hidden">
                      <img 
                        src={sound.imageUrl} 
                        alt={sound.title}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <div className="font-medium">{sound.title}</div>
                      {sound.artist && (
                        <div className="text-xs text-muted-foreground">{sound.artist}</div>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{sound.category}</TableCell>
                <TableCell>{sound.dateAdded}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    {hoveredRow === sound.id ? (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8" 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToQueue(sound);
                        }}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    ) : null}
                    <span>{sound.duration}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default PlaylistDetailView;
