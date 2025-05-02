import { motion } from "framer-motion";
import TechStack from "./TechStack";
import Reveal from "./Reveal";

const techStacks = [
  { title: "WordPress", image: "/tech-stacks/wordpress.webp" },
  { title: "React", image: "/tech-stacks/react.webp" },
  { title: "PHP", image: "/tech-stacks/php.webp" },
  { title: "JavaScript", image: "/tech-stacks/javascript.webp" },
  { title: "CSS", image: "/tech-stacks/css.webp" },
  { title: "HTML", image: "/tech-stacks/html.webp" },
  { title: "Python", image: "/tech-stacks/python.webp" },
  { title: "jQuery", image: "/tech-stacks/jquery.webp" },
  { title: "Bootstrap", image: "/tech-stacks/bootstrap.webp" },
  { title: "TypeScript", image: "/tech-stacks/typescript.webp" },
  { title: "C", image: "/tech-stacks/c.webp" },
  { title: "Figma", image: "/tech-stacks/figma.webp" },
  { title: "Git", image: "/tech-stacks/git.webp" },
  { title: "GitHub", image: "/tech-stacks/github.webp" },
  { title: "MySQL", image: "/tech-stacks/mysql.webp" },
  { title: "Node.js", image: "/tech-stacks/nodejs.webp" },
];

const TechStacks = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 lg:gap-8 
                    max-w-lg md:max-w-none mx-auto px-4">
            {techStacks.map((tech, index) => (
              <Reveal key={index} side="top">
                <TechStack title={tech.title} image={tech.image} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStacks;