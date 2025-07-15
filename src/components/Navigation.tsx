
import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass backdrop-blur-xl border-b border-primary/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/lovable-uploads/060ca6d9-94d7-460f-97ec-3fc9cc926e49.png" 
                alt="Kislay Naturals" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-full blur-lg group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold text-gradient hidden sm:block">
              Kislay Naturals
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 group animate-slide-down ${
                  isActive(item.path)
                    ? 'text-accent bg-primary/20 glow'
                    : 'text-foreground hover:text-accent hover:bg-primary/10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-primary transition-all duration-300 ${
                  isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </Link>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/917043630938?text=Hi! I'm interested in ordering Kislay Naturals Liquid Monk Fruit Sweetener. Please share details."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-medium hover:scale-105 transition-all duration-300 glow-pulse flex items-center space-x-2"
            >
              <Zap className="h-4 w-4" />
              <span>Order Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl text-foreground hover:text-accent hover:bg-primary/10 transition-all duration-300"
            >
              {isOpen ? 
                <X className="h-6 w-6 transition-transform duration-300 rotate-180" /> : 
                <Menu className="h-6 w-6 transition-transform duration-300" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slide-down">
            <div className="px-2 pt-2 pb-4 space-y-2 glass rounded-xl m-4 border border-primary/20">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 animate-slide-up ${
                    isActive(item.path)
                      ? 'text-accent bg-primary/20 glow'
                      : 'text-foreground hover:text-accent hover:bg-primary/10'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/917043630938?text=Hi! I'm interested in ordering Kislay Naturals Liquid Monk Fruit Sweetener. Please share details."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-primary text-primary-foreground px-4 py-3 rounded-lg text-base font-medium hover:scale-105 transition-all duration-300 mt-4 animate-slide-up delay-500"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Zap className="h-4 w-4" />
                  <span>Order Now</span>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
