import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WhyChooseLaRaj = () => {
  const features = [
    {
      icon: "✅",
      title: "Personalized in-store service"
    },
    {
      icon: "✅", 
      title: "Inventory for every price point"
    },
    {
      icon: "✅",
      title: "Trusted by contractors & designers"
    },
    {
      icon: "✅",
      title: "Guidance with layout & style"
    },
    {
      icon: "✅",
      title: "Decades of experience"
    },
    {
      icon: "✅",
      title: "Showroom visits by appointment or walk-in"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-marble-dark mb-6">
            🧑‍💼 What Makes LaRaj Different?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're not a big-box store. We're a local team that cares deeply about your project — 
            and we help every step of the way. Whether you need affordable tile or high-end finishes, 
            we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="shadow-soft hover:shadow-marble transition-all duration-300 transform hover:-translate-y-1 border-stone-warm"
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-marble-dark">{feature.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a href="/about">
            <Button variant="marble" size="lg" className="text-lg px-8 py-4">
              Learn More About Our Team
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseLaRaj;