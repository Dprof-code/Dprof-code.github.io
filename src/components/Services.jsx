import "./Services.css";
import Card from "./Card";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaServer,
  FaCogs,
  FaRocket,
  FaTools,
  FaHome,
  FaBuilding,
  FaBitcoin,
  FaBolt,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { useState } from "react";
import Reveal from "./Reveal"; // Import the Reveal component

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "I design and develop modern, responsive websites tailored to your business needs. Whether you're launching a new site or need a revamp, I ensure your web application is optimized for speed, functionality, and user experience, making sure it works seamlessly across all devices.",
  },
  {
    icon: <FaCogs />,
    title: "CMS Development",
    description:
      "I specialize in building websites using popular Content Management Systems like WordPress, Shopify, and Wix. This allows you to easily manage and update your website's content without needing technical skills. From creating an online store on Shopify to launching a blog or corporate site on WordPress, I ensure your site is not only functional but also visually appealing and optimized for search engines.",
  },
  {
    icon: <FaCogs />,
    title: "Software Development",
    description:
      "I develop bespoke software solutions that are designed specifically to meet the needs of your business. From desktop applications to cloud-based solutions, my goal is to create software that simplifies your operations, increases productivity, and drives growth, with an emphasis on scalability and user-friendliness.",
  },
  {
    icon: <FaRocket />,
    title: "Website Deployment",
    description:
      "Once your website is built, I handle the entire deployment process, ensuring a smooth transition from development to live servers. I follow best practices to guarantee your site is secure, fast, and fully optimized for search engines and performance, with ongoing support to help you manage your site post-launch.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Front-End Web Development",
    description:
      "I bring your designs to life by building intuitive and visually appealing front-end interfaces. Using the latest technologies like HTML, CSS, and JavaScript, I ensure that every aspect of your site is engaging, mobile-responsive, and optimized for user experience, giving your visitors a reason to stay and explore.",
  },
  {
    icon: <FaServer />,
    title: "Back-End Web Development",
    description:
      "I develop robust, secure, and scalable back-end systems to power your web applications. From handling databases to building APIs and managing server infrastructure, my back-end development ensures that your website or app performs smoothly and can handle growing traffic and user demands.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Blockchain Development",
    description:
      "I develop decentralized applications (dApps) and smart contracts on blockchain platforms like Ethereum and Binance Smart Chain. Whether you're looking to launch an NFT marketplace, create a token, or build a decentralized finance (DeFi) platform, I provide end-to-end blockchain solutions that ensure security, transparency, and reliability.",
  },
  {
    icon: <FaTools />,
    title: "Website Management",
    description:
      "Managing a website can be overwhelming, but I provide ongoing management services to ensure your site remains up-to-date, secure, and optimized for performance. Whether you need regular content updates, security monitoring, or performance tuning, I handle it all so you can focus on running your business.",
  },
  {
    icon: <FaTools />,
    title: "Website Maintenance",
    description:
      "I offer comprehensive maintenance packages that include regular updates, backups, security patches, and performance monitoring. My goal is to keep your website running smoothly and protect it from vulnerabilities, ensuring a reliable online presence for your business.",
  },
  {
    icon: <FaHome />,
    title: "Vacation Rentals Website Development",
    description:
      "I design custom websites for vacation rental businesses, complete with features like online booking systems, property listings, and integrated payment gateways. Whether you’re managing a small B&B or a large property portfolio, I’ll help you build a site that attracts guests and makes managing bookings effortless.",
  },
  {
    icon: <FaBuilding />,
    title: "Cleaning Service Website Development",
    description:
      "I build professional websites tailored specifically for cleaning services. From showcasing your offerings to integrating scheduling systems, my goal is to create a website that not only looks great but also helps streamline client bookings and inquiries, helping you grow your business effortlessly.",
  },
  {
    icon: <FaBuilding />,
    title: "Real-Estate & AirBNB Website Development",
    description:
      "I create custom real estate and AirBNB websites that make property listings easy to manage and navigate. With built-in features like property searches, booking systems, and integration with popular platforms like AirBNB, I’ll help you showcase your properties and manage client inquiries and bookings with ease.",
  },
  {
    icon: <FaBitcoin />,
    title: "Crypto & Web3 Website Development",
    description:
      "I develop secure, user-friendly websites tailored for cryptocurrency and Web3 projects. Whether you need a landing page for your ICO, a decentralized exchange (DEX), or a platform for NFTs, I ensure your site is built with security, scalability, and user experience in mind to meet the demands of the blockchain industry.",
  },
  {
    icon: <FaBolt />,
    title: "Zapier Integration",
    description:
      "Automate your business processes with custom Zapier integrations. I help you connect apps and services, allowing you to automate repetitive tasks and streamline your workflows. From email marketing automation to CRM integration, I can create a system that saves you time and boosts efficiency.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Programming Tutor",
    description:
      "As a programming tutor, I offer personalized lessons that help you learn to code and build your skills in web and software development. Whether you're a complete beginner or looking to enhance your skills, I provide one-on-one tutoring to help you master programming languages and development tools.",
  },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="services" className="container services">
      <h2 className="services-header">Services</h2>
      <div className="service-grid">
        {services
          .slice(0, showAll ? services.length : 4)
          .map((service, index) => (
            <Reveal key={index} side="top">
              <Card
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </Reveal>
          ))}
      </div>
      <button className="view-all-button" onClick={handleToggle}>
        {showAll ? "Show Less" : "View All"}
      </button>
    </section>
  );
};

export default Services;
