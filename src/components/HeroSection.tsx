import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-showroom.jpg";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-marble-dark/70 via-marble-dark/60 to-primary/80"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gold-accent/20 blur-xl animate-float opacity-60"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 rounded-full bg-stone-warm/30 blur-lg animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Animated Badge */}
        <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-gold-accent rounded-full mr-2 animate-pulse"></span>
          Over 20 Years of Tile Expertise
        </div>
        
        {/* Main Headline - Artistic Typography */}
        <div className="space-y-4 mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-playfair font-bold text-white leading-none animate-fade-in-up">
            Expert Tile
          </h1>
          <div className="relative">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-playfair font-bold leading-none animate-slide-in-right text-transparent bg-clip-text bg-gradient-to-r from-gold-accent to-white">
              Guidance
            </h1>
            <div className="absolute -top-4 -right-8 w-16 h-1 bg-gold-accent animate-shimmer"></div>
          </div>
          <div className="flex items-center justify-center space-x-4 animate-slide-in-left">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/50"></div>
            <p className="text-xl sm:text-2xl font-cormorant italic text-gold-accent">
              Right Here in Roselle Park
            </p>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-white/50"></div>
          </div>
        </div>
        
        {/* Subheadline */}
        <p className="text-xl sm:text-2xl font-inter text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Discover timeless tile options with personal, professional help from the LaRaj team — 
          serving homeowners, designers, and contractors with unmatched craftsmanship.
        </p>
        
        {/* CTA with Artistic Elements */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-scale-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-10 py-5 rounded-full font-inter font-semibold shadow-2xl hover:shadow-gold-accent/25 transition-all duration-500 group"
          >
            <span className="mr-2 text-xl">📅</span>
            Book a Free Consultation
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Button>
          
          <button className="text-white/80 hover:text-white font-inter font-medium flex items-center space-x-2 group transition-all duration-300">
            <span>Explore Our Work</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;