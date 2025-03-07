import React from "react";
import HomeSection1 from "../components/HomeSection1";
import TextReveal from "../../../components/TextReveal";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import HeroSection from "../components/herosection";
import HomeSection4 from "../components/HomeSection4";

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <HomeSection1 />
      <HomeSection2/>
      <HomeSection3/>
      <HomeSection4/>
    </>
  );
};

export default HomePage;
