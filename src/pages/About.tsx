import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const features = [
    "Over 20 years in business",
    "Local showroom with curated inventory",
    "Expert layout and material guidance",
    "No-pressure consults — just honest advice",
    "Relationships with top designers and contractors"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-marble-light via-stone-warm to-marble-medium">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-marble-dark mb-6 animate-fade-in">
              Two Partners. One Vision. Design Excellence.
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Intro Paragraph */}
              <Card className="mb-12 bg-white border-stone-warm/20 shadow-lg">
                <CardContent className="p-8">
                  <p className="text-xl text-marble-medium leading-relaxed font-inter">
                    LaRaj Tile & Marble has been proudly serving Roselle Park and the surrounding communities for over 20 years. 
                    Founded by two passionate partners devoted to their craft, we believe choosing tile should be a creative and enjoyable process — not overwhelming or confusing. 
                    That's why we've built a showroom that feels personal and a team that treats every customer with expertise and care.
                  </p>
                </CardContent>
              </Card>

              {/* Team Highlight */}
              <Card className="mb-12 bg-gradient-to-br from-marble-light to-stone-warm border-stone-warm/20 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-playfair font-bold text-marble-dark mb-6">Meet Our Team</h2>
                  <p className="text-lg text-marble-medium leading-relaxed font-inter">
                    Meet Raj, Lance, and Angelika — the heart of LaRaj. Whether it's helping you visualize a new bathroom 
                    or offering honest feedback on your backsplash ideas, they're here to help you get it right.
                  </p>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="bg-white border-stone-warm/20 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-playfair font-bold text-marble-dark mb-8 text-center">Why Choose Us</h2>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="w-8 h-8 rounded-full bg-gold-accent flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-lg text-marble-medium font-inter">{feature}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-marble-dark via-primary to-marble-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-6">
              Ready to meet with our team?
            </h2>
            <Button variant="hero" size="lg" className="text-lg px-10 py-5 rounded-full">
              Meet With Our Team
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;