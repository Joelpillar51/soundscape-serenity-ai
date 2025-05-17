
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WaveAnimation from "@/components/WaveAnimation";
import { toast } from "@/hooks/use-toast";

enum OnboardingStep {
  GOAL = 0,
  MOOD = 1,
  AGE = 2,
  PREFERENCES = 3,
  LOADING = 4,
  RESULT = 5,
}

const goalOptions = [
  { id: "sleep", label: "Sleep", icon: "🌙" },
  { id: "focus", label: "Focus", icon: "💡" },
  { id: "meditation", label: "Meditation", icon: "🧘" },
  { id: "calm", label: "Calm", icon: "🌊" },
  { id: "stress", label: "Stress Relief", icon: "🍃" },
];

const moodOptions = [
  { id: "calm", label: "Calm" },
  { id: "energetic", label: "Energetic" },
  { id: "reflective", label: "Reflective" },
  { id: "sleepy", label: "Sleepy" },
];

const ageRangeOptions = [
  { id: "teen", label: "Teen (13-19)" },
  { id: "adult", label: "Adult (20-40)" },
  { id: "elder", label: "Elder (40+)" },
];

const soundPreferences = [
  { id: "nature", label: "Nature" },
  { id: "whitenoise", label: "White Noise" },
  { id: "piano", label: "Piano" },
  { id: "rain", label: "Rain" },
  { id: "wind", label: "Wind" },
  { id: "ocean", label: "Ocean" },
  { id: "chimes", label: "Chimes" },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(OnboardingStep.GOAL);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [selectedMood, setSelectedMood] = useState<string | null>("calm");
  const [moodIntensity, setMoodIntensity] = useState<number[]>([50]);
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const [forSomeoneElse, setForSomeoneElse] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  
  const goToNextStep = () => {
    if (currentStep === OnboardingStep.GOAL && !selectedGoal) {
      toast({
        title: "Please select a goal",
        description: "Choose what type of sound experience you're looking for",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep === OnboardingStep.MOOD && !selectedMood) {
      toast({
        title: "Please select a mood",
        description: "Choose how you're feeling right now",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep === OnboardingStep.AGE && !selectedAge) {
      toast({
        title: "Please select an age range",
        description: "This helps us tailor the sound to your needs",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep === OnboardingStep.LOADING) {
      // Simulate sound generation
      setIsGenerating(true);
      setTimeout(() => {
        setIsGenerating(false);
        setCurrentStep(OnboardingStep.RESULT);
      }, 3000);
      return;
    }
    
    if (currentStep === OnboardingStep.RESULT) {
      // Navigate to dashboard
      navigate("/dashboard");
      return;
    }
    
    setCurrentStep((prev) => prev + 1);
    
    // If going to loading step, automatically proceed to generate
    if (currentStep === OnboardingStep.PREFERENCES) {
      setTimeout(() => {
        setIsGenerating(true);
        setTimeout(() => {
          setIsGenerating(false);
          setCurrentStep(OnboardingStep.RESULT);
        }, 3000);
      }, 500);
    }
  };
  
  const goToPreviousStep = () => {
    if (currentStep === OnboardingStep.GOAL) {
      // Return to landing page
      navigate("/");
      return;
    }
    
    setCurrentStep((prev) => prev - 1);
  };
  
  const togglePreference = (preferenceId: string) => {
    setSelectedPreferences((prev) => {
      if (prev.includes(preferenceId)) {
        return prev.filter((id) => id !== preferenceId);
      } else {
        return [...prev, preferenceId];
      }
    });
  };
  
  const getStepTitle = () => {
    switch (currentStep) {
      case OnboardingStep.GOAL:
        return "Select Your Goal";
      case OnboardingStep.MOOD:
        return "Choose Your Mood";
      case OnboardingStep.AGE:
        return "Select Age Range";
      case OnboardingStep.PREFERENCES:
        return "Sound Preferences (Optional)";
      case OnboardingStep.LOADING:
        return "Generating Your Soundscape";
      case OnboardingStep.RESULT:
        return "Your Calm, Created";
      default:
        return "Onboarding";
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-6 border-b border-white/5">
        <div className="container mx-auto flex items-center">
          <Button variant="ghost" size="icon" onClick={goToPreviousStep}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1 text-center">
            <h1 className="text-lg font-medium">{getStepTitle()}</h1>
          </div>
          <div className="w-10"></div> {/* Spacer for alignment */}
        </div>
      </header>
      
      <main className="flex-1 flex flex-col">
        <div className="container mx-auto px-4 md:px-6 py-10 max-w-3xl">
          {/* Progress Bar */}
          <div className="w-full bg-secondary h-1 rounded-full mb-10">
            <div 
              className="bg-primary h-1 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / (OnboardingStep.RESULT)) * 100}%` }}
            ></div>
          </div>
          
          {/* Step Content */}
          <div className="mb-10">
            {currentStep === OnboardingStep.GOAL && (
              <div className="space-y-6">
                <p className="text-muted-foreground text-center mb-6">
                  What type of sound experience are you looking for today?
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {goalOptions.map((goal) => (
                    <div
                      key={goal.id}
                      className={`flex flex-col items-center justify-center gap-3 p-5 rounded-xl border cursor-pointer transition-all duration-300 ${
                        selectedGoal === goal.id
                          ? "border-primary bg-primary/10"
                          : "border-white/5 bg-card hover:bg-card/80"
                      }`}
                      onClick={() => setSelectedGoal(goal.id)}
                    >
                      <span className="text-3xl">{goal.icon}</span>
                      <span className="text-sm font-medium">{goal.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {currentStep === OnboardingStep.MOOD && (
              <div className="space-y-6">
                <p className="text-muted-foreground text-center mb-6">
                  How are you feeling right now?
                </p>
                <Tabs 
                  defaultValue="calm" 
                  value={selectedMood || "calm"}
                  onValueChange={(value) => setSelectedMood(value)}
                  className="w-full"
                >
                  <TabsList className="grid grid-cols-4 mb-6">
                    {moodOptions.map((mood) => (
                      <TabsTrigger key={mood.id} value={mood.id}>
                        {mood.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
                
                <div className="space-y-3">
                  <label className="text-sm text-muted-foreground">
                    Intensity: {moodIntensity[0]}%
                  </label>
                  <Slider
                    value={moodIntensity}
                    onValueChange={setMoodIntensity}
                    max={100}
                    step={1}
                  />
                </div>
              </div>
            )}
            
            {currentStep === OnboardingStep.AGE && (
              <div className="space-y-6">
                <p className="text-muted-foreground text-center mb-6">
                  Select an age range to help us tailor the sound to your needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {ageRangeOptions.map((age) => (
                    <div
                      key={age.id}
                      className={`flex items-center justify-center p-5 rounded-xl border cursor-pointer transition-all duration-300 ${
                        selectedAge === age.id
                          ? "border-primary bg-primary/10"
                          : "border-white/5 bg-card hover:bg-card/80"
                      }`}
                      onClick={() => setSelectedAge(age.id)}
                    >
                      <span className="text-sm font-medium">{age.label}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-center mt-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-white/20"
                      checked={forSomeoneElse}
                      onChange={() => setForSomeoneElse(!forSomeoneElse)}
                    />
                    <span className="text-sm text-muted-foreground">
                      I'm creating for someone else
                    </span>
                  </label>
                </div>
              </div>
            )}
            
            {currentStep === OnboardingStep.PREFERENCES && (
              <div className="space-y-6">
                <p className="text-muted-foreground text-center mb-6">
                  Select any sound preferences (optional).
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {soundPreferences.map((pref) => (
                    <div
                      key={pref.id}
                      className={`px-4 py-2 rounded-full border cursor-pointer transition-all duration-300 ${
                        selectedPreferences.includes(pref.id)
                          ? "border-primary bg-primary/10"
                          : "border-white/5 bg-secondary hover:bg-secondary/80"
                      }`}
                      onClick={() => togglePreference(pref.id)}
                    >
                      <span className="text-sm">{pref.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {currentStep === OnboardingStep.LOADING && (
              <div className="flex flex-col items-center justify-center py-10">
                <div className="relative w-20 h-20 mb-8">
                  <div className="waveform scale-150">
                    <div className="waveform-bar h-6 animate-wave-1"></div>
                    <div className="waveform-bar h-10 animate-wave-2"></div>
                    <div className="waveform-bar h-16 animate-wave-3"></div>
                    <div className="waveform-bar h-12 animate-wave-4"></div>
                    <div className="waveform-bar h-8 animate-wave-5"></div>
                    <div className="waveform-bar h-10 animate-wave-1"></div>
                    <div className="waveform-bar h-14 animate-wave-2"></div>
                    <div className="waveform-bar h-8 animate-wave-3"></div>
                    <div className="waveform-bar h-12 animate-wave-4"></div>
                    <div className="waveform-bar h-6 animate-wave-5"></div>
                  </div>
                </div>
                <p className="text-lg font-medium mb-2">Creating your perfect sound...</p>
                <p className="text-sm text-muted-foreground text-center max-w-md">
                  "Breathing space is coming... Our AI is composing a unique soundscape just for you."
                </p>
              </div>
            )}
            
            {currentStep === OnboardingStep.RESULT && (
              <div className="flex flex-col items-center">
                <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden bg-card/50 p-6 border border-white/5 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-sound-purple/20 to-transparent"></div>
                  <div className="relative z-10 h-full flex flex-col items-center justify-center">
                    <WaveAnimation />
                    <h3 className="text-xl font-medium mt-6 mb-2">Evening Calm</h3>
                    <p className="text-sm text-muted-foreground mb-4">30-minute sleep soundscape</p>
                    
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs">
                        {selectedGoal ? goalOptions.find(g => g.id === selectedGoal)?.label : "Sleep"}
                      </span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs">
                        {selectedMood ? moodOptions.find(m => m.id === selectedMood)?.label : "Calm"}
                      </span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs">
                        30 min
                      </span>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline">
                        Regenerate
                      </Button>
                      <Button size="sm">
                        Save to Playlist
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-medium mb-2">Perfect!</h3>
                  <p className="text-sm text-muted-foreground mb-6 max-w-md">
                    Your personalized soundscape is ready. Continue to your dashboard to explore more or save this to your library.
                  </p>
                </div>
              </div>
            )}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button 
              variant="ghost" 
              onClick={goToPreviousStep}
              disabled={isGenerating}
            >
              {currentStep === OnboardingStep.GOAL ? "Cancel" : "Back"}
            </Button>
            
            <Button 
              onClick={goToNextStep}
              disabled={isGenerating}
            >
              {currentStep === OnboardingStep.RESULT ? (
                "Go to Dashboard"
              ) : currentStep === OnboardingStep.PREFERENCES ? (
                "Generate"
              ) : (
                <>Next <ArrowRight className="ml-2 h-4 w-4" /></>
              )}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Onboarding;
