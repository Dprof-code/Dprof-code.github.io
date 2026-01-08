import { motion } from "framer-motion";
import { lazy } from "react";

const Reveal = lazy(() => import("./Reveal"));

const AboutMe = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto w-full px-4 py-20 min-h-screen flex flex-col justify-center">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl text-accent-2 lg:text-5xl font-bold font-playfair mb-4">
          About <span style={{ color: '#f25a38' }}>Me</span>
        </h2>
        <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#f25a38' }}></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center px-6">
        {/* Image Section */}
        <Reveal side="left">
          <motion.div
            className="relative max-w-md mx-auto lg:mx-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-accent/20 rounded-2xl transform rotate-6 blur-sm"></div>
            <div className="relative border-4 border-accent rounded-2xl overflow-hidden transform -rotate-3 transition-transform duration-300 hover:rotate-0">
              <img
                src="/headshots/Adedamola_Abraham_Olawale.webp"
                alt="Adedamola Olawale"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </Reveal>

        {/* Content Section */}
        <Reveal side="right">
          <div className="space-y-6 text-white">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl lg:text-3xl font-bold font-playfair"
              style={{ color: '#f25a38' }}
            >
              Full-Stack Developer & CRM Automation Specialist
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              I&apos;m Abraham, a dedicated full-stack developer with deep expertise in backend engineering and modern web technologies like Node.js, TypeScript, React, Next.js, and Express. My passion lies in crafting scalable, production-ready APIs and server-side systems that seamlessly blend robust backend functionality with engaging front-end experiences, leveraging tools like PostgreSQL, MongoDB, Redis, and AI integrations including OpenAI.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              Combining technical proficiency and creative problem-solving, I consistently deliver performant solutions using microservices architecture, Docker, message queues, and intelligent automation workflows through platforms like Zapier and Make. Driven to stay ahead of technological trends, I continually expand my skillset to ensure every project exceeds client expectations and delights users.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center bg-accent hover:bg-accent/90 text-primary font-semibold 
                px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/50
                group overflow-hidden"
              >
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 
                group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>

              <motion.a
                href="/resume/Adedamola Olawale - FullStack Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center border-2 border-secondary text-white 
                hover:text-primary px-6 py-3 rounded-lg transition-all duration-300 shadow-lg
                hover:shadow-secondary/50 overflow-hidden group"
              >
                <span className="relative z-10">My Resume</span>
                <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 
                transition-opacity duration-300 -translate-x-full group-hover:translate-x-0"></div>
              </motion.a>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutMe;