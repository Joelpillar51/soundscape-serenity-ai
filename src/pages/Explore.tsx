
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Home, Compass, LibraryIcon, Star, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import SoundCard from "@/components/SoundCard";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const genres = [
  "Ambient", "Lo-Fi", "Focus", "Sleep", "Meditation", "Nature", 
  "Acoustic", "Jazz", "Classical", "Electronic"
];

const trendingSounds = [
  {
    title: "Morning Dew",
    category: "Ambient",
    imageUrl: "/placeholder.svg",
    duration: "5:24"
  },
  {
    title: "Calm Waves",
    category: "Nature",
    imageUrl: "/placeholder.svg",
    duration: "3:12"
  },
  {
    title: "Night Focus",
    category: "Focus",
    imageUrl: "/placeholder.svg",
    duration: "8:45"
  },
  {
    title: "Deep Sleep",
    category: "Sleep",
    imageUrl: "/placeholder.svg",
    duration: "10:30"
  }
];

const recentlyPlayed = [
  {
    title: "Forest Ambience",
    category: "Nature",
    imageUrl: "/placeholder.svg",
    duration: "12:10"
  },
  {
    title: "Piano Dreams",
    category: "Classical",
    imageUrl: "/placeholder.svg",
    duration: "4:50"
  },
  {
    title: "Ocean Waves",
    category: "Nature",
    imageUrl: "/placeholder.svg",
    duration: "15:00"
  }
];

const Explore = () => {
  return (
    <div className="min-h-screen pb-20">
      {/* Sidebar Navigation */}
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
              className="flex items-center gap-3 px-3 py-2 rounded-md bg-secondary text-foreground">
              <Compass className="h-5 w-5" />
              <span className="hidden md:block">Explore</span>
            </a>
            <a href="/dashboard/library" 
              className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
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
        <div className="flex flex-col gap-8">
          {/* Hero Section */}
          <div className="relative rounded-xl bg-gradient-to-r from-purple-800 to-blue-600 p-6 md:p-10 text-white">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover New Sounds</h1>
              <p className="text-lg opacity-90 mb-6">
                Explore curated sounds for focus, relaxation, and creativity
              </p>
              <Button variant="secondary" size="lg">Browse All</Button>
            </div>
          </div>

          {/* Main Tabs */}
          <Tabs defaultValue="for-you">
            <TabsList className="mb-6">
              <TabsTrigger value="for-you">For You</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="new">New Releases</TabsTrigger>
            </TabsList>

            <TabsContent value="for-you">
              {/* Genre Filters */}
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-3">Browse by Genre</h2>
                <div className="flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <Badge key={genre} variant="outline" className="cursor-pointer hover:bg-accent">
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Trending Now Section */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Trending Now</h2>
                  <Button variant="ghost" size="sm">See All</Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {trendingSounds.map((sound, index) => (
                    <SoundCard
                      key={index}
                      title={sound.title}
                      category={sound.category}
                      imageUrl={sound.imageUrl}
                      duration={sound.duration}
                    />
                  ))}
                </div>
              </div>

              {/* Recently Played Section */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Recently Played</h2>
                  <Button variant="ghost" size="sm">See All</Button>
                </div>
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead className="text-right">Duration</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentlyPlayed.map((sound, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium flex items-center gap-2">
                              <div className="w-10 h-10 rounded bg-secondary">
                                <img src={sound.imageUrl} alt={sound.title} className="w-full h-full object-cover rounded" />
                              </div>
                              {sound.title}
                            </TableCell>
                            <TableCell>{sound.category}</TableCell>
                            <TableCell className="text-right">{sound.duration}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="trending">
              <div className="p-8 text-center text-muted-foreground">
                <p>Trending content will appear here</p>
              </div>
            </TabsContent>

            <TabsContent value="new">
              <div className="p-8 text-center text-muted-foreground">
                <p>New releases will appear here</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Explore;
