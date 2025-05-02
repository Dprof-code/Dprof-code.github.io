import { Hourglass } from "react-loader-spinner";

const Preloader = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50
                    flex items-center justify-center">
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