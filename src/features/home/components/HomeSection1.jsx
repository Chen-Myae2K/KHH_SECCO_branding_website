import React from "react";
import Container from "../../../components/Container";
import TextReveal from "../../../components/TextReveal";

const HomeSection1 = () => {
  const phrase1 =
    "maximize protection against moisture with premium silica gel solutions.";
  return (
    <section className="font-instrument ">
      <Container>
        <div className="font-instrument text-clean text-[45px] md:text-[90px] my-[30%] lg:my-[20%] font-medium leading-[1] ">
          <TextReveal phrase={phrase1} />
        </div>
      </Container>
    </section>
  );
};

export default HomeSection1;
