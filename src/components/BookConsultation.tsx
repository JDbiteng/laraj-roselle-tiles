import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Phone, MapPin } from "lucide-react";

const BookConsultation = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            📅 Ready to Find the Perfect Tile?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Let our expert team guide you through your options, answer your questions, 
            and help you get started — no pressure, just great advice.
          </p>

          <Card className="shadow-elegant border-stone-warm max-w-2xl mx-auto">
            <CardContent className="p-8 sm:p-12">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    Free Consultation Available
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Book a 30-45 minute consultation with our tile experts
                  </p>
                </div>
                
                {/* Placeholder for Calendly embed */}
                <div className="bg-gradient-marble rounded-lg p-8 text-center border border-stone-warm">
                  <div className="text-4xl mb-4">📅</div>
                  <p className="text-marble-dark font-medium mb-4">
                    Calendly booking widget would be embedded here
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Configure for 30–45 minute consultation slots
                  </p>
                </div>

                <div className="text-center pt-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                        Call Now or Stop By
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-64 p-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-center mb-3">Contact Options</h4>
                        <a 
                          href="tel:+19082595488" 
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                        >
                          <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                          <div>
                            <div className="font-medium">Call Us</div>
                            <div className="text-sm text-muted-foreground">(908) 259-5488</div>
                          </div>
                        </a>
                        <a 
                          href="https://maps.apple.com/?q=324+Westfield+Ave+W,+Roselle+Park,+NJ+07204" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                        >
                          <MapPin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                          <div>
                            <div className="font-medium">View Location</div>
                            <div className="text-sm text-muted-foreground">Get directions</div>
                          </div>
                        </a>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;