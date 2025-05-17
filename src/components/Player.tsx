
import { useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface PlayerProps {
  title?: string;
  artist?: string;
  coverUrl?: string;
}

const Player = ({ 
  title = "Evening Calm", 
  artist = "Focus",
  coverUrl = "/placeholder.svg" 
}: PlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 180; // 3 minutes in seconds

  useEffect(() => {
    let interval: number;
    
    if (isPlaying) {
      interval = window.setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, duration]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 player-bg py-3 px-4 z-50">
      <div className="container mx-auto flex items-center">
        <div className="hidden md:flex items-center gap-3 w-1/4">
          <img src={coverUrl} alt={title} className="h-12 w-12 rounded-md object-cover" />
          <div>
            <h4 className="text-sm font-medium line-clamp-1">{title}</h4>
            <p className="text-xs text-muted-foreground">{artist}</p>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost" className="rounded-full text-muted-foreground hover:text-foreground">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              onClick={handlePlayPause} 
              className="rounded-full h-10 w-10 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full text-muted-foreground hover:text-foreground">
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="w-full max-w-md flex items-center gap-2 mt-2">
            <span className="text-xs text-muted-foreground w-10 text-right">
              {formatTime(currentTime)}
            </span>
            <Slider
              value={[currentTime]}
              max={duration}
              step={1}
              className="flex-1"
              onValueChange={(values) => setCurrentTime(values[0])}
            />
            <span className="text-xs text-muted-foreground w-10">
              {formatTime(duration)}
            </span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-2 w-1/4 justify-end">
          <Volume className="h-4 w-4 text-muted-foreground" />
          <Slider
            value={[70]}
            max={100}
            step={1}
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
