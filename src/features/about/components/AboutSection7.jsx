import React from "react";
import Container from "../../../components/Container";
import letsTalk2 from "../../../images/letstalkimg2.png";

const AboutSection7 = () => {
  return (
    <section className="font-instrument text-black tracking-tighter my-16">
      <Container>
        <div className="mt-6 lg:mt-36 py-10">
          <img src={letsTalk2} className="w-full" alt="" />
        </div>
        <div className="flex flex-col place-items-end text-ink">
          <p className="text-xl lg:text-4xl py-1">
            Feel free to reach out an email on
          </p>
          <p  className="text-4xl lg:text-7xl"><a href="mailto:khhsecco@gmail.com">khhsecco@gmail.com</a></p>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection7;
