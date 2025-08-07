import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Reviews = () => {
  const reviews = [
    {
      text: "LaRaj Tile & Marble is the absolute BEST! They truly care about their customers and go over and above to assist in the project you're doing.",
      author: "Gina V.",
      type: "Homeowner"
    },
    {
      text: "We highly recommend LaRaj to our interior design clients. Their renderings are detailed, and their installers are excellent.",
      author: "Mimi & Hill Interiors",
      type: "Interior Design Firm"
    },
    {
      text: "We love working with them on all our tile projects. From our kitchen backsplash to our office floors, they always go out of their way.",
      author: "Nicola A.",
      type: "Repeat Customer"
    },
    {
      text: "They helped me design 6 bathrooms and a laundry room — professional, creative, and truly care about your style.",
      author: "Darcy Bracco",
      type: "Designer Client"
    },
    {
      text: "As true professionals, they're not afraid to say 'that's a bad idea' — and that's exactly why I trust them.",
      author: "Jim R.",
      type: "Contractor"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-marble-light via-stone-warm to-marble-medium">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-marble-dark mb-6 animate-fade-in">
              5-Star Experiences From Real Customers
            </h1>
            <p className="text-xl sm:text-2xl text-marble-medium max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We don't just sell tile — we guide you through the process. Read what homeowners, 
              designers, and contractors are saying about working with LaRaj.
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {reviews.map((review, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-500 animate-fade-in bg-white border-stone-warm/20" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8">
                    {/* Quote Icon */}
                    <div className="text-4xl text-gold-accent mb-4 font-playfair">"</div>
                    
                    {/* Review Text */}
                    <blockquote className="text-lg text-marble-medium leading-relaxed mb-6 font-inter">
                      {review.text}
                    </blockquote>
                    
                    {/* Stars */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-gold-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.953a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.953c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.953a1 1 0 00-.364-1.118L2.045 9.38c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.953z" />
                        </svg>
                      ))}
                    </div>
                    
                    {/* Author */}
                    <div className="border-t border-stone-warm/30 pt-4">
                      <h4 className="font-playfair font-bold text-marble-dark text-lg">{review.author}</h4>
                      <p className="text-marble-medium text-sm font-inter">{review.type}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-marble-dark via-primary to-marble-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-6">
              Want the same amazing experience?
            </h2>
            <Button variant="hero" size="lg" className="text-lg px-10 py-5 rounded-full">
              📅 Book a Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;