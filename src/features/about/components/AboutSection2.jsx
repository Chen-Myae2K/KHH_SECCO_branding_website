import React from "react";
import { HiArrowDownRight } from "react-icons/hi2";
import ScrollBaseAnimation from "../../../components/TextMarquee";
import Container from "../../../components/Container";
import TextReveal from "../../../components/TextReveal";

const phrase1 =
  "when you choose us , you are trusting us to protect your products.";

const AboutSection2 = () => {
  return (
    <section className="bg-clean h-screen mt-32 flex flex-col justify-between font-instrument">
      <ScrollBaseAnimation
        scrollDependent={true}
        clasname="md:text-4xl text-xl py-4 text-white"
      >
        <span className="px-5">
          High-quality desiccants
          <HiArrowDownRight className="inline-block" />{" "}
        </span>
        <span className="px-5">
          Non-toxic
          <HiArrowDownRight className="inline-block" />{" "}
        </span>
        <span className="px-5">
          Environmentally safe
          <HiArrowDownRight className="inline-block" />
        </span>
        <span className="ps-5">
          Preserving at its best
          <HiArrowDownRight className="inline-block" />
        </span>
      </ScrollBaseAnimation>
      <Container>
        <div className="text-[45px] text-white md:text-[90px] font-medium leading-[1] text-center">
          <TextReveal phrase={phrase1} />
        </div>
      </Container>
      <ScrollBaseAnimation
        //   delay={500}
        scrollDependent={true}
        clasname="md:text-4xl text-xl py-4 text-white"
      >
        <span className="px-5">
          High-quality desiccants
          <HiArrowDownRight className="inline-block" />{" "}
        </span>
        <span className="px-5">
          Non-toxic
          <HiArrowDownRight className="inline-block" />{" "}
        </span>
        <span className="px-5">
          Environmentally safe
          <HiArrowDownRight className="inline-block" />
        </span>
        <span className="ps-5">
          Preserving at its best
          <HiArrowDownRight className="inline-block" />
        </span>
      </ScrollBaseAnimation>
    </section>
  );
};

export default AboutSection2;
