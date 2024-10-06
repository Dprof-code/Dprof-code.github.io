import { cn } from "../lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Reveal = ({
  children,
  className,
  width = "fit-content",
  side = "top",
}) => {
  const animation = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [inView, animation]);

  const top = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 75 },
  };
  const left = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -75 },
  };
  const right = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 75 },
  };

  const variants = { top, left, right }[side];

  return (
    <div style={{ position: "relative", width }} className={cn(className)}>
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.5, delay: 0.25, delayChildren: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  width: PropTypes.string,
  side: PropTypes.oneOf(["top", "left", "right"]),
};

export default Reveal;
