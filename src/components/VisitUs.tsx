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
                      <p className="text-muted-foreground">324 Westfield Ave W, Roselle Park, NJ 07204</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📞</div>
                    <div>
                      <h3 className="font-semibold text-lg text-marble-dark mb-1">Phone</h3>
                      <p className="text-muted-foreground">(908) [insert number]</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🕒</div>
                    <div>
                      <h3 className="font-semibold text-lg text-marble-dark mb-2">Hours</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Mon–Sat: 9:00am – 5:30pm</p>
                        <p className="flex items-center space-x-2">
                          <span>🛑</span>
                          <span>Sunday: Closed</span>
                        </p>
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