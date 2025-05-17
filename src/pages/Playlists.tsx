
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PlaylistCard from "@/components/PlaylistCard";
import PlaylistDetailView from "@/components/PlaylistDetailView";
import { playlists } from "@/data/playlistsData";
import { toast } from "@/hooks/use-toast";

const Playlists = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(playlists[0]);
  const navigate = useNavigate();

  const handleCreatePlaylist = () => {
    toast({
      title: "Create playlist",
      description: "This feature is coming soon!",
    });
  };

  return (
    <div className="min-h-screen pb-20">
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
