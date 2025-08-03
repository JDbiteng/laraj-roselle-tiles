import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TileGallery from "@/components/TileGallery";
import Testimonials from "@/components/Testimonials";
import WhyChooseLaRaj from "@/components/WhyChooseLaRaj";
import BookConsultation from "@/components/BookConsultation";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <section id="gallery">
          <TileGallery />
        </section>
        <section id="reviews">
          <Testimonials />
        </section>
        <section id="about">
          <WhyChooseLaRaj />
        </section>
        <section id="consultation">
          <BookConsultation />
        </section>
        <section id="contact">
          <VisitUs />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
