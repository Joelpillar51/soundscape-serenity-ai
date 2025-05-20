
import { Home, Compass, LibraryIcon, Star, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const UpgradePage = () => {
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
              className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
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
              <Button className="w-full bg-accent">Upgrade</Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="ml-16 md:ml-64 p-6">
        <div className="flex flex-col gap-8">
          <div className="text-center mb-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Upgrade Your Experience</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Get unlimited access to all premium features and sounds with our premium plans.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card>
              <CardHeader>
                <CardTitle className="flex flex-col gap-2">
                  <span>Free Plan</span>
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-sm font-normal text-muted-foreground">/month</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 min-h-[240px]">
                <p className="text-sm text-muted-foreground mb-4">For light users who want to explore before upgrading.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Access to limited categories (e.g. Sleep, Calm, Focus)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Stream up to 3 tracks/day</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Standard audio quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Ads supported</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">No offline listening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">No playlists</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Current Plan</Button>
              </CardFooter>
            </Card>
            
            {/* Premium Plan */}
            <Card className="border-primary/50 shadow-lg shadow-primary/10">
              <CardHeader>
                <Badge className="w-fit mb-2">Most Popular</Badge>
                <CardTitle className="flex flex-col gap-2">
                  <span>Premium Plan</span>
                  <span className="text-3xl font-bold">$9.99</span>
                  <span className="text-sm font-normal text-muted-foreground">/month</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 min-h-[240px]">
                <p className="text-sm text-muted-foreground mb-4">Designed for individuals serious about relaxation and mental wellness.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Unlimited access to all categories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Ad-free high-quality streaming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Offline listening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Create & save unlimited playlists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Sleep timer, loop mode, and mood filters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Personalized recommendations</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Upgrade Now</Button>
              </CardFooter>
            </Card>
            
            {/* Family Plan */}
            <Card>
              <CardHeader>
                <CardTitle className="flex flex-col gap-2">
                  <span>Family Plan</span>
                  <span className="text-3xl font-bold">$19.99</span>
                  <span className="text-sm font-normal text-muted-foreground">/month</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 min-h-[240px]">
                <p className="text-sm text-muted-foreground mb-4">One subscription for the whole household.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Everything in Premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Up to 5 user profiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Parental control for kids' sounds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Family-shared playlists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Profile-specific recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Early access to new sound packs</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Upgrade to Family</Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="text-center mt-8 max-w-xl mx-auto">
            <h2 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h2>
            <p className="text-muted-foreground">
              All plans come with a 14-day money-back guarantee. If you're not satisfied, we'll provide a full refund, no questions asked.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradePage;
