import React, { useEffect } from "react";
import ProcessSection1 from "../components/ProcessSection1";
import ProcessSection2 from "../components/ProcessSection2";
import ProcessSection3 from "../components/ProcessSection3";
import ProcessSection4 from "../components/ProcessSection4";
import ProcessSection5 from "../components/ProcessSection5";
import ProcessSection6 from "../components/ProcessSection6";
import Lenis from "lenis";

const ProcessPage = () => {
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
      <ProcessSection1 />
      <ProcessSection2 />
      <ProcessSection3 />
      <ProcessSection4 />
      <ProcessSection5 />
      <ProcessSection6 />
    </>
  );
};

export default ProcessPage;
