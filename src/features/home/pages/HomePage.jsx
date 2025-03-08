import React, { useEffect } from "react";
import HomeSection1 from "../components/HomeSection1";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import HomeSection4 from "../components/HomeSection4";
import HomeSection5 from "../components/HomeSection5";
import HomeSection6 from "../components/HomeSection6";
import Lenis from "lenis";
import HeroSec from "../components/HeroSec";

const HomePage = () => {
  useEffect(() => {
    const lenis = new Lenis();

    // Scroll to the top after Lenis initializes
    setTimeout(() => {
      lenis.scrollTo(0, { immediate: true });
    }, 100);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <HeroSec />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
    </>
  );
};

export default HomePage;
