import React, { useEffect } from "react";
import AboutSection1 from "../components/AboutSection1";
import AboutSection2 from "../components/AboutSection2";
import Lenis from "lenis";
import AboutSection3 from "../components/AboutSection3";
import AboutSection4 from "../components/AboutSection4";
import AboutSection5 from "../components/AboutSection5";
import AboutSection6 from "../components/AboutSection6";
import AboutSection7 from "../components/AboutSection7";

const AboutPage = () => {
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
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
      <AboutSection5 />
      <AboutSection6 />
      <AboutSection7 />
    </>
  );
};

export default AboutPage;
