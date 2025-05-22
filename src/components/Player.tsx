
import { useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface PlayerProps {
  title?: string;
  artist?: string;
  coverUrl?: string;
  isPlaying?: boolean;
  onPlayPause?: () => void;
}

const Player = ({ 
  title = "Evening Calm", 
  artist = "Focus",
  coverUrl = "/placeholder.svg",
  isPlaying = false,
  onPlayPause
}: PlayerProps) => {
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 180; // 3 minutes in seconds

  useEffect(() => {
    let interval: number;
    
    if (isPlaying) {
      interval = window.setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            if (onPlayPause) onPlayPause();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, duration, onPlayPause]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const handlePlayPause = () => {
    if (onPlayPause) onPlayPause();
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 max-w-md w-[90%] bg-card/90 backdrop-blur-md py-3 px-4 rounded-xl border border-white/10 shadow-lg z-50">
      <div className="flex items-center gap-3">
        <img src={coverUrl} alt={title} className="h-12 w-12 rounded-md object-cover" />
        <div className="flex-1">
          <h4 className="text-sm font-medium line-clamp-1">{title}</h4>
          <p className="text-xs text-muted-foreground">{artist}</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            size="icon" 
            onClick={handlePlayPause} 
            className="rounded-full h-9 w-9 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full h-9 w-9 text-muted-foreground hover:text-foreground">
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="w-full flex items-center gap-2 mt-2">
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
  );
};

export default Player;
