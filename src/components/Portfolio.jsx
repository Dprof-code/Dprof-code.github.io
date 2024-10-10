import "./Portfolio.css";
import { useState, Suspense } from "react";
import Reveal from "./Reveal"; // Import the Reveal component

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

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="portfolio" className="container portfolio">
      <h2 className="portfolio-header">Portfolio</h2>
      {projects
        .slice(0, showAll ? projects.length : 2)
        .map((project, index) => (
          <div
            className={`project ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <Reveal side={index % 2 === 0 ? "left" : "right"}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span className="tech-icon" key={techIndex}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal side={index % 2 === 0 ? "right" : "left"}>
              <div className="project-image-frame">
                <Suspense fallback={<div>Loading...</div>}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                </Suspense>
              </div>
              {project.liveLink != "#" && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-url"
                >
                  Live Preview
                </a>
              )}
            </Reveal>
          </div>
        ))}
      <button className="view-all-button" onClick={handleToggle}>
        {showAll ? "Show Less" : "View All"}
      </button>
    </section>
  );
};

export default Portfolio;
