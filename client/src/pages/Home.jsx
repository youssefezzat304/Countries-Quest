import React, { useEffect, useState } from "react";

//-------------- Components ----------
import Card from "../components/Card";

//-------------- Icons ---------------
import { MoonLoader } from "react-spinners";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";

const Home = ({ darkMode }) => {
  const [search, setSearch] = useState(""),
    [loading, setLoading] = useState(false),
    [codeArray, setCodeArray] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    const listOfNums = [];
    for (let i = 0; i < 10; i++) {
      const randomNum = Math.ceil(Math.random() * 193);
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
        {loading && (
          <div className="flex min-h-[91.6vh] dark:bg-vd-blue px-20 pb-20 bg-vl-gray-lm shadow-inner items-center justify-center">
            <MoonLoader />
          </div>
        )}
        {/* -----------------Search and List-------------------- */}
        <div className="flex justify-between  pt-10">
          <div className="w-full flex relative">
            <IoIosSearch className="self-center relative left-10 text-2xl text-d-gray-lm dark:text-white-txt" />
            <input
              type="search"
              placeholder="Search for a country"
              className="w-3/12 min-w-[300px] h-12 rounded-md pl-16 text-vd-blue-lm shadow-md dark:bg-d-blue dark:text-white-txt"
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
