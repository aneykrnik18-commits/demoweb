import { motion } from 'framer-motion';
import GlowButton from '../ui/GlowButton';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full glass-panel border border-cyan/30"
          >
            <span className="text-sm font-medium text-cyan uppercase tracking-wider">Premium Dental Care</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Creating <span className="text-gradient">Healthy Smiles</span> <br className="hidden md:block"/>
            for a Lifetime.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0">
            Experience world-class dental care in a luxurious and relaxing environment. Our expert team is dedicated to perfecting your smile.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <Link to="/contact">
              <GlowButton variant="primary" className="w-full sm:w-auto">
                Book Appointment <ArrowRight size={18} />
              </GlowButton>
            </Link>
            <a href="tel:+15551234567">
              <GlowButton variant="secondary" className="w-full sm:w-auto">
                <PhoneCall size={18} /> Call Now
              </GlowButton>
            </a>
          </div>
        </motion.div>

        {/* Hero Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto lg:mx-0 max-w-md lg:max-w-none w-full"
        >
          {/* Decorative glowing behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan/20 blur-[100px] rounded-full z-0" />
          
          <div className="relative z-10 glass-panel p-4 rounded-[40px] border border-white/20 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            <div className="relative rounded-[32px] overflow-hidden aspect-[3/4] md:aspect-square bg-white/5">
               {/* Using a placeholder since we don't have an asset yet */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan/20 to-blue-500/20 mix-blend-overlay z-10" />
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Doctor smiling" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-2xl flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 rounded-full bg-cyan/20 flex items-center justify-center text-cyan">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-300">Success Rate</p>
                <p className="text-xl font-bold text-white">99.9%</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
