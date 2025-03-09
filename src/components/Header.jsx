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
      <div className="hidden lg:block">
        {/* Navigation Bar */}
        <div className="bg-white shadow-sm z-20 text-small flex justify-between gap-5 px-2 py-1 text-ink font-instrument fixed left-5 top-3 rounded-full">
          {headerList.map((el) => (
            <Link
              onClick={() => isClicked(el.id)}
              to={el.link}
              key={el.id}
              className={`px-4 py-1 rounded-full duration-200 ${
                el.isVisited ? "bg-clean text-white" : ""
              }`}
            >
              {el.name}
            </Link>
          ))}
        </div>

        {/* Feel Free to Ask Section */}
        <div className="z-20 text-small flex items-center justify-between px-2 py-1 text-ink font-instrument fixed right-5 top-2">
          <p className="px-6 py-2 bg-white shadow-sm rounded-full">
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
            className={`${
              isOpen && "bg-white "
            } p-2 text-white duration-200 bg-clean group  rounded-full`}
          >
            <LiaGripLinesSolid
              className={`${
                isOpen && "rotate-90 text-clean"
              } size-10 duration-200`}
            />
          </button>
        </div>
        
        {/* side bar */}
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } w-full lg:hidden bg-clean fixed inset-0 transition-transform duration-500  ease-in-out h-screen z-10 flex flex-col justify-center font-instrument text-white`}
        >
          <p className="px-4 text-opacity-80 text-white py-10">
            Based in Myanmar, Yangon (UTC+6:30)
          </p>
          {headerList.map((el) => (
            <Link
              onClick={() => {
                isClicked(el.id);
                handleMenuBar();
              }}
              to={el.link}
              key={el.id} // Use el.id for a unique key
              className={` ${
                el.isVisited ? "text-white " : "text-opacity-80"
              } px-4 text-5xl lg:text-6xl font-instrument font-medium text-white  tracking-tighter `}
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
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M0 1H275H615.5H903H1223H1235.5"
                    stroke="#1A6AFC"
                  />
                </svg>
              </div>
            </Link>
          ))}
          <p className="px-4 text-opacity-80 text-white pt-10">email us</p>
          <p className="px-4 text-white ">khhcompany@gmail.com</p>
          <p className="px-4 text-opacity-80 text-white pt-5">social</p>
          <p className="px-4 text-white ">Facebook</p>
          <p className="px-4 text-opacity-80 text-white pt-5">social</p>
          <p className="px-4 text-white ">Facebook</p>
          <p className="px-4 text-white ">Viber</p>
          <p className="px-4 text-white ">Instagram</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
