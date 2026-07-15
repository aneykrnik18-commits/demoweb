import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import GlassCard from '../ui/GlassCard';

const Footer = () => {
  return (
    <footer className="relative mt-20 pt-20 pb-10 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <GlassCard className="!p-10 mb-10" hover={false}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <Link to="/" className="inline-block mb-6">
                <span className="text-3xl font-bold text-gradient">DentalClinic</span>
              </Link>
              <p className="text-gray-400 mb-6">
                Creating healthy smiles for a lifetime with premium dental care and advanced technology.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan/20 hover:text-cyan transition-colors">
                  <FaFacebookF size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan/20 hover:text-cyan transition-colors">
                  <FaTwitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan/20 hover:text-cyan transition-colors">
                  <FaInstagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan/20 hover:text-cyan transition-colors">
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-400 hover:text-cyan transition-colors">About Doctor</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-cyan transition-colors">Our Services</Link></li>
                <li><Link to="/gallery" className="text-gray-400 hover:text-cyan transition-colors">Smile Gallery</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-cyan transition-colors">Book Appointment</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                <li><Link to="/services" className="text-gray-400 hover:text-cyan transition-colors">Dental Checkup</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-cyan transition-colors">Teeth Whitening</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-cyan transition-colors">Dental Implants</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-cyan transition-colors">Cosmetic Dentistry</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-gray-400">
                  <MapPin className="text-cyan shrink-0" />
                  <span>123 Luxury Avenue, Beverly Hills, CA 90210</span>
                </li>
                <li className="flex gap-3 text-gray-400">
                  <Phone className="text-cyan shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex gap-3 text-gray-400">
                  <Mail className="text-cyan shrink-0" />
                  <span>hello@dentalclinic.com</span>
                </li>
              </ul>
            </div>
          </div>
        </GlassCard>

        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} DentalClinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
