import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      className="flex items-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.a
        href="#home"
        className="relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.img
          src="/web-images/prodevx_solutions_logo_text.png"
          alt="ProDevX Solutions Logo"
          className="h-12 w-auto object-contain transition-all duration-300
                   group-hover:brightness-110 filter drop-shadow-lg"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 
                    rounded-lg transition-colors duration-300" />
      </motion.a>
    </motion.div>
  );
};

export default Logo;