
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Play, Search, Home, Library, Compass, Star, Settings, Volume2, Headphones, TrendingUp, Users, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SoundCard from "@/components/SoundCard";
import { soundscapes } from "@/data/mockData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Explore = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const isActivePath = (path: string) => {
    if (path === '/dashboard' && location.pathname === '/dashboard') return true;
    if (path !== '/dashboard' && location.pathname.includes(path)) return true;
    return false;
  };
  
  const creators = [
    { id: 1, name: "Ambient Waves", followers: "5.5K", imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=200&h=200" },
    { id: 2, name: "Dream Sequence", followers: "3.9K", imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=200&h=200" },
    { id: 3, name: "Forest Sounds", followers: "5.8K", imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=200&h=200" },
    { id: 4, name: "Ocean Vibes", followers: "8.4K", imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=200&h=200" },
  ];
  
  const genres = ["Nature", "Urban", "Meditation", "Focus", "Sleep", "Ambient", "White Noise", "ASMR"];
  
  const trendingSounds = soundscapes.slice(0, 5);
  const newReleases = soundscapes.slice(3, 8);
  
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
            <Link to="/dashboard" 
              className={`flex items-center gap-3 px-3 py-2 rounded-md ${isActivePath('/dashboard') && location.pathname === '/dashboard' ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors'}`}>
              <Home className="h-5 w-5" />
              <span className="hidden md:block">Home</span>
            </Link>
            <Link to="/dashboard/explore" 
              className={`flex items-center gap-3 px-3 py-2 rounded-md ${isActivePath('/dashboard/explore') ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors'}`}>
              <Compass className="h-5 w-5" />
              <span className="hidden md:block">Explore</span>
            </Link>
            <Link to="/dashboard/library" 
              className={`flex items-center gap-3 px-3 py-2 rounded-md ${isActivePath('/dashboard/library') ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors'}`}>
              <Library className="h-5 w-5" />
              <span className="hidden md:block">Library</span>
            </Link>
            <Link to="/dashboard/playlists" 
              className={`flex items-center gap-3 px-3 py-2 rounded-md ${isActivePath('/dashboard/playlists') ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors'}`}>
              <Star className="h-5 w-5" />
              <span className="hidden md:block">Playlists</span>
            </Link>
          </nav>
          
          <div className="mt-auto">
            <Link to="/dashboard/settings" 
              className={`flex items-center gap-3 px-3 py-2 rounded-md ${isActivePath('/dashboard/settings') ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors'}`}>
              <Settings className="h-5 w-5" />
              <span className="hidden md:block">Settings</span>
            </Link>
            <Link to="/dashboard/upgrade" className="hidden md:block mt-4">
              <Button className="w-full">Upgrade</Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="ml-16 md:ml-64 p-6">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Explore</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search sounds..." 
                className="pl-10 w-48 md:w-64"
              />
            </div>
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-sm font-medium text-primary-foreground cursor-pointer">
              U
            </div>
          </div>
        </header>
        
        {/* Featured New Release - Inspired by the uploaded image */}
        <section className="mb-10">
          <div className="relative overflow-hidden bg-gradient-to-r from-red-900 via-red-800 to-orange-800 rounded-xl">
            <div className="p-6 md:p-10 flex flex-col md:flex-row items-start gap-8 md:gap-16">
              <div className="md:w-1/2 space-y-4">
                <div className="inline-block px-3 py-1 bg-pink-600 text-white text-xs font-medium rounded-full mb-2">
                  NEW MODEL
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white">v4.5 just dropped.</h2>
                <p className="text-white/80 md:text-lg">
                  More expressive sounds, greater variety and accuracy in genres, and richer audio textures. 
                  Unlock new levels of creativity. Available for Pro & Premier users.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  <Button size="lg" className="bg-white text-foreground hover:bg-white/90">
                    Upgrade Now
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                    Listen Now
                  </Button>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-black/20 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-white mb-4">Start with <Badge className="ml-1 mr-1 bg-white/20 hover:bg-white/30 text-white">Rap</Badge> transition to</h3>
                <div className="flex gap-3 mt-6 justify-between">
                  <Badge variant="outline" className="px-4 py-2 border-white/20 text-white">v4 Model</Badge>
                  <Badge className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white">v4.5 Model</Badge>
                  <Button size="icon" variant="outline" className="border-white/20 text-white">
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tabs for different explore sections */}
        <Tabs defaultValue="for-you" className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="for-you" className="text-sm">For You</TabsTrigger>
              <TabsTrigger value="trending" className="text-sm">Trending</TabsTrigger>
              <TabsTrigger value="new" className="text-sm">New Releases</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-3.5 w-3.5" />
                <span>Filter</span>
              </Button>
            </div>
          </div>
          
          <TabsContent value="for-you" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {soundscapes.slice(0, 10).map((sound) => (
                <SoundCard
                  key={sound.id}
                  title={sound.title}
                  category={sound.category}
                  imageUrl={sound.imageUrl !== "/placeholder.svg" 
                    ? sound.imageUrl 
                    : `https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=200&h=200&${sound.id}`}
                  duration={sound.duration}
                  onClick={() => {
                    toast({
                      title: `Playing "${sound.title}"`,
                      description: `${sound.category} • ${sound.duration}`,
                    });
                  }}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="trending" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {trendingSounds.map((sound) => (
                <SoundCard
                  key={sound.id}
                  title={sound.title}
                  category={sound.category}
                  imageUrl={sound.imageUrl !== "/placeholder.svg" 
                    ? sound.imageUrl 
                    : `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200&h=200&${sound.id}`}
                  duration={sound.duration}
                  onClick={() => {
                    toast({
                      title: `Playing "${sound.title}"`,
                      description: `${sound.category} • ${sound.duration}`,
                    });
                  }}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="new" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {newReleases.map((sound) => (
                <SoundCard
                  key={sound.id}
                  title={sound.title}
                  category={sound.category}
                  imageUrl={sound.imageUrl !== "/placeholder.svg" 
                    ? sound.imageUrl 
                    : `https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=200&h=200&${sound.id}`}
                  duration={sound.duration}
                  onClick={() => {
                    toast({
                      title: `Playing "${sound.title}"`,
                      description: `${sound.category} • ${sound.duration}`,
                    });
                  }}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Genre Filters */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Browse by Genre</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <Button
                key={genre}
                variant={selectedCategory === genre ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(selectedCategory === genre ? null : genre)}
                className="rounded-full"
              >
                {genre}
              </Button>
            ))}
          </div>
        </section>
        
        {/* Suggested Creators - Inspired by the uploaded image */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Users className="h-5 w-5" />
              Suggested Creators
            </h2>
            <Button variant="ghost" size="sm" className="text-sm font-medium text-primary">
              See All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {creators.map((creator) => (
              <Card key={creator.id} className="bg-card/50 border-white/5">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src={creator.imageUrl} alt={creator.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{creator.name}</h3>
                      <p className="text-xs text-muted-foreground">{creator.followers} followers</p>
                    </div>
                    <Button size="sm" variant="outline">Follow</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Trending Section */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Trending Now
            </h2>
            <Button 
              onClick={() => navigate("/dashboard/trending")}
              variant="ghost" 
              size="sm" 
              className="text-sm font-medium text-primary"
            >
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {soundscapes.slice(2, 6).map((sound, idx) => (
              <div key={sound.id} className="group cursor-pointer hover:scale-[1.02] transition-all duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl font-bold text-muted-foreground">0{idx + 1}</div>
                  <div className="flex-1">
                    <h3 className="font-medium line-clamp-1">{sound.title}</h3>
                    <p className="text-xs text-muted-foreground">{sound.category}</p>
                  </div>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
                <Separator />
              </div>
            ))}
          </div>
        </section>
        
        {/* Recently Played */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Headphones className="h-5 w-5" />
              Recently Played
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {soundscapes.slice(5, 10).map((sound) => (
              <SoundCard
                key={sound.id}
                title={sound.title}
                category={sound.category}
                imageUrl={sound.imageUrl !== "/placeholder.svg" 
                  ? sound.imageUrl 
                  : `https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=200&h=200&${sound.id}`}
                duration={sound.duration}
                onClick={() => {
                  toast({
                    title: `Playing "${sound.title}"`,
                    description: `${sound.category} • ${sound.duration}`,
                  });
                }}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Explore;
