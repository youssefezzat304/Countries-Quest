import React, { useState } from "react";
import { IoMoonSharp } from "react-icons/io5";

const NavBarr = ({ darkMode, toggleDarkMode }) => {


  return (
    <section className={darkMode && "dark"}>
      <div className="min-h-20 flex justify-between px-10 shadow-md dark:bg-d-blue">
        <label className="text-vd-blue-lm content-center text-2xl font-semibold dark:text-white-txt">
          Where in the world?
        </label>
        <button
          className="flex self-center p-2 gap-1 border-2 border-b-vd-blue-lm rounded-2xl hover:origin-top-left hover:ease-out duration-200 dark:border-white-txt"
          onClick={() => toggleDarkMode()}
        >
          <IoMoonSharp className="self-center text-vd-blue-lm text-l dark:text-white-txt" />
          <label className="text-vd-blue-lm content-center text-base font-light hover:cursor-pointer dark:text-white-txt">
            Dark Mode
          </label>
        </button>
      </div>
    </section>
  );
};

export default NavBarr;
