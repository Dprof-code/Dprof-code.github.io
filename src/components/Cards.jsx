import Card from "./Card";
import "./Cards.css";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaServer,
  FaCogs,
  FaRocket,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Building responsive and modern web applications.",
  },
  {
    icon: <FaCogs />,
    title: "CMS Development",
    description:
      "Developing content management systems for easy content updates.",
  },
  {
    icon: <FaCogs />,
    title: "Software Development",
    description: "Creating software solutions tailored to your business needs.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Front-End Web Development",
    description: "Designing user-friendly and visually appealing interfaces.",
  },
  {
    icon: <FaServer />,
    title: "Back-End Web Development",
    description: "Building robust server-side applications and APIs.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Blockchain Development",
    description:
      "Developing decentralized applications on blockchain platforms.",
  },
  {
    icon: <FaTools />,
    title: "Website Management",
    description:
      "Managing and maintaining your website for optimal performance.",
  },
  {
    icon: <FaRocket />,
    title: "Website Deployment",
    description: "Deploying your website to live servers with best practices.",
  },
];

const Cards = () => {
  return (
    <div className="service-grid">
      {services.map((service, index) => (
        <Card
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
  );
};

export default Cards;
