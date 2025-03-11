import React, { useEffect } from "react";
import ContactSection from "../components/ContactSection";
import Lenis from "lenis";

const ContactPage = () => {
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
      <ContactSection />
    </>
  );
};

export default ContactPage;
