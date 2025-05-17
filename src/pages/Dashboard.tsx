
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Play, Pause, Search, Home, Library, Compass, Star, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SoundCard from "@/components/SoundCard";
import Player from "@/components/Player";
import { soundscapes, categories } from "@/data/mockData";
import CategoryCard from "@/components/CategoryCard";
import { toast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    toast({
      title: isPlaying ? "Paused" : "Playing",
      description: isPlaying ? "Your soundscape has been paused" : "Your soundscape is now playing",
      duration: 2000,
    });
  };

  const handleGenerateSound = () => {
    toast({
      title: "Generating sound",
      description: "Your personalized soundscape is being created...",
    });
    // This would normally trigger the AI generation process
    setTimeout(() => {
      toast({
        title: "Sound generated",
        description: "Your new soundscape is ready to play",
        variant: "success",
      });
    }, 2000);
  };

  const handleSaveToPlaylist = () => {
    toast({
      title: "Saved to playlist",
      description: "This soundscape has been added to your favorites",
    });
  };

  const isActivePath = (path: string) => {
    if (path === '/dashboard' && location.pathname === '/dashboard') return true;
    if (path !== '/dashboard' && location.pathname.includes(path)) return true;
    return false;
  };

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
          <h1 className="text-2xl font-bold">Home</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search soundscapes..." 
                className="pl-10 w-48 md:w-64"
              />
            </div>
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-sm font-medium text-primary-foreground cursor-pointer"
                 onClick={() => navigate("/dashboard/settings")}>
              U
            </div>
          </div>
        </header>
        
        {/* Daily Recommendation */}
        <section className="mb-12">
          <div className="bg-card/50 rounded-xl p-6 border border-white/5">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="relative w-full md:w-48 aspect-square rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=500&h=500" 
                  alt="Today's Soundscape" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button 
                    onClick={togglePlay} 
                    size="icon" 
                    className="rounded-full h-12 w-12 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <h2 className="text-xl font-bold mb-2">Today's Soundscape: "Evening Fog"</h2>
                <p className="text-muted-foreground mb-4 max-w-2xl">
                  A gentle blend of soft piano and distant rainfall, perfect for unwinding after a long day. 
                  Created specifically for your sleep preferences.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-secondary rounded-full text-xs">Sleep</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-xs">Piano</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-xs">30 min</span>
                </div>
                <div className="flex gap-3 justify-center md:justify-start">
                  <Button size="sm" onClick={togglePlay}>
                    {isPlaying ? "Pause" : "Play Now"}
                  </Button>
                  <Button size="sm" variant="outline" onClick={handleSaveToPlaylist}>
                    Save to Playlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Categories</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                icon={category.icon}
                color={category.color}
                onClick={() => navigate(`/dashboard/explore?category=${category.id}`)}
              />
            ))}
          </div>
        </section>
        
        {/* Continue Listening */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Continue Listening</h2>
            <Link to="/dashboard/recent" className="text-sm font-medium text-primary">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {soundscapes.slice(0, 5).map((sound) => (
              <SoundCard
                key={sound.id}
                title={sound.title}
                category={sound.category}
                imageUrl={sound.imageUrl !== "/placeholder.svg" 
                  ? sound.imageUrl 
                  : `https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=200&h=200&${sound.id}`}
                duration={sound.duration}
                onClick={() => {
                  setIsPlaying(true);
                  toast({
                    title: `Playing "${sound.title}"`,
                    description: `${sound.category} • ${sound.duration}`,
                  });
                }}
              />
            ))}
          </div>
        </section>
        
        {/* Mini Sound Builder */}
        <section className="mb-12">
          <div className="bg-card/50 rounded-xl p-6 border border-white/5">
            <h2 className="text-xl font-bold mb-4">Quick Generate</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Mood</label>
                <select className="w-full bg-secondary border border-white/5 rounded-md p-2 text-sm">
                  <option value="calm">Calm</option>
                  <option value="energetic">Energetic</option>
                  <option value="reflective">Reflective</option>
                  <option value="sleepy">Sleepy</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Length</label>
                <select className="w-full bg-secondary border border-white/5 rounded-md p-2 text-sm">
                  <option value="10">10 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="120">2 hours</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Category</label>
                <select className="w-full bg-secondary border border-white/5 rounded-md p-2 text-sm">
                  <option value="sleep">Sleep</option>
                  <option value="focus">Focus</option>
                  <option value="meditation">Meditation</option>
                  <option value="calm">Calm</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button onClick={handleGenerateSound}>Generate Sound</Button>
            </div>
          </div>
        </section>
        
        {/* For You */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Made For You</h2>
            <Link to="/dashboard/recommendations" className="text-sm font-medium text-primary">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {soundscapes.slice(3, 8).map((sound) => (
              <SoundCard
                key={sound.id}
                title={sound.title}
                category={sound.category}
                imageUrl={sound.imageUrl !== "/placeholder.svg" 
                  ? sound.imageUrl 
                  : `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200&h=200&${sound.id}`}
                duration={sound.duration}
                onClick={() => {
                  setIsPlaying(true);
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
      
      {/* Player */}
      <Player 
        isPlaying={isPlaying} 
        onPlayPause={togglePlay}
        coverUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=120&h=120" 
      />
    </div>
  );
};

export default Dashboard;
