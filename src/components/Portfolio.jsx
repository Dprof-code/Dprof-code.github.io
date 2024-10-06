import "./Portfolio.css";
import { useState } from "react";
import Reveal from "./Reveal"; // Import the Reveal component

const projects = [
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
    title: "DeMosaic Homes Real Estate Website",
    description: "",
    technologies: ["Wordpress", "Elementor", "CSS"],
    codeLink: "#",
    liveLink: "https://demosaichomes.com",
    image: "/projects/thumbnails/DeMosaic Homes.png",
  },
  {
    title: "Crypto Zaurio Presale and Token Website",
    description: "",
    technologies: ["React", "CSS", "ChartJS", "ThirdWeb", "Solidity", "Web3"],
    codeLink: "#",
    liveLink: "https://cryptozaurio.com",
    image: "/projects/thumbnails/CryptoZaurio.png",
  },
  {
    title: "Vincent Decent Footwears Website",
    description: "",
    technologies: ["React", "Bootstrap", "CSS"],
    codeLink: "#",
    liveLink: "https://vincent-decent-footwears.netlify.app",
    image: "/projects/thumbnails/Vincent Footwears.png",
  },
  {
    title: "Rentals Hub Website",
    description: "",
    technologies: ["HTML", "CSS", "JavaScript"],
    codeLink: "#",
    liveLink: "https://rentals-hub.netlify.app",
    image: "/projects/thumbnails/Rentals Hub.png",
  },
  {
    title: "Broad Kapital Website",
    description: "",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    codeLink: "#",
    liveLink: "https://broadkapital.com/",
    image: "/projects/thumbnails/BroadKapital.png",
  },
  {
    title: "Easync Dropshipping Website",
    description: "",
    technologies: ["HTML", "CSS", "JavaScript"],
    codeLink: "#",
    liveLink: "https://myeasync.netlify.app/",
    image: "/projects/thumbnails/Easync Dropshipping.png",
  },
  {
    title: "Fination Website",
    description: "",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    codeLink: "#",
    liveLink: "https://finationglobal.com/",
    image: "/projects/thumbnails/Fination.png",
  },
  {
    title: "Foodz Hub Restaurant Website",
    description: "",
    technologies: ["Wordpress", "Elementor", "CSS"],
    codeLink: "#",
    liveLink: "https://foodz-hub.netlify.app/",
    image: "/projects/thumbnails/Foodz Hub.png",
  },
  {
    title: "Livefree Website",
    description: "",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    codeLink: "#",
    liveLink: "https://livefreeinternational.org/",
    image: "/projects/thumbnails/Livefree.png",
  },
  {
    title: "Shipping Invoice Template",
    description: "",
    technologies: ["HTML", "CSS"],
    codeLink: "#",
    liveLink: "https://shipping-template.netlify.app/",
    image: "/projects/thumbnails/Shipping Invoice.png",
  },
  {
    title: "Tech Book Hub Website",
    description: "",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    codeLink: "#",
    liveLink: "#",
    image: "/projects/thumbnails/Tech BookHub.png",
  },
  {
    title: "TPSU Campus Event Management System Website",
    description: "",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    codeLink: "#",
    liveLink: "https://tpsucampus.com/event",
    image: "/projects/thumbnails/TPSU Campus Event Management System.png",
  },
  {
    title: "Vista Delmar Villa Vacation Website",
    description: "",
    technologies: ["Wordpress", "Elementor", "CSS", "JavaScript"],
    codeLink: "#",
    liveLink: "https://vistadelmar-villa.com/",
    image: "/projects/thumbnails/Vista Delmar Villa Vacation Rentals.png",
  },
  {
    title: "Web3 Blog Website",
    description: "",
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
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
