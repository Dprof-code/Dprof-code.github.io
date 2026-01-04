import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode, FaPaintBrush, FaMobileAlt, FaServer, FaCogs,
  FaTools, FaBitcoin
} from "react-icons/fa";
import Card from "./Card";
import Reveal from "./Reveal";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "I build fast, responsive websites that work beautifully on phones, tablets, and desktops. Your site will look great and load quickly to keep visitors engaged.",
  },
  {
    icon: <FaCogs />,
    title: "CMS Development",
    description:
      "I set up easy-to-use sites on platforms like WordPress, Shopify, and Wix so you can update content yourself. Whether it’s a blog, store, or company site, I make it simple and styled to your brand.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Front-End Web Development",
    description:
      "I turn designs into interactive web pages using HTML, CSS, and JavaScript. Every page is mobile-friendly and looks great to help visitors enjoy your site.",
  },
  {
    icon: <FaServer />,
    title: "Back-End Web Development",
    description:
      "I build the server-side of your site—databases, APIs, and server setup—to make sure everything runs smoothly. Your app will be secure, reliable, and ready for growth.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Blockchain Development",
    description:
      "I create secure dApps and smart contracts on blockchains like Ethereum and BSC. From NFTs to DeFi platforms, I handle everything for a safe, transparent experience.",
  },
  {
    icon: <FaTools />,
    title: "Website Management",
    description:
      "I keep your site updated, secure, and performing well so you don’t have to worry. Regular checks and updates mean you can focus on your business, not tech.",
  },
  {
    icon: <FaTools />,
    title: "Website Maintenance",
    description:
      "I handle all updates, backups, security patches, and performance checks for your site. This keeps your site running smoothly and protected from threats.",
  },
  {
    icon: <FaBitcoin />,
    title: "Crypto & Web3 Website Development",
    description:
      "I build user-friendly sites for crypto projects—ICO landing pages, DEXs, and NFT platforms. Every site is secure, scalable, and designed for a top-notch user experience.",
  },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            What I Do
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive web solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {services.slice(0, showAll ? services.length : 6).map((service, index) => (
            <Reveal key={index} side={index % 2 === 0 ? "left" : "right"}>
              <Card
                title={service.title}
                description={service.description}
                icon={service.icon}
                isActive={activeCard === index}
                onHover={() => setActiveCard(index)}
                onLeave={() => setActiveCard(null)}
              />
            </Reveal>
          ))}
        </div>

        <motion.button
          onClick={() => setShowAll(!showAll)}
          className="mx-auto mt-12 px-8 py-4 bg-accent text-primary font-semibold rounded-lg 
                    hover:bg-secondary transition-all duration-300 flex items-center gap-2 
                    shadow-lg hover:shadow-secondary/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAll ? (
            <>
              Show Less
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
              </svg>
            </>
          ) : (
            <>
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </>
          )}
        </motion.button>
      </div>
    </section>
  );
};

export default Services;