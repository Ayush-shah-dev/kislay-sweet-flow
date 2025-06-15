
import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/1d0e49c5-5574-48fe-9fee-1de84a529d35.png" 
              alt="Kislay Naturals" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/917043630938?text=Hi! I'm interested in ordering Kislay Naturals Liquid Monk Fruit Sweetener. Please share details."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
            >
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-green-50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/917043630938?text=Hi! I'm interested in ordering Kislay Naturals Liquid Monk Fruit Sweetener. Please share details."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-green-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-green-700 transition-colors mt-4"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
