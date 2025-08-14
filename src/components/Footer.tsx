const Footer = () => {
  const navigation = [
    { name: "Home", href: "#" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "About Us", href: "#about" },
    { name: "Book Consultation", href: "#consultation" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-marble-dark text-marble-light py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-gold-accent mb-4">LaRaj Tiles</h3>
            <p className="text-marble-light/80 mb-4 leading-relaxed">
              Expert tile guidance serving Roselle Park and surrounding areas for over 20 years.
            </p>
            <div className="text-sm text-marble-light/70">
              <a 
                href="https://maps.apple.com/?q=324+Westfield+Ave+W,+Roselle+Park,+NJ+07204" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-marble-light transition-colors cursor-pointer"
              >
                <p>324 Westfield Ave W</p>
                <p>Roselle Park, NJ 07204</p>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-marble-light/80 hover:text-gold-accent transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Reviews */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center space-x-2 text-marble-light/80 hover:text-gold-accent transition-colors duration-300"
              >
                <span>📷</span>
                <span>Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-marble-light/80 hover:text-gold-accent transition-colors duration-300"
              >
                <span>⭐</span>
                <span>Google Reviews</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-marble-light/20 mt-8 pt-8 text-center">
          <p className="text-marble-light/60 text-sm">
            © 2024 LaRaj Tiles. All rights reserved. | Expert tile guidance in Roselle Park, NJ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;