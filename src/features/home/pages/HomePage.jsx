import React from "react";
import HomeSection1 from "../components/HomeSection1";
import HeroSection from "../components/HeroSection"
import TextReveal from "../../../components/TextReveal";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <HomeSection1 />
      <HomeSection2/>
      <HomeSection3/>
    </>
  );
};

export default HomePage;
