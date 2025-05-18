
import { useState } from "react";
import { Search, Home, Compass, LibraryIcon, Star, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SoundListItem from "@/components/SoundListItem";

// Sample data for demonstration
const sampleSounds = [
  {
    id: 1,
    title: "Calmo Calma",
    artist: "Off Beat",
    tags: ["Lofi", "Laid Back"],
    duration: "2:09",
    bpm: "81 BPM",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "State of Calm",
    artist: "Nonak",
    tags: ["Electronic", "Groovy", "Hopeful"],
    duration: "2:00",
    bpm: "130 BPM",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Calm & Cozy",
    artist: "Lou Ki",
    tags: ["Lounge", "Groovy"],
    duration: "2:26",
    bpm: "123 BPM",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Quartz Calm",
    artist: "Lou Ki",
    tags: ["Ambient", "Dramatic", "Laid Back"],
    duration: "4:00",
    bpm: "99 BPM",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Calming State",
    artist: "Off Beat",
    tags: ["Pop", "Acoustic", "Hopeful"],
    duration: "1:56",
    bpm: "89 BPM",
    imageUrl: "/placeholder.svg"
  }
];

const Library = () => {
  const [activeTab, setActiveTab] = useState("songs");
  
  return (
    <div className="min-h-screen pb-20">
      {/* Sidebar Navigation - Same as in Dashboard */}
      <div className="fixed left-0 top-0 bottom-0 w-16 md:w-64 bg-card border-r border-white/5 z-40">
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center gap-2 mb-8">
            <div className="waveform scale-75">
              <div className="waveform-bar h-4"></div>
              <div className="waveform-bar h-6"></div>
              <div className="waveform-bar h-8"></div>
              <div className="waveform-bar h-5"></div>
              <div className="waveform-bar h-3"></div>
            </div>
            <span className="text-lg font-bold hidden md:block">Sound Sanctuary</span>
          </div>
          
          <nav className="space-y-1">
            <a href="/dashboard" 
              className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
              <Home className="h-5 w-5" />
              <span className="hidden md:block">Home</span>
            </a>
            <a href="/dashboard/explore" 
              className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
              <Compass className="h-5 w-5" />
              <span className="hidden md:block">Explore</span>
            </a>
            <a href="/dashboard/library" 
              className="flex items-center gap-3 px-3 py-2 rounded-md bg-secondary text-foreground">
              <LibraryIcon className="h-5 w-5" />
              <span className="hidden md:block">Library</span>
            </a>
            <a href="/dashboard/playlists" 
              className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
              <Star className="h-5 w-5" />
              <span className="hidden md:block">Playlists</span>
            </a>
          </nav>
          
          <div className="mt-auto">
            <a href="/dashboard/settings" 
              className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
              <Settings className="h-5 w-5" />
              <span className="hidden md:block">Settings</span>
            </a>
            <a href="/dashboard/upgrade" className="hidden md:block mt-4">
              <Button className="w-full">Upgrade</Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="ml-16 md:ml-64 p-6">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Library</h1>
          </div>
          
          <Tabs defaultValue="songs" onValueChange={setActiveTab}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <TabsList>
                <TabsTrigger value="songs">Songs</TabsTrigger>
                <TabsTrigger value="playlists">Playlists</TabsTrigger>
                <TabsTrigger value="liked">Liked</TabsTrigger>
              </TabsList>
              
              <div className="relative w-full sm:w-auto sm:min-w-[300px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Search by song name, style or lyrics" 
                  className="pl-9 bg-muted/50"
                />
              </div>
            </div>
            
            <div className="flex gap-2 mb-6">
              <Button variant="outline" size="sm">
                Liked
              </Button>
              <Button variant="outline" size="sm">
                Public
              </Button>
              <Button variant="outline" size="sm">
                Scenes
              </Button>
            </div>
            
            <TabsContent value="songs" className="mt-0">
              <div className="bg-card rounded-lg border shadow-sm">
                <div className="flex flex-col divide-y">
                  {sampleSounds.map((sound) => (
                    <SoundListItem
                      key={sound.id}
                      title={sound.title}
                      artist={sound.artist}
                      tags={sound.tags}
                      duration={sound.duration}
                      bpm={sound.bpm}
                      imageUrl={sound.imageUrl}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="playlists" className="mt-0">
              <div className="flex justify-center items-center p-12">
                <p className="text-muted-foreground">Your playlists will appear here</p>
              </div>
            </TabsContent>
            
            <TabsContent value="liked" className="mt-0">
              <div className="flex justify-center items-center p-12">
                <p className="text-muted-foreground">Your liked sounds will appear here</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Library;
