import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import GlassCard from '../ui/GlassCard';

const Footer = () => {
  return (
    <footer className="relative mt-20 pt-20 pb-10 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-warm-cream/20 to-transparent" />
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-glow/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <GlassCard className="!p-10 mb-10" hover={false}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <Link to="/" className="inline-block mb-6">
                <span className="text-3xl font-bold text-gradient font-serif">The Cozy Bean</span>
              </Link>
              <p className="text-warm-cream/80 mb-6">
                Brewing perfect moments and baking artisan delights for our beloved community every single day.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-warm-cream/5 flex items-center justify-center hover:bg-amber-glow/20 hover:text-amber-glow transition-colors">
                  <FaFacebookF size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-warm-cream/5 flex items-center justify-center hover:bg-amber-glow/20 hover:text-amber-glow transition-colors">
                  <FaTwitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-warm-cream/5 flex items-center justify-center hover:bg-amber-glow/20 hover:text-amber-glow transition-colors">
                  <FaInstagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-warm-cream/5 flex items-center justify-center hover:bg-amber-glow/20 hover:text-amber-glow transition-colors">
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white font-serif">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-warm-cream/80 hover:text-amber-glow transition-colors">Our Story</Link></li>
                <li><Link to="/menu" className="text-warm-cream/80 hover:text-amber-glow transition-colors">View Menu</Link></li>
                <li><Link to="/gallery" className="text-warm-cream/80 hover:text-amber-glow transition-colors">Gallery</Link></li>
                <li><Link to="/contact" className="text-warm-cream/80 hover:text-amber-glow transition-colors">Reserve a Table</Link></li>
              </ul>
            </div>

            {/* Menu Sections */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white font-serif">Menu</h4>
              <ul className="space-y-3">
                <li><Link to="/menu" className="text-warm-cream/80 hover:text-amber-glow transition-colors">Signature Brews</Link></li>
                <li><Link to="/menu" className="text-warm-cream/80 hover:text-amber-glow transition-colors">Artisan Bakery</Link></li>
                <li><Link to="/menu" className="text-warm-cream/80 hover:text-amber-glow transition-colors">Italian Bites</Link></li>
                <li><Link to="/menu" className="text-warm-cream/80 hover:text-amber-glow transition-colors">Healthy Bowls</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white font-serif">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-warm-cream/80">
                  <MapPin className="text-amber-glow shrink-0" />
                  <span>456 Coffee Lane, Seattle, WA 98109</span>
                </li>
                <li className="flex gap-3 text-warm-cream/80">
                  <Phone className="text-amber-glow shrink-0" />
                  <span>+1 (555) 987-6543</span>
                </li>
                <li className="flex gap-3 text-warm-cream/80">
                  <Mail className="text-amber-glow shrink-0" />
                  <span>hello@thecozybean.com</span>
                </li>
              </ul>
            </div>
          </div>
        </GlassCard>

        <div className="text-center text-warm-cream/60 text-sm">
          <p>&copy; {new Date().getFullYear()} The Cozy Bean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
