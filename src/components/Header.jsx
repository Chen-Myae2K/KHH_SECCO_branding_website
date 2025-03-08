import React, { useState } from "react";
import { Link } from "react-router";
import { HiArrowUpRight } from "react-icons/hi2";
import { LiaGripLinesSolid } from "react-icons/lia";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuBar = () => {
    setIsOpen(!isOpen);
  };

  const [headerList, setHeaderList] = useState([
    { id: 1, name: "Home", link: "/", isVisited: true },
    { id: 2, name: "About", link: "/about", isVisited: false },
    { id: 3, name: "Process", link: "/process", isVisited: false },
    { id: 4, name: "Contact", link: "/contact", isVisited: false },
  ]);

  const isClicked = (id) => {
    setHeaderList((prevList) =>
      prevList.map((el) =>
        el.id === id ? { ...el, isVisited: true } : { ...el, isVisited: false }
      )
    );
  };

  return (
    <nav>
      <div className="hidden lg:block ">
        <div className="bg-white shadow-sm z-20 text-small flex justify-between gap-5 px-2 py-1 text-ink font-instrument fixed ms-5 mt-3 rounded-full">
          {headerList.map((el) => (
            <Link
              onClick={() => isClicked(el.id)}
              to={el.link}
              key={el.id} // Use el.id for a unique key
              className={`px-4 py-1 ${
                el.isVisited
                  ? "bg-clean duration-200 text-white px-5 rounded-full"
                  : ""
              }`}
            >
              {el.name}
            </Link>
          ))}
        </div>
        <div className="z-20 text-small flex items-center justify-between px-2 py-1 text-ink font-instrument fixed me-5 mt-2 right-0 top-0 ">
          <p className="px-6 py-2  bg-white shadow-sm rounded-full">
            Feel free to ask
          </p>
          <div className="p-2 text-ink bg-white rounded-full shadow-sm">
            <HiArrowUpRight className="size-7" />
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className=" text-small flex z-20 items-center justify-between px-2 py-1 text-ink font-instrument fixed me-5 mt-2 right-0 top-0 ">
          <button
            onClick={handleMenuBar}
            className="p-2 text-white bg-clean  rounded-full"
          >
            <LiaGripLinesSolid
              className={`${isOpen && "rotate-90"} size-10 duration-200`}
            />
          </button>
        </div>

        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } w-full lg:hidden bg-white fixed transition-transform duration-500  ease-in-out h-dvh z-10 flex flex-col justify-center `}
        >
          {headerList.map((el) => (
            <Link
              onClick={() => {
                isClicked(el.id);
                handleMenuBar();
              }}
              to={el.link}
              key={el.id} // Use el.id for a unique key
              className={` ${
                el.isVisited ? "text-clean " : ""
              } px-4 text-[12vw] font-instrument tracking-tight text-center `}
            >
              {el.name}
              <div className="overflow-x-hidden">
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
                    stroke="#1A6AFC"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
