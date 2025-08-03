import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-showroom.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-marble-dark/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Expert Tile Guidance.{" "}
          <span className="text-gold-accent">Right Here in Roselle Park.</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-marble-light mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover timeless tile options with personal, professional help from the LaRaj team — 
          serving homeowners, designers, and contractors for over 20 years.
        </p>
        
        <Button 
          variant="hero" 
          size="lg" 
          className="text-lg px-8 py-4 rounded-lg"
        >
          📅 Book a Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;