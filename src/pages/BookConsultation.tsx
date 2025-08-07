import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BookConsultationPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-marble-light via-stone-warm to-marble-medium">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-marble-dark mb-6 animate-fade-in">
              Book a Free Consultation
            </h1>
            <p className="text-xl sm:text-2xl text-marble-medium max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Let's make your renovation feel simple, not stressful. Use the form below to book a one-on-one visit with our team.
            </p>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Calendly Embed Placeholder */}
              <Card className="mb-12 bg-white border-stone-warm/20 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h2 className="text-2xl font-playfair font-bold text-marble-dark mb-6">
                      Schedule Your Visit
                    </h2>
                    
                    {/* Placeholder for Calendly - replace with actual embed */}
                    <div className="bg-stone-warm/10 border-2 border-dashed border-stone-warm/30 rounded-lg p-12 mb-6">
                      <p className="text-marble-medium font-inter text-lg mb-4">
                        📅 Calendly Booking Widget Goes Here
                      </p>
                      <p className="text-marble-medium/70 font-inter text-sm">
                        Duration: 30-45 minutes<br/>
                        Fields: Name, Email, Phone, Optional Project Notes
                      </p>
                    </div>
                    
                    <div className="bg-gold-accent/10 border border-gold-accent/30 rounded-lg p-6">
                      <p className="text-marble-dark font-inter">
                        <strong>Auto-confirmation message:</strong><br/>
                        "Thanks for booking! We look forward to seeing you at our showroom in Roselle Park."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Backup Info */}
              <Card className="bg-gradient-to-br from-marble-light to-stone-warm border-stone-warm/20 shadow-lg">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-playfair font-bold text-marble-dark mb-4">
                    Prefer to stop by instead?
                  </h3>
                  <p className="text-lg text-marble-medium mb-6 font-inter">
                    We welcome walk-ins during store hours:
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-xl">🕒</span>
                      <span className="text-lg font-inter text-marble-dark">Mon–Sat: 9:00am – 5:30pm</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-xl">🛑</span>
                      <span className="text-lg font-inter text-marble-dark">Sunday: Closed</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-xl">📍</span>
                      <span className="text-lg font-inter text-marble-dark">324 Westfield Ave W, Roselle Park, NJ 07204</span>
                    </div>
                  </div>
                  
                  <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                    📞 Call Us Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookConsultationPage;