import PropTypes from "prop-types";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Count = ({ count, title }) => {
  return (
    <motion.div
      className="text-center space-y-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <CountUp
        className="text-4xl font-bold text-accent font-playfair"
        delay={0}
        end={count}
        duration={2}
        suffix=" +"
        enableScrollSpy={true}
      />
      <div className="text-white/80 text-lg font-medium mt-2">{title}</div>
    </motion.div>
  );
};

Count.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Count;