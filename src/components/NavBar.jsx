import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#services", label: "Services" },
    { href: "#experience", label: "Experience" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 px-4 lg:px-8 py-4 border-b border-secondary/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-white relative group py-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center bg-accent hover:bg-accent/90 text-primary font-semibold 
                  px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/50
                  group overflow-hidden"
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed top-[72px] right-0 w-full h-screen bg-primary/95 backdrop-blur-sm lg:hidden"
            >
              <div className="flex flex-col space-y-4 p-8">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="text-gray-300 hover:text-white text-lg font-medium"
                    whileHover={{ x: 10 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
                {/* <motion.a
                  href="#contact"
                  className="px-4 py-2 bg-accent text-primary font-semibold rounded-lg 
                    hover:bg-secondary transition-all duration-300 inline-block text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </motion.a> */}

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative inline-flex items-center bg-accent hover:bg-accent/90 text-primary font-semibold 
                  px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/50
                  group overflow-hidden"
                >
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavBar;