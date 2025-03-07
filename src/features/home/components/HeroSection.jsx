import React from "react";
import cargoship from "../../../images/cargoship.png";
import cargoshipmobile from "../../../images/cargoshipvertical.png"

const HeroSection = () => {
  return (
    <section className="w-[98%] mx-auto pt-1">
      <div className="md:block hidden">
        <img src={cargoship} className="" alt="" />
      </div>
      <div className="md:hidden block">
        <img src={cargoshipmobile} className="w-full " alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
