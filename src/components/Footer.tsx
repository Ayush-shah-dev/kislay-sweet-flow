
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">Kaslay Naturals</span>
            </div>
            <p className="text-gray-300 mb-4">
              Premium liquid monk fruit sweetener. Sweetness without the spike.
            </p>
            <p className="text-sm text-gray-400">
              All prices inclusive of GST. Products made with natural ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-green-400 transition-colors">
                Home
              </Link>
              <Link to="/product" className="block text-gray-300 hover:text-green-400 transition-colors">
                Product
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-green-400 transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-green-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>WhatsApp: +91 70436 30938</p>
              <a
                href="https://wa.me/917043630938?text=Hi! I'm interested in ordering Kaslay Naturals Liquid Monk Fruit Sweetener. Please share details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors mt-2"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Kaslay Naturals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
