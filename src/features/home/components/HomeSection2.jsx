import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../../../components/Container";
import { HiArrowDownRight } from "react-icons/hi2";
import fourjars from "../../../images/fourjars.png";
import fourjarsbg from "../../../images/4jarbgrice.png";
import { slideUp } from "../../../components/animation";

const phrase1 =
  "This is a place where moisture meets its match. A place of protection. A place of preservation. A place where an advanced desiccant technology to maintain quality and stability.";

const phrase2 =
  "This is no ordinary place. This is a place where boundaries are pushed, solutions are engineered and excellence is the standard. Come discover the power of protection with us.";

const HomeSection2 = () => {
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <section className="text-black font-instrument tracking-tighter">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-1 md:text-3xl text-xl max-lg:mb-10">
            (Info)
          </div>
          <div className="lg:col-span-2 grid-cols-1 md:text-4xl text-lg md:leading-[47px] ">
            <p className="mb-10 leading-tight" ref={description}>
              {phrase1.split(" ").map((word, index) => {
                if (word === "preservation.") {
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
            <p className="mb-10 leading-tight" ref={description}>
              {phrase2.split(" ").map((word, index) => {
                if (word === "solutions" || word === "engineered") {
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
          

            <div className="group hover:text-clean hover:border-b-clean inline-flex items-center gap-2 pe-1 mt-7 border-b-[1.5px] border-ink">
              <HiArrowDownRight className="inline-block size-5 group-hover:-rotate-45 duration-200 " />
              <span className="md:text-xl text-base">Our Company</span>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-center  overflow-hidden  gap-2 mt-10 ">
          <img src={fourjars} alt="" />
          <img src={fourjarsbg} alt="" />
        </div>
      </Container>
    </section>
  );
};

export default HomeSection2;
