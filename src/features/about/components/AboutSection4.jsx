import React, { useRef } from "react";
import Container from "../../../components/Container";
import { useInView, motion } from "framer-motion";
import { slideUp } from "../../../components/animation";

const AboutSection4 = () => {
  return (
    <section className="text-center text-clean mt-32 ">
      <Container>
        <div className=" flex flex-col justify-center">
          <p className="text-6xl leading-tight tracking-tight md:text-[128px] font-instrument font-semibold md:leading-[8rem]">
            Feel Free To Visit And Inquire In Person At Our Office
          </p>
        </div>
        <div className="flex justify-center my-10 overflow-hidden">
          <svg
            width="79"
            height="244"
            viewBox="0 0 79 244"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut"
              }}
              d="M61.6956 2C63.8985 38.0446 56.4207 68.9965 25.0832 89.5833C14.5342 96.5134 -3.07107 99.3175 3.38705 79.8518C9.38616 61.7697 36.0822 52.0999 53.1721 59.1238C78.8182 69.6643 80.086 100.462 73.8997 124.227C64.3288 160.994 51.6165 196.97 32.4445 229.717C28.5392 236.387 20.1799 188.306 25.0832 204.317C28.5442 215.619 28.5701 225.913 28.5701 237.599C28.5701 246.014 31.3789 240.632 35.5439 235.75C42.3128 227.816 53.2429 220.016 63.439 217.455"
              stroke="#0D5BE1"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection4;
