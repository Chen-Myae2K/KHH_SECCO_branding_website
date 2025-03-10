import React from "react";
import TextReveal from "../../../components/TextReveal";
import Container from "../../../components/Container";
import { HiArrowDownRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import useFaqStore from "../../../store/useFaqStore";
import Faq from "./Faq";

const AboutSection6 = () => {
  const { questions } = useFaqStore();
  return (
    <section className=" font-instrument tracking-tighter mt-32 ">
      <Container>
        <TextReveal text="Frequently Asked Questions"></TextReveal>
        <div className="flex items-end gap-3 mb-10 md:mb-20">
          <div>
            <p className="md:text-4xl text-xl text-black pb-2">You Ask</p>
            <p className="md:text-6xl text-4xl text-nowrap text-clean">
              We Answer
            </p>
          </div>
          <div className="overflow-x-hidden">
            {/* <img src={blueLine} className="md:w-full w-[50vw]" alt="" /> */}
            <svg
              width="330"
              height="4"
              viewBox="0 0 330 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M0.191406 2H231H329.559"
                stroke="#1A6AFC"
                stroke-width="3"
              />
            </svg>
          </div>
        </div>
        {/* <div>
          
          <div className="flex justify-between border-b-[1.5px] border-clean py-4 items-end">
            <p className="text-xl md:text-4xl text-black">
              What is powder desiccant?
            </p>
            <HiArrowDownRight className="size-7 md:size-10" />
          </div>
          <div className="flex justify-between border-b-[1.5px] border-clean py-4 items-end">
            <p className="text-xl md:text-4xl text-black">
              Powder desiccants more effective?
            </p>
            <HiArrowDownRight className="size-7 md:size-10" />
          </div>
          <div className="flex justify-between border-b-[1.5px] border-clean py-4 items-end">
            <p className="text-xl md:text-4xl text-black">
              Can desiccants be reused?
            </p>
            <HiArrowDownRight className="size-7 md:size-10" />
          </div>
          <div className="flex justify-between border-b-[1.5px] border-clean py-4 items-end">
            <p className="text-xl md:text-4xl text-black">
              How long do desiccants last?
            </p>
            <HiArrowDownRight className="size-7 md:size-10" />
          </div>
        </div> */}
        {questions.map((el) => (
          <Faq faq={el} key={el.id}></Faq>
        ))}
      </Container>
    </section>
  );
};

export default AboutSection6;
