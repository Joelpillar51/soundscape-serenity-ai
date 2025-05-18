
import React, { useState } from "react";
import { Music, Disc, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

interface GeneratePlaylistDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const GeneratePlaylistDialog = ({ isOpen, onClose }: GeneratePlaylistDialogProps) => {
  const [playlistName, setPlaylistName] = useState("");
  const [mood, setMood] = useState("calm");
  const [duration, setDuration] = useState(30);
  const [soundCount, setSoundCount] = useState(5);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const moods = [
    { value: "calm", label: "Calm" },
    { value: "focus", label: "Focus" },
    { value: "sleep", label: "Sleep" },
    { value: "energy", label: "Energy" },
    { value: "meditation", label: "Meditation" }
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playlistName.trim()) {
      toast({
        title: "Playlist name required",
        description: "Please enter a name for your playlist",
        variant: "destructive",
      });
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate API call to generate playlist
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Playlist generated successfully!",
        description: `Your "${playlistName}" playlist has been created with ${soundCount} ${mood} sounds.`,
      });
      onClose();
      setPlaylistName("");
      setMood("calm");
      setDuration(30);
      setSoundCount(5);
    }, 2000);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Disc className="h-5 w-5 text-primary" />
            Generate Sound Playlist
          </DialogTitle>
          <DialogDescription>
            Create a customized sound playlist based on your preferences.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Playlist Name</Label>
            <Input 
              id="name" 
              placeholder="Enter playlist name..." 
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              required
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="mood">Sound Mood</Label>
            <Select value={mood} onValueChange={setMood}>
              <SelectTrigger>
                <SelectValue placeholder="Select mood" />
              </SelectTrigger>
              <SelectContent>
                {moods.map((moodOption) => (
                  <SelectItem key={moodOption.value} value={moodOption.value}>
                    {moodOption.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="duration">Total Duration (minutes)</Label>
              <span className="text-sm text-muted-foreground">{duration} minutes</span>
            </div>
            <Slider 
              id="duration"
              min={10} 
              max={120} 
              step={5} 
              value={[duration]} 
              onValueChange={(values) => setDuration(values[0])}
            />
          </div>
          
          <div className="grid gap-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="sounds">Number of Sounds</Label>
              <span className="text-sm text-muted-foreground">{soundCount} sounds</span>
            </div>
            <Slider 
              id="sounds"
              min={3} 
              max={15} 
              step={1} 
              value={[soundCount]} 
              onValueChange={(values) => setSoundCount(values[0])}
            />
          </div>
          
          <DialogFooter className="pt-4">
            <Button type="button" variant="outline" onClick={onClose} disabled={isGenerating}>
              Cancel
            </Button>
            <Button type="submit" disabled={isGenerating}>
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Music className="h-4 w-4 mr-2" />
                  Generate Playlist
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default GeneratePlaylistDialog;
