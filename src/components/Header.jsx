import React, { useState } from "react";
import { Link } from "react-router";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoMenuSharp } from "react-icons/io5";


const Header = () => {
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
        <div className="bg-white text-small flex justify-between gap-5 px-2 py-1 text-ink font-instrument fixed ms-5 mt-3 rounded-full">
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
        <div className=" text-small flex items-center justify-between px-2 py-1 text-ink font-instrument fixed me-5 mt-2 right-0 top-0 ">
          <p className="px-6 py-2  bg-white rounded-full">Feel free to ask</p>
          <div className="p-2 text-ink bg-white rounded-full">
            <HiArrowUpRight className="size-7" />
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className=" text-small flex items-center justify-between px-2 py-1 text-ink font-instrument fixed me-5 mt-2 right-0 top-0 ">
          <div className="p-2 text-clean bg-white rounded-full">
            <IoMenuSharp className="size-10"/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
