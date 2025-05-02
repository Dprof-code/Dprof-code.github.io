import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "./Logo";

const socialLinks = [
  {
    href: "https://facebook.com/olawale.adedamola1",
    icon: <FaFacebook />,
    label: "Facebook",
  },
  {
    href: "https://twitter.com/pr0devs",
    icon: <FaTwitter />,
    label: "Twitter",
  },
  {
    href: "https://www.linkedin.com/in/adedamola-olawale-b9b1641a2",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/dprof-code",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    href: "https://wa.me/+2349025846456",
    icon: <FaWhatsapp />,
    label: "WhatsApp",
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary/95 backdrop-blur-sm border-t border-secondary/10">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo />
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-white/80 hover:text-white bg-secondary/10 
                         hover:bg-secondary/20 rounded-lg transition-all duration-300
                         hover:shadow-lg hover:shadow-secondary/10"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="text-xl">{social.icon}</span>
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Copyright Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/60 text-sm text-center md:text-right"
          >
            <p>
              © {new Date().getFullYear()} -
              <motion.span
                className="text-secondary hover:text-accent cursor-pointer ml-1"
                whileHover={{ scale: 1.05 }}
              >
                ProDevX Solutions
              </motion.span>
              , All rights reserved
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;