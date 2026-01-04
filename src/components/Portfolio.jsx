import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

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

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-playfair font-bold text-center text-white mb-6"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 text-center text-lg mb-16 max-w-3xl mx-auto"
        >
          Explore my portfolio of innovative web applications, featuring modern design,
          cutting-edge technology, and exceptional user experiences.
        </motion.p>

        <>
          <div className="grid grid-cols-1 gap-12 mx-auto max-w-md md:max-w-none px-4">
            {projects.slice(0, showAll ? projects.length : 3).map((project, index) => (
              <Reveal key={project.id} side={index % 2 === 0 ? "left" : "right"}>
                <motion.div
                  className="relative grid md:grid-cols-2 gap-8 items-center bg-primary/30 
                             rounded-2xl p-6 border border-secondary/20 backdrop-blur-sm
                             hover:border-secondary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Project Image */}
                  <div className={index % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}>
                    <motion.div
                      className="relative overflow-hidden rounded-xl group"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-80 object-cover rounded-xl shadow-2xl
                                   group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className={`${index % 2 === 0 ? 'order-2' : 'order-2 md:order-1'} space-y-6`}>
                    <motion.h3
                      className="text-2xl md:text-3xl font-playfair font-bold text-white"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-300 text-base leading-relaxed"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Technologies */}
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {project.technologies && project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-secondary/20 text-secondary rounded-full
                                     border border-secondary/30 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>

                    {/* Project Links */}
                    <motion.div
                      className="flex gap-4"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      {project.live_link && project.live_link !== '#' && (
                        <motion.a
                          href={project.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-accent text-primary 
                                     font-semibold rounded-lg hover:bg-secondary transition-all duration-300
                                     shadow-lg hover:shadow-accent/20"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>Live Demo</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.a>
                      )}

                      {project.github_link && project.github_link !== '#' && (
                        <motion.a
                          href={project.github_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 border-2 border-secondary/30 
                                     text-secondary font-semibold rounded-lg hover:border-secondary 
                                     hover:bg-secondary/10 transition-all duration-300"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>GitHub</span>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          {/* Show More/Less Button */}
          {projects.length > 3 && (
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-4 bg-primary/30 text-secondary border-2 border-secondary/30 
                           font-semibold rounded-lg hover:border-secondary hover:bg-secondary/10 
                           transition-all duration-300 backdrop-blur-sm shadow-lg flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{showAll ? 'Show Less' : 'View All Projects'}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            </motion.div>
          )}
        </>

      </div>
    </section>
  );
};

export default Portfolio;