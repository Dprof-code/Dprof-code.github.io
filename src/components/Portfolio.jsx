import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const projects = [
  {
    title: "DeMosaic Homes Real Estate Website",
    description:
      "A responsive real estate website built to showcase property listings, allowing users to search and explore available homes effortlessly.",
    technologies: ["WordPress", "Elementor", "CSS"],
    codeLink: "#",
    liveLink: "https://demosaichomes.com",
    image: "/projects/thumbnails/DeMosaic Homes.png",
  },
  {
    title: "Foodz Hub Restaurant Website",
    description:
      "A dynamic restaurant website, featuring an online menu, reservation system, and a visually rich layout to attract food lovers.",
    technologies: ["WordPress", "Elementor", "CSS"],
    codeLink: "#",
    liveLink: "https://foodz-hub.netlify.app/",
    image: "/projects/thumbnails/Foodz Hub.png",
  },
  {
    title: "Vincent Decent Footwears Website",
    description:
      "An e-commerce website for Vincent Decent Footwears, allowing customers to browse and purchase shoes with a user-friendly interface.",
    technologies: ["React", "Bootstrap", "CSS"],
    codeLink: "#",
    liveLink: "https://vincent-decent-footwears.netlify.app",
    image: "/projects/thumbnails/Vincent Footwears.png",
  },
  {
    title: "Hybrid Meme Crypto Website",
    description:
      "A fun and engaging website built for a meme-based cryptocurrency project, featuring real-time price tracking and community-driven content.",
    technologies: ["React", "CSS", "ChartJS", "ThirdWeb"],
    codeLink: "#",
    liveLink: "https://hybridmemuspace.netlify.app",
    image: "/projects/thumbnails/Hybrid Memu.png",
  },
  {
    title: "Crypto Zaurio Presale and Token Website",
    description:
      "A presale and token launch platform for Crypto Zaurio, featuring live token metrics, smart contract integration, and presale functionality.",
    technologies: ["React", "CSS", "ChartJS", "ThirdWeb", "Solidity", "Web3"],
    codeLink: "#",
    liveLink: "https://cryptozaurio.com",
    image: "/projects/thumbnails/CryptoZaurio.png",
  },
  {
    title: "Rentals Hub Website",
    description:
      "A sleek rental platform for managing properties, allowing users to search, filter, and book rental properties easily.",
    technologies: ["HTML", "CSS", "JavaScript"],
    codeLink: "#",
    liveLink: "https://rentals-hub.netlify.app",
    image: "/projects/thumbnails/Rentals Hub.png",
  },
  {
    title: "Broad Kapital Website",
    description:
      "A corporate website for Broad Kapital, providing financial services with a focus on user-friendly navigation and a professional design.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    codeLink: "#",
    liveLink: "https://broadkapital.com/",
    image: "/projects/thumbnails/BroadKapital.png",
  },
  {
    title: "Easync Dropshipping Website",
    description:
      "A dropshipping website designed to facilitate easy and seamless order fulfillment for E-commerce businesses.",
    technologies: ["HTML", "CSS", "JavaScript"],
    codeLink: "#",
    liveLink: "https://myeasync.netlify.app/",
    image: "/projects/thumbnails/Easync Dropshipping.png",
  },
  {
    title: "Fination Website",
    description:
      "A corporate site for Fination, providing global financial solutions with an intuitive and visually appealing interface.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    codeLink: "#",
    liveLink: "https://finationglobal.com/",
    image: "/projects/thumbnails/Fination.png",
  },
  {
    title: "Livefree Website",
    description:
      "A non-profit organization website designed for Livefree International, featuring event management and donation functionalities.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    codeLink: "#",
    liveLink: "https://livefreeinternational.org/",
    image: "/projects/thumbnails/Livefree.png",
  },
  {
    title: "Shipping Invoice Template",
    description:
      "A simple, clean template for generating shipping invoices, designed to make order management and invoicing seamless.",
    technologies: ["HTML", "CSS"],
    codeLink: "#",
    liveLink: "https://shipping-template.netlify.app/",
    image: "/projects/thumbnails/Shipping Invoice.png",
  },
  {
    title: "Tech Book Hub Website",
    description:
      "An online platform designed for book enthusiasts, offering an interactive and user-friendly interface to explore tech books.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    codeLink: "#",
    liveLink: "#",
    image: "/projects/thumbnails/Tech BookHub.png",
  },
  {
    title: "TPSU Campus Event Management System Website",
    description:
      "A complete event management system for TPSU Campus, featuring user registration, ticket sales, and QR code validation for event entry.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    codeLink: "#",
    liveLink: "https://tpsucampus.com/event",
    image: "/projects/thumbnails/TPSU Campus Event Management System.png",
  },
  {
    title: "Vista Delmar Villa Vacation Website",
    description:
      "A vacation rental website designed for Vista Delmar Villa, featuring property listings, booking forms, and an integrated payment system.",
    technologies: ["WordPress", "Elementor", "CSS", "JavaScript"],
    codeLink: "#",
    liveLink: "https://vistadelmar-villa.com/",
    image: "/projects/thumbnails/Vista Delmar Villa Vacation Rentals.png",
  },
  {
    title: "Web3 Blog Website",
    description:
      "A blog platform built for the Web3 community, offering articles, tutorials, and resources about blockchain and decentralized applications.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    codeLink: "#",
    liveLink: "#",
    image: "/projects/thumbnails/Web3 Blog.png",
  },
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-playfair font-bold text-white text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-12 mx-auto max-w-md md:max-w-none px-4">
            {projects.slice(0, showAll ? projects.length : 3).map((project, index) => (
              <Reveal key={index} side={index % 2 === 0 ? "left" : "right"}>
                <motion.div
                  className="relative grid md:grid-cols-2 gap-8 items-center bg-primary/30 
                          rounded-2xl p-6 border border-secondary/20 backdrop-blur-sm
                          hover:border-secondary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Project Image */}
                  <div className={`${index % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}`}>
                    <motion.div
                      className="relative group"
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                    >
                      <div className="absolute inset-0 bg-accent/20 rounded-xl transform rotate-3 
                                  group-hover:rotate-0 transition-transform duration-300" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="relative rounded-xl shadow-2xl w-full h-[300px] object-cover 
                              transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"
                        loading="lazy"
                      />
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className={`space-y-4 ${index % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full 
                                border border-accent/20 hover:border-accent/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.liveLink !== "#" && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-accent text-primary font-semibold 
                              rounded-lg hover:bg-secondary transition-all duration-300 
                              shadow-lg hover:shadow-secondary/20"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Preview
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
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
              View All Projects
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

export default Portfolio;