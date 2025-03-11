import React from "react";
import cargoship from "../../../images/cargoship.png";
import cargoshipmobile from "../../../images/cargoshipvertical.png";
import Container from "../../../components/Container";

const HeroSec = () => {
  return (
    <section className="font-instrument ">
      <div className="lg:block hidden">
      <Container>
        {" "}
        <p className="text-4xl  mt-24 mb-12 lg:text-6xl text-black font-medium tracking-tighter leading-normal lg:leading-tight">
          moisture protection for
          <span className="text-clean"> lasting freshness.</span> engineered
          desiccants to
          <span className="text-clean lg:block"> safeguard your products</span>
        </p>
      </Container>
      </div>
      <div className="lg:block hidden">
        <img src={cargoship} className="" alt="" />
      </div>
      <div className="lg:hidden block">
        <img src={cargoshipmobile} className="w-full p-2" alt="" />
      </div>
    </section>
  );
};

export default HeroSec;
