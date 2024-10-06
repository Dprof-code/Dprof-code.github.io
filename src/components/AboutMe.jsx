import "./AboutMe.css";
import Reveal from "./Reveal";

const AboutMe = () => {
  return (
    <section id="about" className="container">
      <div className="about-me">
        <Reveal className="about-me-left" side="left">
          <div className="image-frame">
            <img
              src="/headshots/img-3.jpg"
              alt="Adedamola Olawale"
              className="about-me-image"
            />
          </div>
        </Reveal>
        <Reveal className="about-me-right" side="right">
          <div>
            <h2 className="about-me-header">About Me</h2>
            <div className="catch-texts">
              <p className="headline">Your Digital Transformation Partner:</p>
              <p className="tagline">
                Providing Optimized Business Solutions,
                <br /> One Line of {"<Code/>"} at a Time...
              </p>
            </div>
            <p className="about-me-paragraph">
              My name is Abraham Adedamola Olawale. I am a Fullstack Software
              Developer with more than 5 years of experience in building web
              applications using modern technologies. I am passionate about
              coding and always eager to learn new things.
            </p>
            <div className="about-me-buttons">
              <a href="#contact" className="about-me-button hire-me">
                Hire Me
              </a>
              <a
                href="/resume/Adedamola Olawale - FullStack Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="about-me-button resume"
              >
                My Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutMe;
