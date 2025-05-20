
export const categories = [
  {
    id: "sleep",
    title: "Sleep",
    icon: "🌙",
    color: "#9b87f5",
  },
  {
    id: "focus",
    title: "Focus",
    icon: "💡",
    color: "#0EA5E9",
  },
  {
    id: "calm",
    title: "Calm",
    icon: "🧘",
    color: "#10B981",
  },
  {
    id: "teen",
    title: "Teen",
    icon: "🎮",
    color: "#F97316",
  },
  {
    id: "elder",
    title: "Elder",
    icon: "🏞️",
    color: "#8B5CF6",
  },
  {
    id: "solemn",
    title: "Solemn",
    icon: "🕯️",
    color: "#6B7280",
  },
];

export const testimonials = [
  {
    id: 1,
    quote: "I haven't slept this well in years. The customized sounds really help me unwind after a stressful day.",
    author: "Sarah Johnson",
    role: "Nurse, 35",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    quote: "As someone with ADHD, finding focus is a challenge. These soundscapes have become an essential part of my workday.",
    author: "Michael Chen",
    role: "Software Developer, 28",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    quote: "The elder-specific sounds bring back nostalgic memories. Very soothing and perfect for my meditation practice.",
    author: "Eleanor Davis",
    role: "Retired Teacher, 67",
    imageUrl: "/placeholder.svg",
  },
];

export const soundscapes = [
  {
    id: 1,
    title: "Evening Fog",
    category: "Sleep",
    imageUrl: "/placeholder.svg",
    duration: "30 min",
  },
  {
    id: 2,
    title: "Deep Focus Rain",
    category: "Focus",
    imageUrl: "/placeholder.svg",
    duration: "1 hr",
  },
  {
    id: 3,
    title: "Ocean Waves",
    category: "Calm",
    imageUrl: "/placeholder.svg",
    duration: "45 min",
  },
  {
    id: 4,
    title: "Night Pulse",
    category: "Teen",
    imageUrl: "/placeholder.svg",
    duration: "20 min",
  },
  {
    id: 5,
    title: "Nostalgic Woods",
    category: "Elder",
    imageUrl: "/placeholder.svg",
    duration: "35 min",
  },
  {
    id: 6,
    title: "Quiet Reflection",
    category: "Solemn",
    imageUrl: "/placeholder.svg",
    duration: "1 hr",
  },
  {
    id: 7,
    title: "Gentle Piano Rain",
    category: "Sleep",
    imageUrl: "/placeholder.svg",
    duration: "3 hr",
  },
  {
    id: 8,
    title: "90s Ambience",
    category: "Focus",
    imageUrl: "/placeholder.svg",
    duration: "2 hr",
  },
];

export const features = [
  {
    icon: "🎯",
    title: "Choose Your Goal",
    description: "Select what you need - help with sleep, focus, meditation, or stress relief."
  },
  {
    icon: "🧠",
    title: "Set Your Mood",
    description: "Tell us how you're feeling, from energetic to sleepy, so we can match the perfect sound."
  },
  {
    icon: "✨",
    title: "AI Generation",
    description: "Our advanced AI creates a unique soundscape tailored specifically to your needs."
  }
];

export const pricingPlans = [
  {
    title: "Free",
    price: "$0",
    period: "/month",
    description: "For light users who want to explore before upgrading.",
    features: [
      "Access to limited categories (e.g. Sleep, Calm, Focus)",
      "Stream up to 3 tracks/day",
      "Standard audio quality",
      "Ads supported",
    ],
    limitations: [
      "No offline listening",
      "No playlists",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    title: "Premium",
    price: "$9.99",
    period: "/month",
    description: "Designed for individuals serious about relaxation and mental wellness.",
    features: [
      "Unlimited access to all categories",
      "Ad-free high-quality streaming",
      "Offline listening",
      "Create & save unlimited playlists",
      "Sleep timer, loop mode, and mood filters",
      "Personalized recommendations",
    ],
    limitations: [],
    cta: "Try Premium",
    popular: true,
  },
  {
    title: "Family",
    price: "$19.99",
    period: "/month",
    description: "One subscription for the whole household.",
    features: [
      "Everything in Premium",
      "Up to 5 user profiles",
      "Parental control for kids' sounds",
      "Family-shared playlists",
      "Profile-specific recommendations",
      "Early access to new sound packs",
    ],
    limitations: [],
    cta: "Get Family Plan",
    popular: false,
  },
];
