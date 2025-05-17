
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 py-4 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="waveform scale-75">
            <div className="waveform-bar h-4 animate-wave-1"></div>
            <div className="waveform-bar h-6 animate-wave-2"></div>
            <div className="waveform-bar h-8 animate-wave-3"></div>
            <div className="waveform-bar h-5 animate-wave-4"></div>
            <div className="waveform-bar h-3 animate-wave-5"></div>
          </div>
          <span className="text-xl font-bold">Sound Sanctuary</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            How It Works
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Pricing
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Link to="/onboarding">
            <Button>Try Free</Button>
          </Link>
          <Link to="/dashboard" className="hidden md:block">
            <Button variant="outline">Sign In</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
