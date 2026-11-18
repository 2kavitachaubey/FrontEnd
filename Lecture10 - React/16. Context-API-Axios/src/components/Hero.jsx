import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is Product Hero Page</h1>
      <button
        onClick={() => {
          navigate("/Products");
        }}
      >
        Explore More
      </button>
    </div>
  );
};

export default Hero;
