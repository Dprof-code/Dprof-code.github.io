import TechStack from "./TechStack";
import "./TechStacks.css";
import Reveal from "./Reveal"; // Import the Reveal component

const techStacks = [
  { title: "WordPress", image: "/tech-stacks/wordpress.webp" },
  { title: "Shopify", image: "/tech-stacks/shopify.webp" },
  { title: "React", image: "/tech-stacks/react.webp" },
  { title: "PHP", image: "/tech-stacks/php.webp" },
  { title: "JavaScript", image: "/tech-stacks/javascript.webp" },
  { title: "CSS", image: "/tech-stacks/css.webp" },
  { title: "HTML", image: "/tech-stacks/html.webp" },
  { title: "Python", image: "/tech-stacks/python.webp" },
  { title: "jQuery", image: "/tech-stacks/jquery.webp" },
  { title: "Bootstrap", image: "/tech-stacks/bootstrap.webp" },
  { title: "TypeScript", image: "/tech-stacks/typescript.webp" },
  { title: "C", image: "/tech-stacks/c.webp" },
  { title: "Figma", image: "/tech-stacks/figma.webp" },
  { title: "Git", image: "/tech-stacks/git.webp" },
  { title: "GitHub", image: "/tech-stacks/github.webp" },
  { title: "MySQL", image: "/tech-stacks/mysql.webp" },
  { title: "Node.js", image: "/tech-stacks/nodejs.webp" },
  { title: "Software Development", image: "/tech-stacks/software.webp" },
  { title: "Linux", image: "/tech-stacks/linux.webp" },
];

const TechStacks = () => {
  return (
    <section id="experience" className="container tech-stacks">
      <h2 className="tech-stacks-header">Experience</h2>
      <div className="tech-stacks-container">
        {techStacks.map((tech, index) => (
          <Reveal key={index} side="top">
            <TechStack title={tech.title} loading="lazy" image={tech.image} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default TechStacks;
