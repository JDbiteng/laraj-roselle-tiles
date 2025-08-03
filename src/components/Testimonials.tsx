import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "LaRaj Tile & Marble is the absolute BEST! They truly care about their customers and go over and above to assist in the project you're doing.",
      author: "Gina V."
    },
    {
      text: "We highly recommend LaRaj to our interior design clients. Their renderings are detailed, and their installers are excellent.",
      author: "Mimi & Hill Interiors"
    },
    {
      text: "We love working with them on all our tile projects — kitchen backsplash, bathroom remodels, office floors. Always go out of their way.",
      author: "Nicola A."
    },
    {
      text: "They helped me design 6 bathrooms and a laundry room — professional, creative, and truly care about your style.",
      author: "Darcy B."
    },
    {
      text: "As true professionals, they're not afraid to say 'that's a bad idea' — and that's exactly why I trust them.",
      author: "Jim R."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            💬 Our Customers Say It Best
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border-stone-warm">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center">
                <div className="text-4xl text-gold-accent mb-6">❝</div>
                <blockquote className="text-xl sm:text-2xl text-muted-foreground italic leading-relaxed mb-8">
                  {testimonials[currentIndex].text}
                </blockquote>
                <cite className="text-lg font-semibold text-primary">
                  — {testimonials[currentIndex].author}
                </cite>
              </div>
            </CardContent>
          </Card>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-stone-warm hover:bg-accent'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;