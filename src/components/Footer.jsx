import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="container footer">
      <div className="footer-logo">
        <Logo />
        {/* <img src="/logo.png" alt="ProDevX Tech Logo" className="logo-image" /> */}
      </div>
      <div className="footer-social">
        <a
          href="https://facebook.com/olawale.adedamola1"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com/pr0devs"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/adedamola-olawale-b9b1641a2"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/dprof-code"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://wa.me/+2349025846456"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaWhatsapp />
        </a>
      </div>
      <div className="footer-text">
        <p>2024 - ProDevX Tech, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
