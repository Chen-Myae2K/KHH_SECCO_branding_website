import React from "react";
import useFaqStore from "../../../store/useFaqStore";
import { HiArrowDownRight } from "react-icons/hi2";

const Faq = ({ faq: { id, question, answer, isOpen } }) => {
  const { toggleQuestion } = useFaqStore();

  const handleFaq = () => {
    toggleQuestion(id); 
  }
  return (
    <>
      <div  onClick={handleFaq} className="flex justify-between border-b-[1.5px] border-clean py-4 items-end">
        <p className="text-xl md:text-4xl text-black">{question}</p>
        <HiArrowDownRight className={`${isOpen && "-rotate-90 text-clean" } size-7 duration-200 md:size-10`} />
      </div>
      <div className={`${isOpen ? "block " : "hidden"}   text-base md:text-xl text-ink py-4`}>
        {answer}
      </div>
      
    </>
  );
};

export default Faq;
