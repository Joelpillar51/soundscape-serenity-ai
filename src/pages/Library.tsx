
import { useState } from "react";
import { Search } from "lucide-react";
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
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Library</h1>
        </div>
        
        <Tabs defaultValue="songs" onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <TabsList>
              <TabsTrigger value="songs">Songs</TabsTrigger>
              <TabsTrigger value="playlists">Playlists</TabsTrigger>
              <TabsTrigger value="liked">Liked</TabsTrigger>
              <TabsTrigger value="following">Following</TabsTrigger>
              <TabsTrigger value="followers">Followers</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
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
          
          <TabsContent value="following" className="mt-0">
            <div className="flex justify-center items-center p-12">
              <p className="text-muted-foreground">Creators you follow will appear here</p>
            </div>
          </TabsContent>
          
          <TabsContent value="followers" className="mt-0">
            <div className="flex justify-center items-center p-12">
              <p className="text-muted-foreground">Your followers will appear here</p>
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="mt-0">
            <div className="flex justify-center items-center p-12">
              <p className="text-muted-foreground">Your listening history will appear here</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Library;
