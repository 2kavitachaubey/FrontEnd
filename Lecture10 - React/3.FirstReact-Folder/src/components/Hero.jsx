import React from "react";

const Hero = () => {
  return (
    <div
      className=" hero relative flex flex-coloumn items-center text-center  min-h-[78vh] mt-[8px] mx-[24px] mb-[24px] 
    pt-[70px] px-[24px] pb-[32px] rounded-[28px] overflow-hidden bg-[url('/heroPage-Background.jpg')] 
    bg-center bg-cover bg-no-repeat"
    >
      <div className="hero-content">
        <h1 className="heroPage-heading">Unleash Your Inner Champion Today.</h1>
        <h1 className="heroPage-heading">All In One Place.</h1>
        <p className="heroPage-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum
          amet in!
        </p>
        <p className="heroPage-para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="black-btn">
          <button>Start your own journey</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
