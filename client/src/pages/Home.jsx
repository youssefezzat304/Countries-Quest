import React, { useEffect, useState } from "react";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Home = ({ darkMode }) => {
  const [search, setSearch] = useState(""),
    [codeArray, setCodeArray] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const listOfNums = [];
    for (let i = 0; i < 10; i++) {
      const randomNum = Math.ceil(Math.random() * 194);
      if (listOfNums.includes(randomNum)) {
        i--;
        continue;
      } else {
        listOfNums.push(randomNum);
      }
    }
    setCodeArray(listOfNums);
  }, []);

  return (
    <section className={darkMode && "dark"}>
      <div className="min-h-lvh dark:bg-vd-blue px-20 pb-20 bg-vl-gray-lm shadow-inner">
        {/* -----------------Search and List-------------------- */}
        <div className="flex justify-between  pt-10">
          <div className="w-full flex relative">
            <IoIosSearch className="self-center relative left-10 text-2xl text-d-gray-lm dark:text-white-txt" />
            <input
              type="search"
              placeholder="Search for a country"
              className="w-3/12 min-w-[300px] h-12 rounded-md pl-16 text-vd-blue-lm shadow-md  dark:bg-d-blue dark:text-white-txt"
              onChange={handleSearch}
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
        {/*------------------ COUNTRIES-----------------------------*/}
        <div className="grid grid-flow-row grid-cols-5 gap-4 pt-8">
          {search === "" ? (
            codeArray.map(function (code) {
              return <Card darkMode={darkMode} code={code} />;
            })
          ) : (
            <Card darkMode={darkMode} search={search} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
