import React from "react";
import Container from "../../../components/Container";
import { motion } from "framer-motion";

const AboutSection8 = () => {
  return (
    <section className="font-instrument mt-32  text-black">
      <Container>
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-4  lg:col-span-1 pe-5 lg:border-r lg:h-[80dvh] flex flex-col justify-between border-black">
            <p className="text-5xl text-clean lg:text-6xl font-medium tracking-tighter">
              challenge
            </p>
            <p className="lg:text-xl tracking-tight text-base max-lg:my-10">
              <span className="text-clean">At KHH Secco Sorb,</span> we
              recognized the challenges businesses faced in{" "}
              <span className="text-clean">preserving product quality</span>{" "}
              during storage and transport and knew we could make a difference.
            </p>
            <div className="overflow-x-hidden lg:hidden">
              <svg
                width="1236"
                height="2"
                viewBox="0 0 1236 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d="M0 1H275H615.5H903H1223H1235.5"
                  stroke="black"
                />
              </svg>
            </div>
          </div>

          <div className="col-span-4  lg:col-span-1 lg:border-r pe-5 lg:h-[80dvh] flex flex-col justify-between border-black">
            <p className="text-5xl lg:text-6xl font-medium tracking-tighter">
              our <span className="text-clean">mission</span>
            </p>
            <p className="lg:text-xl tracking-tight text-base max-lg:my-10">
              We started with a{" "}
              <span className="text-clean">simple idea—provide</span> reliable
              solutions to protect products during storage and transit. We
              identified the challenges face in maintaining product quality and
              knew we could help.
            </p>
            <div className="overflow-x-hidden lg:hidden">
              <svg
                width="1236"
                height="2"
                viewBox="0 0 1236 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d="M0 1H275H615.5H903H1223H1235.5"
                  stroke="black"
                />
              </svg>
            </div>
          </div>
          <div className="col-span-4  lg:col-span-1  lg:border-r pe-5 lg:h-[80dvh] flex flex-col justify-between border-black">
            <p className="text-5xl lg:text-6xl text-clean font-medium tracking-tighter">
            customer-focused <span className="text-black">approach</span>
            </p>
            <p className="lg:text-xl tracking-tight text-base max-lg:my-10">
              Beyond innovation, our team is dedicated to{" "}
              <span className="text-clean">understanding your needs</span> and
              providing tailored solutions that truly make an impact.
            </p>
            <div className="overflow-x-hidden lg:hidden">
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
                  stroke="black"
                />
              </svg>
            </div>
          </div>
          <div className="col-span-4  lg:col-span-1 pe-5 lg:h-[80dvh] flex flex-col justify-between border-black">
            <p className="text-5xl lg:text-6xl font-medium tracking-tighter">
              <span className="text-clean">tailored</span> for your
              needs
            </p>
            <p className="lg:text-xl tracking-tight text-base max-lg:my-10">
              Our team understands your needs and delivers{" "}
              <span className="text-clean">customized solutions </span>
              for maximum protection.
            </p>

            <div className="overflow-x-hidden lg:hidden">
              <svg
                width="1236"
                height="2"
                viewBox="0 0 1236 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d="M0 1H275H615.5H903H1223H1235.5"
                  stroke="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection8;
