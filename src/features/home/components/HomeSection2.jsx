import React from "react";
import Container from "../../../components/Container";
import { HiArrowDownRight } from "react-icons/hi2";
import fourjars from "../../../images/fourjars.png";
import fourjarsbg from "../../../images/4jarbgrice.png"

const HomeSection2 = () => {
  return (
    <section className="text-black font-instrument tracking-tight">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-1 text-3xl max-lg:mb-10">(Info)</div>
          <div className="lg:col-span-2 grid-cols-1 md:text-4xl text-2xl md:leading-[47px] ">
            <p className="mb-10">
              This is a place where moisture meets its match. A place of
              protection. A place of{" "}
              <span className="text-clean">preservation.</span> A place where an
              advanced desiccant technology to maintain quality and stability.
            </p>
            <p>
              This is no ordinary place. This is a place where boundaries are
              pushed,{" "}
              <span className="text-clean">solutions are engineered</span> and
              excellence is the standard. Come discover the power of protection
              with us.
            </p>
            <div className="group hover:text-clean hover:border-b-clean inline-flex items-center gap-2 pe-1 mt-7 border-b-[1.5px] border-ink">
              <HiArrowDownRight className="inline-block size-5 group-hover:-rotate-45 duration-200 " />
              <span className="md:text-xl text-lg">
                Our Company
              </span>
            </div>
          </div>
        </div>
        <div className="flex max-lg:flex-col justify-between gap-2 mt-10 ">
            <img src={fourjars} alt="" />
            <img src={fourjarsbg} alt="" />
        </div>
      </Container>
    </section>
  );
};

export default HomeSection2;
