import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

const Loader = ({ loading }) => {
  return (
    <div className="h-screen flex justify-center items-center bg-white/40 backdrop-blur-md">
      <MoonLoader
        color="#4CAF50"
        size={70}         
        loading={loading}
        speedMultiplier={1}
      />
    </div>
  );
};

export default Loader;
