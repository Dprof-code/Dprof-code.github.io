import "./Counters.css";
import Count from "./Count";
import Reveal from "./Reveal";

const stats = [
  { title: "Years of Experience", count: 5 },
  { title: "Websites Built", count: 100 },
  { title: "Satisfied Clients", count: 100 },
  { title: "Technologies", count: 20 },
];

const Counters = () => {
  return (
    <section className="counter container">
      <div className="counters-container">
        {stats.map((stat, index) => (
          <Reveal key={index} side="top">
            <Count title={stat.title} count={stat.count} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Counters;
