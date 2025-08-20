import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-marble-light via-stone-warm to-marble-medium">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-marble-dark mb-6 animate-fade-in">
              Let's Talk Tile
            </h1>
            <p className="text-xl sm:text-2xl text-marble-medium max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We're always happy to answer questions or talk about your project. Call, visit, or send us a quick message below.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Contact Info */}
              <Card className="bg-white border-stone-warm/20 shadow-lg h-fit">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-playfair font-bold text-marble-dark mb-8">Get In Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gold-accent/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📍</span>
                      </div>
                      <div>
                        <h3 className="font-playfair font-bold text-marble-dark text-lg mb-1">Visit Our Showroom</h3>
                        <a 
                          href="https://maps.apple.com/?q=324+Westfield+Ave+W,+Roselle+Park,+NJ+07204" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-marble-medium font-inter hover:text-primary transition-colors cursor-pointer"
                        >
                          324 Westfield Ave W, Roselle Park, NJ 07204
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gold-accent/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📞</span>
                      </div>
                      <div>
                        <h3 className="font-playfair font-bold text-marble-dark text-lg mb-1">Call Us</h3>
                        <a 
                          href="tel:+19082595488" 
                          className="text-marble-medium font-inter hover:text-primary transition-colors cursor-pointer"
                        >
                          (908) 259-5488
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gold-accent/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">✉️</span>
                      </div>
                      <div>
                        <h3 className="font-playfair font-bold text-marble-dark text-lg mb-1">Email Us</h3>
                        <p className="text-marble-medium font-inter">info@larajtile.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gold-accent/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🕒</span>
                      </div>
                      <div>
                        <h3 className="font-playfair font-bold text-marble-dark text-lg mb-1">Store Hours</h3>
                        <div className="text-marble-medium font-inter space-y-1">
                          <p>Mon–Fri: 10:00am – 3:00pm</p>
                          <p>Sat–Sun: By appointment</p>
                          <a 
                            href="https://calendly.com/laraj-tiles" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                          >
                            Schedule Weekend Appointment →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card className="bg-white border-stone-warm/20 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-playfair font-bold text-marble-dark mb-8">Send Us a Message</h2>
                  
                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-marble-dark font-inter font-medium">Name</Label>
                      <Input 
                        id="name" 
                        type="text" 
                        className="mt-2 border-stone-warm/30 focus:border-gold-accent focus:ring-gold-accent/20" 
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-marble-dark font-inter font-medium">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        className="mt-2 border-stone-warm/30 focus:border-gold-accent focus:ring-gold-accent/20" 
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-marble-dark font-inter font-medium">Message</Label>
                      <Textarea 
                        id="message" 
                        rows={6}
                        className="mt-2 border-stone-warm/30 focus:border-gold-accent focus:ring-gold-accent/20" 
                        placeholder="Tell us about your project or ask us a question..."
                      />
                    </div>
                    
                    <Button type="submit" variant="cta" size="lg" className="w-full text-lg py-4">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Map Placeholder */}
            <Card className="mt-12 bg-white border-stone-warm/20 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-playfair font-bold text-marble-dark mb-6 text-center">Find Us</h2>
                <div className="bg-stone-warm/10 border-2 border-dashed border-stone-warm/30 rounded-lg p-12 text-center">
                  <p className="text-marble-medium font-inter text-lg">
                    🗺️ Google Maps Embed Goes Here<br/>
                    <span className="text-sm">324 Westfield Ave W, Roselle Park, NJ 07204</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;