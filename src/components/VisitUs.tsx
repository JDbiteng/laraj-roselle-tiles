import { Card, CardContent } from "@/components/ui/card";

const VisitUs = () => {
  return (
    <section className="py-20 bg-gradient-marble">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-marble-dark mb-6">
              📍 Come See Us In Person
            </h2>
          </div>

          <Card className="shadow-elegant border-stone-warm">
            <CardContent className="p-8 sm:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h3 className="font-semibold text-lg text-marble-dark mb-1">Address</h3>
                      <a 
                        href="https://maps.apple.com/?q=324+Westfield+Ave+W,+Roselle+Park,+NJ+07204" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                      >
                        324 Westfield Ave W, Roselle Park, NJ 07204
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📞</div>
                    <div>
                      <h3 className="font-semibold text-lg text-marble-dark mb-1">Phone</h3>
                      <a 
                        href="tel:+19088888888" 
                        className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                      >
                        (908) 888-8888
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🕒</div>
                    <div>
                      <h3 className="font-semibold text-lg text-marble-dark mb-2">Hours</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Mon–Fri: 10:00am – 3:00pm</p>
                        <p className="flex items-center space-x-2">
                          <span>📅</span>
                          <span>Sat–Sun: By appointment</span>
                        </p>
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

                <div className="bg-stone-warm/30 rounded-lg p-8 text-center border border-stone-warm">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="text-marble-dark font-medium mb-2">Google Maps</p>
                  <p className="text-sm text-muted-foreground">
                    Interactive map would be embedded here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;