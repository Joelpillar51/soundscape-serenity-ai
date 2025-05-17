
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, Plus, Home, Library, Compass, Star, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PlaylistCard from "@/components/PlaylistCard";
import PlaylistDetailView from "@/components/PlaylistDetailView";
import { playlists } from "@/data/playlistsData";
import { toast } from "@/hooks/use-toast";

const Playlists = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState<null | typeof playlists[0]>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleCreatePlaylist = () => {
    toast({
      title: "Create playlist",
      description: "This feature is coming soon!",
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
          <h1 className="text-2xl font-bold">Your Playlists</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search playlists..." 
                className="pl-10 w-48 md:w-64"
              />
            </div>
            <Button onClick={handleCreatePlaylist}>
              <Plus className="h-4 w-4 mr-2" />
              New Playlist
            </Button>
          </div>
        </header>

        {/* Playlists Grid */}
        <section className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {playlists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                playlist={playlist}
                onClick={() => setSelectedPlaylist(playlist)}
                isSelected={selectedPlaylist?.id === playlist.id}
              />
            ))}
          </div>
        </section>

        {/* Selected Playlist Detail */}
        {selectedPlaylist && (
          <PlaylistDetailView playlist={selectedPlaylist} />
        )}
      </div>
    </div>
  );
};

export default Playlists;
