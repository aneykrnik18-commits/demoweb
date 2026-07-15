import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import AnimatedCounter from '../ui/AnimatedCounter';
import SectionTitle from '../ui/SectionTitle';

const AboutDoctor = () => {
  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-4 md:px-8">
        
        <SectionTitle 
          subtitle="Meet Your Doctor" 
          title="Dr. Sarah Jenkins"
          description="A renowned expert in cosmetic and restorative dentistry with a passion for creating beautiful, healthy smiles."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="relative overflow-hidden p-2" hover={false}>
              <div className="aspect-[4/5] rounded-[20px] overflow-hidden relative bg-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Dr. Sarah Jenkins" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2">Dr. Sarah Jenkins</h3>
                  <p className="text-cyan font-medium">DDS, MS (Prosthodontics)</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Biography</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 15 years of experience in advanced dentistry, Dr. Jenkins has transformed thousands of smiles. She combines her artistic eye with the latest technological advancements to deliver exceptional, long-lasting results.
            </p>
            <p className="text-gray-300 mb-10 leading-relaxed">
              Her philosophy is centered around patient comfort and personalized care, ensuring that every visit is a stress-free and positive experience.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-white">Expertise</h3>
            <div className="flex flex-wrap gap-3 mb-10">
              {['Cosmetic Dentistry', 'Implantology', 'Smile Design', 'Orthodontics', 'Endodontics'].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full glass-panel text-sm text-cyan">
                  {skill}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-panel p-4 text-center rounded-2xl">
                <div className="text-2xl font-bold text-white mb-1">
                  <AnimatedCounter value={15} suffix="+" />
                </div>
                <p className="text-xs text-gray-400">Years Exp.</p>
              </div>
              <div className="glass-panel p-4 text-center rounded-2xl">
                <div className="text-2xl font-bold text-white mb-1">
                  <AnimatedCounter value={12000} suffix="+" />
                </div>
                <p className="text-xs text-gray-400">Patients</p>
              </div>
              <div className="glass-panel p-4 text-center rounded-2xl">
                <div className="text-2xl font-bold text-white mb-1">
                  <AnimatedCounter value={5000} suffix="+" />
                </div>
                <p className="text-xs text-gray-400">Treatments</p>
              </div>
              <div className="glass-panel p-4 text-center rounded-2xl">
                <div className="text-2xl font-bold text-white mb-1">
                  <AnimatedCounter value={98} suffix="%" />
                </div>
                <p className="text-xs text-gray-400">Satisfaction</p>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
