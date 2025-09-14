import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { MorphingText } from "./MorphingText";

const Reveal = lazy(() => import("./Reveal"));

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-[calc(var(--navbar-height)+2rem)]">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 text-white z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-secondary font-medium tracking-wider">
                Hi, I&apos;m Abraham
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-2 leading-tight">
                I Build High-Performance
                <MorphingText />
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl"
            >
              Fullstack Web Developer specializing in creating engaging, scalable, and user-friendly web experiences for your website visitors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8"
            >
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center bg-accent hover:bg-accent/90 text-primary font-semibold 
    px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/50
    group overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 
    group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center border-2 border-secondary text-white 
    hover:text-primary px-8 py-4 rounded-lg transition-all duration-300 shadow-lg
    hover:shadow-secondary/50 overflow-hidden group"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 
    transition-opacity duration-300 -translate-x-full group-hover:translate-x-0"></div>
              </motion.a>


            </motion.div>
          </div>

          {/* Image Content */}
          <Suspense fallback={<div>Loading...</div>}>
            <Reveal side="right">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mt-8 lg:mt-0"
              >
                <div className="relative z-10 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-2 w-full">
                  <img
                    src="/web-images/prodevx_solutions_developer_coding.jpeg"
                    alt="Hero Image"
                    className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20 blur-xl"></div>
                </div>
              </motion.div>
            </Reveal>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Home;