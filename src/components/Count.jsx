import PropTypes from "prop-types";
import CountUp from "react-countup";
import "./Counters.css";

const Count = ({ count, title }) => {
  return (
    <div className="count-container">
      <CountUp
        className="count"
        delay={0}
        end={count}
        duration={2}
        suffix=" +"
        enableScrollSpy={true}
      />
      <div className="title">{title}</div>
    </div>
  );
};

export default Count;

Count.propTypes = {
  count: PropTypes.number,
  title: PropTypes.string,
};
