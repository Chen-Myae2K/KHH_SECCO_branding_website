import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { slideUp } from "../../../components/animation";
import process4 from "../../../images/process4.png";

const phrase1 =
  "To dissolve sodium silicate, creating a liquid solution. It is also used to wash the precipitated silica gel to remove excess sodium compounds and other impurities, ensuring the final product is pure and effective";

const ProcessSection5 = () => {
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <section className="font-instrument tracking-tight text-black">
      <div className="grid grid-cols-1 lg:grid-cols-3 mb-16  lg:mb-32">
        <div className="col-span-1 px-5 lg:px-10">
          <p className="text-5xl lg:text-6xl text-clean pb-5">04</p>
          <p className="lg:text-xl text-base leading-loose lg:leading-loose py-10">
            <span className="text-clean">
              <svg
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44 11.84V7.84C8.44 5.92 8.92 4.28 9.88 2.92C10.84 1.56 12.3333 0.719999 14.36 0.4V2.88C13.1867 3.04 12.3867 3.45333 11.96 4.12C11.56 4.76 11.36 5.68 11.36 6.88L9.4 6.48H14.28V11.84H8.44ZM0.6 11.84V7.84C0.6 5.92 1.08 4.28 2.04 2.92C3 1.56 4.49333 0.719999 6.52 0.4V2.88C5.34667 3.04 4.54667 3.45333 4.12 4.12C3.72 4.76 3.52 5.68 3.52 6.88L1.56 6.48H6.44V11.84H0.6Z"
                  fill="#1A6AFC"
                />
              </svg>
            </span>
            <p className="my-5 lg:my-10 leading-tight" ref={description}>
              {phrase1.split(" ").map((word, index) => {
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
            <span>
              <svg
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ms-auto"
              >
                <path
                  d="M6.56 0.160001V4.16C6.56 6.08 6.08 7.72 5.12 9.08C4.16 10.44 2.66667 11.28 0.64 11.6V9.12C1.81333 8.96 2.61333 8.54667 3.04 7.88C3.44 7.24 3.64 6.32 3.64 5.12L5.6 5.52H0.72V0.160001H6.56ZM14.4 0.160001V4.16C14.4 6.08 13.92 7.72 12.96 9.08C12 10.44 10.5067 11.28 8.48 11.6V9.12C9.65333 8.96 10.4533 8.54667 10.88 7.88C11.28 7.24 11.48 6.32 11.48 5.12L13.44 5.52H8.56V0.160001H14.4Z"
                  fill="#1A6AFC"
                />
              </svg>
            </span>
          </p>
          <div className="overflow-x-hidden">
            <svg
              width="1236"
              height="2"
              viewBox="0 0 1236 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M0 1H275H615.5H903H1223H1235.5"
                stroke="#1A6AFC"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>
        <div className="col-span-2 mt-auto max-lg:py-5 max-lg:px-5">
          <img src={process4} className="w-full lg:ps-10" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection5;
