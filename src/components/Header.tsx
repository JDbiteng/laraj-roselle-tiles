import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navigation = [{
    name: "Home",
    href: "/"
  }, {
    name: "Gallery",
    href: "/gallery"
  }, {
    name: "Reviews",
    href: "/reviews"
  }, {
    name: "About",
    href: "/about"
  }, {
    name: "Blog",
    href: "/blog"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isHomePage ? scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-stone-warm shadow-elegant' : 'bg-white/10 backdrop-blur-md border-b border-white/10' : 'bg-black/95 backdrop-blur-xl border-b border-stone-warm/20 shadow-elegant'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="text-left">
                  <div className="text-3xl font-playfair font-bold bg-gradient-to-r from-gold-accent to-primary bg-clip-text text-transparent italic">
                    LaRaj
                  </div>
                  <div className={`text-sm font-inter font-black tracking-widest mt-0.5 ${isHomePage ? 'text-foreground' : 'text-white'}`}>
                    TILE & MARBLE
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold-accent rounded-full animate-pulse"></div>
              </div>
              <div className="ml-2">
                <p className="text-xs font-inter text-muted-foreground uppercase tracking-wider mx-[11px]">
                  Since 2004
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navigation.map((item, index) => <Link key={item.name} to={item.href} className={`relative font-inter font-medium transition-all duration-300 group ${isHomePage ? scrolled ? 'text-marble-dark hover:text-primary' : 'text-white/90 hover:text-white' : 'text-white/90 hover:text-gold-accent'}`} style={{
            animationDelay: `${index * 100}ms`
          }}>
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-gold-accent transition-all duration-300 group-hover:w-full"></div>
              </Link>)}
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block ml-8 flex-shrink-0">
            <Link to="/book-consultation">
              <Button variant={isHomePage ? scrolled ? "cta" : "hero" : "hero"} size="sm" className="font-inter font-semibold shadow-elegant hover:shadow-marble transition-all duration-500 group relative overflow-hidden">
                <span className="relative z-10 flex items-center mx-0">
                  <span className="mr-2 text-sm">📅</span>
                  Book Consultation
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden transition-colors duration-300 p-2 rounded-lg ${isHomePage ? scrolled ? 'text-marble-dark hover:text-primary hover:bg-stone-warm/20' : 'text-white hover:text-gold-accent hover:bg-white/10' : 'text-white hover:text-gold-accent hover:bg-white/10'}`} aria-label="Toggle menu">
            <svg className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-6 border-t border-stone-warm/20 animate-fade-in">
            <nav className="space-y-4">
              {navigation.map((item, index) => <Link key={item.name} to={item.href} className={`block px-4 py-3 rounded-lg font-inter font-medium transition-all duration-300 ${isHomePage ? scrolled ? 'text-marble-dark hover:text-primary hover:bg-stone-warm/20' : 'text-white/90 hover:text-white hover:bg-white/10' : 'text-white/90 hover:text-gold-accent hover:bg-white/10'}`} onClick={() => setIsMenuOpen(false)} style={{
            animationDelay: `${index * 100}ms`
          }}>
                  {item.name}
                </Link>)}
              <div className="px-4 py-2">
                <Link to="/book-consultation" className="block">
                  <Button variant={isHomePage ? scrolled ? "cta" : "hero" : "hero"} size="sm" className="w-full font-inter font-semibold">
                    <span className="mr-2">📅</span>
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;