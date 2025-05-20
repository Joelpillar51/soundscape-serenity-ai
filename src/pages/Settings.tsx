
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Compass, LibraryIcon, Star, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const SettingsPage = () => {
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
              className="flex items-center gap-3 px-3 py-2 rounded-md bg-secondary text-foreground">
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
          <h1 className="text-3xl font-bold">Settings</h1>
          
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="space-y-4">
              <Card>
                <CardContent className="p-4 space-y-4">
                  <h2 className="text-xl font-semibold">Profile Information</h2>
                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="display-name">Display Name</Label>
                      <Input id="display-name" placeholder="Your display name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <Button className="mt-4">Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold">Password</h2>
                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                  <Button className="mt-4">Update Password</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences">
              <Card>
                <CardContent className="p-4 space-y-4">
                  <h2 className="text-xl font-semibold">Audio Preferences</h2>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="font-medium">High Quality Streaming</h3>
                      <p className="text-sm text-muted-foreground">Stream music at a higher bitrate</p>
                    </div>
                    <Switch id="high-quality" />
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="font-medium">Crossfade</h3>
                      <p className="text-sm text-muted-foreground">Smooth transition between tracks</p>
                    </div>
                    <Switch id="crossfade" />
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="font-medium">Offline Mode</h3>
                      <p className="text-sm text-muted-foreground">Download sounds for offline listening</p>
                    </div>
                    <Switch id="offline-mode" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardContent className="p-4 space-y-4">
                  <h2 className="text-xl font-semibold">Notification Settings</h2>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="font-medium">New Sounds</h3>
                      <p className="text-sm text-muted-foreground">Get notified about new sounds</p>
                    </div>
                    <Switch id="new-sounds-notifications" />
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="font-medium">Updates</h3>
                      <p className="text-sm text-muted-foreground">Get notified about app updates</p>
                    </div>
                    <Switch id="updates-notifications" />
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="font-medium">Marketing</h3>
                      <p className="text-sm text-muted-foreground">Receive marketing emails</p>
                    </div>
                    <Switch id="marketing-notifications" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
