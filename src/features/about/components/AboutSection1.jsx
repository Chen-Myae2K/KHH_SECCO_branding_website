import React from "react";
import Container from "../../../components/Container";
import TextReveal from "../../../components/TextReveal";

const phrase1 =
  "Moisture Control Experts, Innovation, Reliability are at the Heart of our philosophy.";
const AboutSection1 = () => {
  return (
    <section className=" ">
      <Container>
        <div className="font-instrument text-clean text-[45px] md:text-[90px] my-[30%] lg:my-[20%] font-medium leading-[1] ">
          <TextReveal phrase={phrase1} />
        </div>
      </Container>
    </section>
  );
};

export default AboutSection1;
