import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useRef, useEffect } from "react";
import tileGallery1 from "@/assets/tile-gallery-1.jpg";
import tileGallery2 from "@/assets/tile-gallery-2.jpg";
import tileGallery3 from "@/assets/tile-gallery-3.jpg";
import tileGallery4 from "@/assets/tile-gallery-4.jpg";

const TileGallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
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

  const galleryImages = [
    { 
      src: tileGallery1, 
      alt: "Luxury marble and ceramic tile collection", 
      caption: "In-stock | Visit to see in person",
      title: "Marble Collection",
      description: "Timeless elegance in natural stone"
    },
    { 
      src: tileGallery2, 
      alt: "Elegant bathroom marble installation", 
      caption: "In-stock | Visit to see in person",
      title: "Bathroom Elegance",
      description: "Sophisticated marble installations"
    },
    { 
      src: tileGallery3, 
      alt: "Modern kitchen backsplash tiles", 
      caption: "In-stock | Visit to see in person",
      title: "Kitchen Artistry",
      description: "Modern backsplash designs"
    },
    { 
      src: tileGallery4, 
      alt: "Natural stone flooring display", 
      caption: "In-stock | Visit to see in person",
      title: "Flooring Mastery",
      description: "Premium stone flooring solutions"
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-marble relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gold-accent/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-stone-warm/20 blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Artistic Header */}
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-8 h-px bg-gold-accent"></div>
              <span className="text-sm font-inter font-medium text-muted-foreground uppercase tracking-wider">Our Showroom</span>
              <div className="w-8 h-px bg-gold-accent"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold text-marble-dark mb-8 leading-tight">
              Step Inside the{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold-accent">
                  LaRaj Experience
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 to-gold-accent/30 rounded-full"></div>
              </span>
            </h2>
            
            <p className="text-xl font-cormorant text-muted-foreground max-w-3xl mx-auto leading-relaxed italic">
              Every tile you see here is available in our Roselle Park showroom. 
              From classic marble to bold modern designs, find inspiration that speaks to your vision.
            </p>
          </div>
        </div>

        {/* Interactive Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {galleryImages.map((image, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden shadow-elegant hover:shadow-2xl transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                aspectRatio: index % 2 === 0 ? '4/3' : '3/4'
              }}
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="relative h-full overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-marble-dark/80 via-marble-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className={`transform transition-all duration-500 ${
                    hoveredImage === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                      {image.title}
                    </h3>
                    <p className="text-white/90 font-inter mb-4 leading-relaxed">
                      {image.description}
                    </p>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                      <span className="w-2 h-2 bg-gold-accent rounded-full mr-2"></span>
                      {image.caption}
                    </div>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg font-cormorant italic text-muted-foreground mb-6">
              Ready to see these masterpieces in person? Our showroom awaits your visit.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="cta" size="lg" className="text-lg px-10 py-4 font-inter font-semibold shadow-elegant hover:shadow-2xl transition-all duration-500 group" asChild>
              <a href="/gallery">
                <span className="mr-2 text-xl">📍</span>
                Visit Our Showroom
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
            </Button>
            
            <Button variant="marble" size="lg" className="text-lg px-10 py-4 font-inter" asChild>
              <a href="tel:+19082595488">
                <span className="mr-2">📞</span>
                Schedule Your Visit
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TileGallery;