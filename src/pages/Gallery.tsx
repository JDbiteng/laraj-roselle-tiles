import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import gallery images
import gallery1 from "@/assets/tile-gallery-1.jpg";
import gallery2 from "@/assets/tile-gallery-2.jpg";
import gallery3 from "@/assets/tile-gallery-3.jpg";
import gallery4 from "@/assets/tile-gallery-4.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: gallery1, alt: "Elegant marble bathroom installation" },
    { src: gallery2, alt: "Modern kitchen backsplash design" },
    { src: gallery3, alt: "Luxury tile showroom display" },
    { src: gallery4, alt: "Contemporary floor tile pattern" },
    // Add more images as needed
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-marble-light via-stone-warm to-marble-medium">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-marble-dark mb-6 animate-fade-in">
              Our Tiles. Your Inspiration.
            </h1>
            <p className="text-xl sm:text-2xl text-marble-medium max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Every tile shown below is part of our showroom collection. No stock photos — just real tiles, 
              real installations, and real style. Come in and experience them in person.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-marble-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <p className="text-sm font-inter">Available to view in-store</p>
                        </div>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full p-0">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-20 bg-gradient-to-r from-marble-dark via-primary to-marble-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-6">
              Love what you see? Book a consultation with our team or stop by — no appointment needed.
            </h2>
            <Button variant="hero" size="lg" className="text-lg px-10 py-5 rounded-full">
              📅 Book a Visit
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;