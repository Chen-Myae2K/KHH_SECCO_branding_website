"use client";
import React, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "./page.module.css";

const TextReveal = ({ phrase = "" }) => {
  // Set a default empty string
  const refs = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "center 90%",
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  const splitWords = (text) => {
    if (!text) return null; // Prevents error if text is undefined/null
    return text
      .split(" ")
      .map((word, i) => <p key={word + "_" + i}>{splitLetters(word)}</p>);
  };

  const splitLetters = (word) => {
    return word.split("").map((letter, i) => (
      <span key={letter + "_" + i} ref={(el) => refs.current.push(el)}>
        {letter}
      </span>
    ));
  };

  return (
    <main ref={container} className={styles.main}>
      <div className={styles.body}>{splitWords(phrase)}</div>
    </main>
  );
};

export default TextReveal;
