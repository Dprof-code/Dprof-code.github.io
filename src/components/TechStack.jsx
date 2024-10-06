import "./TechStacks.css";
import PropTypes from "prop-types";

const TechStack = ({ image, title }) => {
  return (
    <div className="tech-stack">
      <img src={image} alt={title} className="tech-stack-image" />
      <h3 className="tech-stack-title">{title}</h3>
    </div>
  );
};

TechStack.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TechStack;
