import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      text: "LaRaj Tile & Marble is the absolute BEST! They truly care about their customers and go over and above to assist in the project you're doing.",
      author: "Gina V.",
      role: "Homeowner",
      rating: 5
    },
    {
      text: "We highly recommend LaRaj to our interior design clients. Their renderings are detailed, and their installers are excellent.",
      author: "Mimi & Hill Interiors",
      role: "Interior Design Firm",
      rating: 5
    },
    {
      text: "We love working with them on all our tile projects — kitchen backsplash, bathroom remodels, office floors. Always go out of their way.",
      author: "Nicola A.",
      role: "Contractor",
      rating: 5
    },
    {
      text: "They helped me design 6 bathrooms and a laundry room — professional, creative, and truly care about your style.",
      author: "Darcy B.",
      role: "Homeowner",
      rating: 5
    },
    {
      text: "As true professionals, they're not afraid to say 'that's a bad idea' — and that's exactly why I trust them.",
      author: "Jim R.",
      role: "Commercial Client",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-primary to-gold-accent blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-gradient-to-tl from-stone-warm to-marble-light blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Artistic Header */}
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-8 h-px bg-gold-accent"></div>
              <span className="text-sm font-inter font-medium text-muted-foreground uppercase tracking-wider">Client Stories</span>
              <div className="w-8 h-px bg-gold-accent"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold text-foreground mb-8 leading-tight">
              Our Customers{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold-accent">
                  Say It Best
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 to-gold-accent/30 rounded-full"></div>
              </span>
            </h2>
            
            <p className="text-xl font-cormorant text-muted-foreground italic">
              Two decades of trust, one tile at a time
            </p>
          </div>
        </div>

        {/* Enhanced Testimonial */}
        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Card className="shadow-2xl border-stone-warm bg-gradient-to-br from-white to-marble-light/50 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-20 h-20">
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold-accent rounded-tl-lg"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-20 h-20">
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold-accent rounded-br-lg"></div>
            </div>
            
            <CardContent className="p-12 sm:p-16 relative">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="text-6xl sm:text-8xl text-gold-accent/20 mb-8 font-playfair leading-none select-none">
                  "
                </div>
                
                {/* Rating Stars */}
                <div className="flex justify-center mb-8">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl text-gold-accent animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
                      ⭐
                    </span>
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-xl sm:text-3xl font-cormorant text-marble-dark leading-relaxed mb-10 max-w-4xl mx-auto">
                  {testimonials[currentIndex].text}
                </blockquote>
                
                {/* Author Info */}
                <div className="space-y-2">
                  <cite className="text-xl sm:text-2xl font-playfair font-semibold text-primary not-italic">
                    {testimonials[currentIndex].author}
                  </cite>
                  <p className="text-muted-foreground font-inter font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Pagination */}
          <div className="flex justify-center mt-12 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative transition-all duration-500 ${
                  index === currentIndex 
                    ? 'w-12 h-3 bg-gradient-to-r from-primary to-gold-accent rounded-full' 
                    : 'w-3 h-3 bg-stone-warm hover:bg-accent rounded-full hover:scale-125'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-gold-accent rounded-full animate-shimmer opacity-75"></div>
                )}
              </button>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-playfair font-bold text-primary">20+</div>
              <p className="text-sm font-inter text-muted-foreground uppercase tracking-wider">Years of Excellence</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-playfair font-bold text-primary">1000+</div>
              <p className="text-sm font-inter text-muted-foreground uppercase tracking-wider">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-playfair font-bold text-primary">100%</div>
              <p className="text-sm font-inter text-muted-foreground uppercase tracking-wider">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;