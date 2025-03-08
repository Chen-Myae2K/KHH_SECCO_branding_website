import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../../../components/Container";
import { HiArrowDownRight } from "react-icons/hi2";
import { slideUp } from "../../../components/animation";
import dottedblue from "../../../images/blueheartdotted.png";

const phrase1 =
  "We take pride in collaborating with industry leading partners to deliver the best to our customers. Each of our partners brings unique expertise, empowering us to achieve excellence together.";

const HomeSection5 = () => {
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <section className="text-black font-instrument mt-32 tracking-tighter">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-1 md:text-3xl text-xl max-lg:mb-10">
            (Partners)
          </div>
          <div className="lg:col-span-2 grid-cols-1 md:text-3xl text-lg md:leading-[47px] ">
            <p className="mb-10 leading-tight" ref={description}>
              {phrase1.split(" ").map((word, index) => {
                if (
                  word === "together." ||
                  word === "deliver" ||
                  word === "the" ||
                  word === "best"
                ) {
                  return (
                    <span
                      key={index}
                      className="inline-block overflow-hidden text-clean"
                    >
                      <motion.span
                        variants={slideUp}
                        custom={index}
                        animate={isInView ? "open" : "closed"}
                        className="inline-block"
                      >
                        {word}&nbsp;
                      </motion.span>
                    </span>
                  );
                }
                return (
                  <span key={index} className="inline-block overflow-hidden">
                    <motion.span
                      variants={slideUp}
                      custom={index}
                      animate={isInView ? "open" : "closed"}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  </span>
                );
              })}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 items-baseline ">
          <div className="col-span-1 lg:block hidden md:text-3xl text-lg">
            <p><span className="text-clean">Special thanks</span> to our amazing partners for their support!</p>
            <div className="group hover:text-clean hover:border-b-clean inline-flex items-center gap-2 pe-1 mt-7 border-b-[1.5px] border-ink">
              <HiArrowDownRight className="inline-block size-5 group-hover:-rotate-45 duration-200 " />
              <span className="md:text-xl text-sm">Become a partner</span>
            </div>
          </div>
          <div className="col-span-2 ms-auto">
            <img src={dottedblue} className="lg:w-[300px] w-[200px]" alt="" />
          </div>
          <div className="col-span-1 lg:hidden md:text-3xl text-lg">
            <p><span className="text-clean">Special thanks</span> to our amazing partners for their support!</p>
            <div className="group hover:text-clean hover:border-b-clean inline-flex items-center gap-2 pe-1 mt-7 border-b-[1.5px] border-ink">
              <HiArrowDownRight className="inline-block size-5 group-hover:-rotate-45 duration-200 " />
              <span className="md:text-xl text-base">Become a partner</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeSection5;
