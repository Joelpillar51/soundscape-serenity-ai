
export interface Sound {
  id: number;
  title: string;
  artist?: string;
  duration: string;
  imageUrl: string;
  category: string;
  dateAdded?: string;
}

export interface Playlist {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  createdBy: string;
  soundCount: number;
  totalDuration: string;
  sounds: Sound[];
}

export const playlists: Playlist[] = [
  {
    id: 1,
    title: "Deep Focus",
    description: "Ambient sounds to help you concentrate",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=500&h=500",
    createdBy: "Sound Sanctuary",
    soundCount: 5,
    totalDuration: "2h 45m",
    sounds: [
      {
        id: 1,
        title: "Ocean Waves",
        artist: "Nature Sounds",
        duration: "30:00",
        imageUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=200&h=200",
        category: "Calm",
        dateAdded: "2 days ago"
      },
      {
        id: 2,
        title: "Rain on Leaves",
        artist: "Ambient Creations",
        duration: "45:00",
        imageUrl: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&q=80&w=200&h=200",
        category: "Focus",
        dateAdded: "1 week ago"
      },
      {
        id: 3,
        title: "Quiet Piano",
        artist: "Classical Minds",
        duration: "25:00",
        imageUrl: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=200&h=200",
        category: "Focus",
        dateAdded: "2 weeks ago"
      },
      {
        id: 4,
        title: "Forest Ambience",
        artist: "Nature Sounds",
        duration: "35:00",
        imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=200&h=200",
        category: "Calm",
        dateAdded: "3 weeks ago"
      },
      {
        id: 5,
        title: "White Noise",
        artist: "Sound Lab",
        duration: "30:00",
        imageUrl: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&q=80&w=200&h=200",
        category: "Sleep",
        dateAdded: "1 month ago"
      }
    ]
  },
  {
    id: 2,
    title: "Peaceful Night",
    description: "Relaxing sounds for a good night's sleep",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500&h=500",
    createdBy: "Sound Sanctuary",
    soundCount: 4,
    totalDuration: "3h 20m",
    sounds: [
      {
        id: 6,
        title: "Gentle Rain",
        artist: "Sleep Sounds",
        duration: "60:00",
        imageUrl: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80&w=200&h=200",
        category: "Sleep",
        dateAdded: "3 days ago"
      },
      {
        id: 7,
        title: "Soft Lullaby",
        artist: "Dream Weavers",
        duration: "45:00",
        imageUrl: "https://images.unsplash.com/photo-1535079766073-5c1513f1d8e8?auto=format&fit=crop&q=80&w=200&h=200",
        category: "Sleep",
        dateAdded: "5 days ago"
      },
      {
        id: 8,
        title: "Night Cricket Chorus",
        artist: "Nature Sounds",
        duration: "55:00",
        imageUrl: "https://images.unsplash.com/photo-1472552944129-b035e9bd8ff5?auto=format&fit=crop&q=80&w=200&h=200",
        category: "Sleep",
        dateAdded: "1 week ago"
      },
      {
        id: 9,
        title: "Slow Waves",
        artist: "Ocean Dreams",
        duration: "40:00",
        imageUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=200&h=200",
        category: "Sleep",
        dateAdded: "2 weeks ago"
      }
    ]
  },
  {
    id: 3,
    title: "Morning Energy",
    description: "Sounds to kickstart your day with energy",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500&h=500",
    createdBy: "Sound Sanctuary",
    soundCount: 3,
    totalDuration: "1h 15m",
    sounds: [
      {
        id: 10,
        title: "Sunrise Melody",
        artist: "Morning Vibes",
        duration: "25:00",
        imageUrl: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&q=80&w=200&h=200",
        category: "Focus",
        dateAdded: "4 days ago"
      },
      {
        id: 11,
        title: "Birds Chirping",
        artist: "Nature Sounds",
        duration: "20:00",
        imageUrl: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=200&h=200",
        category: "Calm",
        dateAdded: "1 week ago"
      },
      {
        id: 12,
        title: "Morning Coffee",
        artist: "Urban Sounds",
        duration: "30:00",
        imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=200&h=200",
        category: "Focus",
        dateAdded: "2 weeks ago"
      }
    ]
  },
  {
    id: 4,
    title: "Meditation Session",
    description: "Calming sounds for deep meditation",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500&h=500",
    createdBy: "Sound Sanctuary",
    soundCount: 4,
    totalDuration: "2h 30m",
    sounds: [
      {
        id: 13,
        title: "Tibetan Bowls",
        artist: "Meditation Masters",
        duration: "45:00",
        imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=200&h=200",
        category: "Calm",
        dateAdded: "2 days ago"
      },
      {
        id: 14,
        title: "Deep Ohm",
        artist: "Zen Sounds",
        duration: "35:00",
        imageUrl: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=200&h=200",
        category: "Calm",
        dateAdded: "1 week ago"
      },
      {
        id: 15,
        title: "Nature Harmony",
        artist: "Earth Tones",
        duration: "30:00",
        imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=200&h=200",
        category: "Calm",
        dateAdded: "3 weeks ago"
      },
      {
        id: 16,
        title: "Mindful Moments",
        artist: "Presence",
        duration: "40:00",
        imageUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=200&h=200",
        category: "Calm",
        dateAdded: "1 month ago"
      }
    ]
  },
  {
    id: 5,
    title: "Study Time",
    description: "Background sounds for effective studying",
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=500&h=500",
    createdBy: "Sound Sanctuary",
    soundCount: 3,
    totalDuration: "2h 15m",
    sounds: [
      {
        id: 17,
        title: "Library Ambience",
        artist: "Study Spaces",
        duration: "50:00",
        imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=200&h=200",
        category: "Focus",
        dateAdded: "5 days ago"
      },
      {
        id: 18,
        title: "Soft Keyboard Typing",
        artist: "Work Sounds",
        duration: "45:00",
        imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=200&h=200",
        category: "Focus",
        dateAdded: "1 week ago"
      },
      {
        id: 19,
        title: "Minimal Beats",
        artist: "Focus Factory",
        duration: "40:00",
        imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=200&h=200",
        category: "Focus",
        dateAdded: "2 weeks ago"
      }
    ]
  }
];
