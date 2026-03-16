import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  ChevronUp
} from 'lucide-react';
import { useState, useEffect } from 'react';

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Infrastructure', href: '/infrastructure' },
    { name: 'Opportunities', href: '/opportunities' },
    { name: 'Contact', href: '/contact' }
  ];

  const products = [
    { name: 'Milk Products', href: '/products/dairy' },
    { name: 'Cheese', href: '/products/cheese' },
    { name: 'Butter & Ghee', href: '/products/butter' },
    { name: 'Ice Cream', href: '/products/icecream' },
    { name: 'Processed Foods', href: '/products/processed' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' }
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-500 transform hover:scale-110 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* Main Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        {/* Newsletter Section */}
        <div className="border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-gray-400">
                  Get the latest updates on our products, offers, and company news.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition-all"
                />
                <button className="group bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">GE</span>
                </div>
                <span className="font-bold text-xl">GOALSCRAFT</span>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                Leading dairy and food processing company in Maharashtra, committed to quality and innovation since 2020.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Pune-Mumbai Highway, Pune, Maharashtra - 411045</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>info@goalscraft.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-green-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-green-500 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      <span className="group-hover:translate-x-2 transition-transform">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                Our Products
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-green-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product.name}>
                    <a
                      href={product.href}
                      className="text-gray-400 hover:text-green-500 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      <span className="group-hover:translate-x-2 transition-transform">
                        {product.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Hours & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                Business Hours
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-green-500 rounded-full"></div>
              </h3>
              
              <div className="space-y-2 text-gray-400 mb-6">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-white">9:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white">10:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} GOALSCRAFT ENTERPRISES PRIVATE LIMITED. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm">
                <a href="/privacy" className="text-gray-400 hover:text-green-500 transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-green-500 transition-colors">
                  Terms of Service
                </a>
                <a href="/sitemap" className="text-gray-400 hover:text-green-500 transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;