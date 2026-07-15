import { motion } from 'framer-motion';
import { ArrowRight, Activity, Smile, Search, PenTool, ShieldAlert, Heart, Settings, PlusCircle } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';

const services = [
  { id: 1, title: 'Dental Checkup', desc: 'Comprehensive examination and digital X-rays to ensure optimal oral health.', icon: <Search size={28} /> },
  { id: 2, title: 'Root Canal', desc: 'Painless endodontic therapy to save severely decayed or infected teeth.', icon: <Activity size={28} /> },
  { id: 3, title: 'Teeth Whitening', desc: 'Professional whitening treatments for a significantly brighter, radiant smile.', icon: <Smile size={28} /> },
  { id: 4, title: 'Dental Implants', desc: 'Permanent, natural-looking replacements for missing teeth.', icon: <Settings size={28} /> },
  { id: 5, title: 'Cosmetic Dentistry', desc: 'Veneers and bonding to correct imperfections and enhance aesthetics.', icon: <Heart size={28} /> },
  { id: 6, title: 'Braces', desc: 'Traditional and invisible orthodontic solutions for perfectly aligned teeth.', icon: <PenTool size={28} /> },
  { id: 7, title: 'Smile Design', desc: 'Customized treatment plans tailored to give you your dream smile.', icon: <PlusCircle size={28} /> },
  { id: 8, title: 'Emergency Care', desc: 'Immediate attention for dental trauma, severe pain, or accidents.', icon: <ShieldAlert size={28} /> },
];

const Services = () => {
  return (
    <section className="py-24 relative" id="services">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle 
          subtitle="Our Expertise" 
          title="Premium Dental Services" 
          description="We offer a comprehensive range of dental treatments using state-of-the-art technology to ensure your comfort and satisfaction."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <GlassCard 
              key={service.id} 
              delay={index * 0.1}
              className="group flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-full bg-cyan/10 flex items-center justify-center text-cyan mb-6 group-hover:scale-110 group-hover:bg-cyan/20 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan transition-colors">{service.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{service.desc}</p>
              
              <Link to="/contact" className="inline-flex items-center gap-2 text-cyan font-medium opacity-80 hover:opacity-100 transition-opacity">
                Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
