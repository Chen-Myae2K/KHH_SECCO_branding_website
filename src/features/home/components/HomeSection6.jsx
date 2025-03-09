import React from "react";
import Container from "../../../components/Container";
import { FaCircle } from "react-icons/fa";
import letsTalk from "../../../images/letstalkimg.png";
import { motion, useInView } from "framer-motion";

const HomeSection6 = () => {
  return (
    <section className="font-instrument text-black tracking-tighter mt-32 mb-16">
      <Container>
        <div className="flex justify-around items-center overflow-hidden">
          <div className=" flex flex-col items-center justify-center">
            <p className="font-medium text-xs md:text-base">high quality</p>
            <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-clean pb-3">
              products
            </p>
          </div>
          <FaCircle className="flex lg:size-3 size-1 text-clean" />
          <div className=" flex flex-col items-center justify-center">
            <p className="font-medium text-xs md:text-base">power of</p>
            <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-clean pb-3">
              protection
            </p>
          </div>
          <FaCircle className="flex lg:size-3 size-1 text-clean" />
          <div className=" flex flex-col items-center justify-center">
            <p className="font-medium text-xs md:text-base">preservation of</p>
            <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-clean pb-3">
              quality
            </p>
          </div>
        </div>
        <div className="mt-6 lg:mt-36 py-10">
          <img src={letsTalk} className="w-full" alt="" />
        </div>
        <div className="flex flex-col place-items-end text-ink">
          <p className="text-xl lg:text-4xl py-1">
            Feel free to{" "}
            <span className="relative">
              reach out
              {/* <svg
                width="160"
                height="6"
                viewBox="0 0 160 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute lg:top-11 top-6 left-0 bottom-0 right-0"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  d="M0.69043 4.87196C3.49998 4.71587 6.47063 3.74453 9.30978 3.42907C14.3191 2.87248 19.0965 2.13806 24.1374 2.13806C35.3895 2.13806 46.5602 2.25161 57.7984 2.74559C71.96 3.36808 86.0117 2.13806 100.136 2.13806C112.375 2.13806 124.614 2.13806 136.853 2.13806C141.22 2.13806 145.587 2.13806 149.953 2.13806C152.901 2.13806 155.818 1.45459 158.573 1.45459"
                  stroke="#1A6AFC"
                  stroke-linecap="round"
                  stroke-width="2"
                />
              </svg> */}
            </span>{" "}
            an email on
          </p>
          <p className="text-4xl lg:text-7xl">khhsecco@gmail.com</p>
        </div>
      </Container>
    </section>
  );
};

export default HomeSection6;
