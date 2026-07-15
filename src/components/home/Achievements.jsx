import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';

const achievements = [
  { icon: '🏆', title: 'Best Dental Clinic', desc: 'Awarded in 2023' },
  { icon: '⭐', title: '4.9 Rating', desc: 'On Google Reviews' },
  { icon: '👨‍⚕️', title: '15+ Years', desc: 'Professional Experience' },
  { icon: '🦷', title: 'Implant Specialist', desc: 'Certified Expert' },
  { icon: '🎓', title: 'Orthodontist', desc: 'Board Certified' },
  { icon: '❤️', title: '12,000+', desc: 'Happy Patients' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -20 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 100 } }
};

const Achievements = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-cyan/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle subtitle="Why Choose Us" title="Our Achievements" />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {achievements.map((item, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <GlassCard className="h-full flex flex-col items-center justify-center text-center p-8">
                <span className="text-4xl mb-4 block filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ transform: 'translateZ(20px)' }}>{item.icon}</span>
                <h4 className="text-lg font-bold text-white mb-1" style={{ transform: 'translateZ(10px)' }}>{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
