import { motion } from 'framer-motion';

const GlowButton = ({ children, onClick, type = "button", variant = "primary", className = "" }) => {
  const baseClasses = "relative inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-cyan/10 text-cyan border border-cyan/30 hover:bg-cyan/20 hover:border-cyan/50 hover:shadow-glow",
    secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/30",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan/0 via-cyan/20 to-cyan/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      )}
    </motion.button>
  );
};

export default GlowButton;
