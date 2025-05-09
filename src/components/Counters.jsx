import { motion } from "framer-motion";
import Count from "./Count";
import Reveal from "./Reveal";

const stats = [
  {
    title: "Years of Experience",
    count: 5,
    icon: "/web-images/star.png"
  },
  {
    title: "Websites Built",
    count: 50,
    icon: "/web-images/rocket.png"
  },
  {
    title: "Satisfied Clients",
    count: 50,
    icon: "/web-images/group.png"
  },
  {
    title: "Technologies",
    count: 20,
    icon: "/web-images/programming.png"
  },
];

const Counters = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary/50 to-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 max-w-lg md:max-w-none mx-auto">
          {stats.map((stat, index) => (
            <Reveal key={index} side="top">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-primary/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-secondary/20
                          hover:border-secondary/50 transition-all duration-300
                          flex flex-col items-center justify-center space-y-2 sm:space-y-4
                          shadow-lg hover:shadow-secondary/20"
              >
                <motion.img
                  src={stat.icon}
                  alt={stat.title}
                  className="w-12 h-12 sm:w-16 sm:h-16 mb-2 object-contain
                           transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                <Count title={stat.title} count={stat.count} />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counters;