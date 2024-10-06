import { Hourglass } from "react-loader-spinner";

const Preloader = () => {
  return (
    <div className="preloader">
      <Hourglass
        visible={true}
        height="50"
        width="50"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#101630", "#ffcc00"]}
      />
    </div>
  );
};

export default Preloader;
