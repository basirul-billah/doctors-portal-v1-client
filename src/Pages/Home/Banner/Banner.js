import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import PrimaryButton from "../../../Components/PrimaryButton";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
      }}
    >
      <div className="hero text-accent">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="rounded-lg lg:w-1/2 shadow-xl" alt="" />
          <div>
            <h1 className="text-2xl lg:text-5xl font-bold">
              Smile with Confidence!
            </h1>
            <p className="py-6">
              Experience exceptional dental care with our highly skilled team.
              From routine checkups to advanced treatments, we provide
              comprehensive care for all ages.
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
