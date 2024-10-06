import "./Services.css";
import PropTypes from "prop-types";

const Card = ({ title, description, icon }) => {
  return (
    <div className="service-box">
      <div className="service-header">
        <div className="service-icon">{icon}</div>
        <h3 className="service-title">{title}</h3>
      </div>
      <p className="service-description">{description}</p>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.object,
};
