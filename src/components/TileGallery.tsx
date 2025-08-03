import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import tileGallery1 from "@/assets/tile-gallery-1.jpg";
import tileGallery2 from "@/assets/tile-gallery-2.jpg";
import tileGallery3 from "@/assets/tile-gallery-3.jpg";
import tileGallery4 from "@/assets/tile-gallery-4.jpg";

const TileGallery = () => {
  const galleryImages = [
    { src: tileGallery1, alt: "Luxury marble and ceramic tile collection", caption: "In-stock | Visit to see in person" },
    { src: tileGallery2, alt: "Elegant bathroom marble installation", caption: "In-stock | Visit to see in person" },
    { src: tileGallery3, alt: "Modern kitchen backsplash tiles", caption: "In-stock | Visit to see in person" },
    { src: tileGallery4, alt: "Natural stone flooring display", caption: "In-stock | Visit to see in person" },
  ];

  return (
    <section className="py-20 bg-gradient-marble">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-marble-dark mb-6">
            🖼️ Step Inside the LaRaj Showroom
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every tile you see here is available in our Roselle Park showroom. 
            From classic marble to bold modern designs, find inspiration for any room.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <Card 
              key={index}
              className="group overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-marble-dark/0 group-hover:bg-marble-dark/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium bg-primary/80 backdrop-blur-sm rounded-lg px-3 py-2">
                    {image.caption}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" className="text-lg px-8 py-4">
            📍 Visit Us or Book Your Visit Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TileGallery;