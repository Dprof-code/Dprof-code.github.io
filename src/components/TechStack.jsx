import PropTypes from "prop-types";
import { motion } from "framer-motion";

const TechStack = ({ image, title }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-3 rounded-xl 
                bg-primary/30 backdrop-blur-sm border border-secondary/20
                hover:border-secondary/50 transition-all duration-300
                group cursor-pointer"
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="relative w-12 h-12 md:w-14 md:h-14 mb-3" // Reduced from w-16/h-16 to w-12/h-12 and w-20/h-20 to w-14/h-14
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <motion.img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-contain filter brightness-90 
                   group-hover:brightness-110 transition-all duration-300
                   p-1.5" // Added padding to give some breathing room
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-accent/5 rounded-full 
                      group-hover:bg-accent/10 transition-colors duration-300" />
      </motion.div>

      <motion.h3
        className="text-xs md:text-sm text-gray-300 font-medium text-center
                   group-hover:text-white transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
      >
        {title}
      </motion.h3>

      <motion.div
        className="w-0 h-0.5 bg-accent mt-1.5 group-hover:w-full 
                   transition-all duration-300"
      />
    </motion.div>
  );
};

TechStack.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TechStack;