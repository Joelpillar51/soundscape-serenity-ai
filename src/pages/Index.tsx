
import { Link } from "react-router-dom";
import { ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import SoundCard from "@/components/SoundCard";
import FeatureItem from "@/components/FeatureItem";
import TestimonialCard from "@/components/TestimonialCard";
import WaveAnimation from "@/components/WaveAnimation";
import { categories, testimonials, soundscapes, features, pricingPlans } from "@/data/mockData";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-1 mb-10 lg:mb-0 lg:pr-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
                Your Personal{" "}
                <span className="bg-gradient-to-r from-sound-orange to-sound-purple bg-clip-text text-transparent">
                  Sound Sanctuary
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Expertly crafted sounds for sleep, focus, and calm — tailored by your mood and age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/onboarding">
                  <Button size="lg" className="w-full sm:w-auto">
                    Try Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    How It Works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden bg-card p-6 border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-sound-purple/20 to-transparent"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                  <WaveAnimation />
                  <h3 className="text-xl font-medium mt-6 mb-2">Evening Calm</h3>
                  <p className="text-sm text-muted-foreground">30-minute sleep soundscape</p>
                  <Button size="sm" className="mt-6">
                    Generate Your Sound
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Sound Categories</h2>
            <p className="text-muted-foreground text-center max-w-xl">
              Explore our diverse range of sound experiences tailored for different needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                icon={<span className="text-2xl">{category.icon}</span>}
                color={category.color}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-center max-w-xl">
              Create your perfect soundscape in three simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={<span className="text-xl">{feature.icon}</span>}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/onboarding">
              <Button size="lg">
                Create Your First Sound <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Popular Soundscapes */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Popular Soundscapes</h2>
            <Link to="/explore" className="text-sm font-medium text-primary">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {soundscapes.slice(0, 8).map((sound) => (
              <SoundCard
                key={sound.id}
                title={sound.title}
                category={sound.category}
                imageUrl={sound.imageUrl}
                duration={sound.duration}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground text-center max-w-xl">
              Don't just take our word for it - hear from people who have transformed their sound experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                imageUrl={testimonial.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <section id="pricing" className="py-20 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground text-center max-w-xl">
              Choose the plan that's right for you and start your sound journey today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl p-6 border ${
                  plan.popular
                    ? "border-primary"
                    : "border-white/5"
                } flex flex-col h-full relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-0 right-0 flex justify-center">
                    <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-2">{plan.title} Plan</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-5 w-5 text-primary/80 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  
                  {plan.limitations && plan.limitations.length > 0 && plan.limitations.map((limitation, i) => (
                    <li key={`limitation-${i}`} className="flex items-start gap-2 text-sm">
                      <X className="h-5 w-5 text-destructive/80 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{limitation}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={`w-full ${plan.popular ? "" : "bg-card-foreground/10 hover:bg-card-foreground/20 text-card-foreground"}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-sound-purple/20 to-sound-blue/20 rounded-2xl p-8 md:p-12 text-center border border-white/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Sound Experience?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of users who have discovered their perfect sound sanctuary.
            </p>
            <Link to="/onboarding">
              <Button size="lg">
                Create Your First Sound <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
