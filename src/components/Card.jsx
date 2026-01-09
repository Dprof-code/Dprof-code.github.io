import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Card = ({ title, description, icon, isActive, onHover, onLeave }) => {
  return (
    <motion.div
      className="relative bg-primary/30 backdrop-blur-sm rounded-xl p-6 border border-secondary/20
                hover:border-secondary/50 transition-all duration-300 h-full
                group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 
                    rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start mb-4">
          <motion.div
            className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent 
                      group-hover:text-primary transition-all duration-300"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-bold text-white ml-4 group-hover:text-accent 
                       transition-colors duration-300">
            {title}
          </h3>
        </div>

        <p className="text-gray-300 leading-relaxed flex-grow">
          {description}
        </p>

        {/* <motion.div
          className="mt-4 flex items-center text-accent font-medium opacity-0 group-hover:opacity-100
                    transition-opacity duration-300"
          initial={{ x: -20 }}
          animate={isActive ? { x: 0 } : { x: -20 }}
        >
          Learn More
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div> */}
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  onHover: PropTypes.func,
  onLeave: PropTypes.func,
};

export default Card;