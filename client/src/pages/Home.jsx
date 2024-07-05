import React from "react";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";

const Home = ({ darkMode }) => {
  return (
    <section className={darkMode && "dark"}>
      <div className="bg-vl-gray-lm h-lvh dark:bg-vd-blue">
        {/* -----------------Search and List-------------------- */}
        <div className="flex justify-between px-10 pt-10">
          <div className="w-full flex relative">
            <IoIosSearch className="self-center relative left-10 text-2xl text-d-gray-lm dark:text-white-txt" />
            <input
              type="search"
              placeholder="Search for a country"
              className="w-3/12 min-w-[300px] h-12 rounded-md pl-16 text-vd-blue-lm shadow-md  dark:bg-d-blue"
            />
          </div>
          <div className="flex">
            <select
              name="region-menu"
              id=""
              className="text-vd-blue-lm w-52 px-3 rounded-md shadow-md appearance-none cursor-pointer  dark:bg-d-blue dark:text-white-txt"
            >
              <option value="1">Filter by region</option>
              <option value="2">Africa</option>
              <option value="3">America</option>
              <option value="4">Aisa</option>
              <option value="4">Europe</option>
              <option value="4">Oceania</option>
            </select>
            <IoIosArrowDown className="relative right-8 self-center text-xl cursor-pointer dark:text-white-txt" />
          </div>
        </div>
        {/* ------------------------------------------------------ */}
      </div>
    </section>
  );
};

export default Home;
