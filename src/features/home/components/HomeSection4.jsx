import React from "react";
import Container from "../../../components/Container";
import { motion, useInView } from "framer-motion";

const HomeSection4 = () => {
  return (
    <section className="font-instrument mt-32  text-black">
      <Container>
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-4  lg:col-span-1 lg:border-r lg:h-[80dvh] flex flex-col justify-between border-black">
            <p className="text-5xl lg:text-6xl font-medium tracking-tighter">
              process
            </p>
            <p className="lg:text-xl tracking-tight text-base max-lg:my-10">
              Desiccants control moisture to protect products from humidity
              damage. The{" "}
              <span className="text-clean">
                process involves material selection
              </span>
              , activation, shaping, and packaging, ensuring high-quality
              solutions for various industries.
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
                  transition={{ duration: 1, ease: "easeInOut" }}
                  d="M0 1H275H615.5H903H1223H1235.5"
                  stroke="black"
                />
              </svg>
            </div>
          </div>

          <div className="col-span-4  lg:col-span-1 lg:border-r lg:h-[80dvh] flex flex-col justify-between border-black">
            <p className="text-5xl lg:text-6xl font-medium tracking-tighter">
              material <span className="text-clean">selection</span>
            </p>
            <p className="lg:text-xl tracking-tight text-base max-lg:my-10">
              Desiccants control moisture to protect products from humidity
              damage. The{" "}
              <span className="text-clean">
                process involves material selection
              </span>
              , activation, shaping, and packaging, ensuring high-quality
              solutions for various industries.
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
                  transition={{ duration: 1, ease: "easeInOut" }}
                  d="M0 1H275H615.5H903H1223H1235.5"
                  stroke="black"
                />
              </svg>
            </div>
          </div>
          <div className="col-span-4  lg:col-span-1  lg:border-r lg:h-[80dvh] flex flex-col justify-between border-black">
            <p className="text-5xl lg:text-6xl text-clean font-medium tracking-tighter">
              activation
            </p>
            <p className="lg:text-xl tracking-tight text-base max-lg:my-10">
              Desiccants are <span className="text-clean">dried or heated</span>{" "}
              to remove any pre-existing moisture, ensuring maximum efficiency
              before use.
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
                  transition={{ duration: 1, ease: "easeInOut" }}
                  d="M0 1H275H615.5H903H1223H1235.5"
                  stroke="black"
                />
              </svg>
            </div>
          </div>
          <div className="col-span-4  lg:col-span-1 lg:h-[80dvh] flex flex-col justify-between border-black">
            <p className="text-5xl lg:text-6xl font-medium tracking-tighter">
              <span className="text-clean">moisture</span> absorption
            </p>
            <p className="lg:text-xl tracking-tight text-base max-lg:my-10">
              The desiccant captures water vapor from the surrounding air,
              either chemically (absorption) or physically (adsorption),{" "}
              <span className="text-clean">
                helping maintain low humidity levels.
              </span>
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
                  transition={{ duration: 1, ease: "easeInOut" }}
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

export default HomeSection4;
