import React, { useEffect, useState } from "react";
//-------------- Components ----------
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import SelectMenu from "../components/SelectMenu";
//-------------- Icons ---------------
import { MoonLoader } from "react-spinners";
import ViewMoreBtn from "../components/ViewMoreBtn";

const Home = ({ darkMode }) => {
  const [search, setSearch] = useState(""),
    [loading, setLoading] = useState(false),
    [more, setMore] = useState(10),
    [codeArray, setCodeArray] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const viewMore = (e) => {
    setMore(more + 10);
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
      if (codeArray.includes(randomNum) || listOfNums.includes(randomNum)) {
        i--;
        continue;
      } else {
        listOfNums.push(randomNum);
      }
    }
    setCodeArray([...codeArray, ...listOfNums]);
    console.log(codeArray);
  }, [more]);

  return (
    <section className={darkMode && "dark"}>
      <div className="min-h-lvh dark:bg-vd-blue px-20 pb-20 bg-vl-gray-lm shadow-inner">
        
        {loading && (
          <div className="flex min-h-[91.6vh] dark:bg-vd-blue px-20 pb-20 bg-vl-gray-lm shadow-inner items-center justify-center">
            <MoonLoader />
          </div>
        )}

        <div className="flex justify-between pt-10">
          <SearchBar handleSearch={handleSearch} />
          <SelectMenu />
        </div>

        <div className="grid items-center grid-flow-row grid-cols-1 gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {search === "" ? (
            codeArray.map(function (code) {
              return <Card darkMode={darkMode} code={code} />;
            })
          ) : (
            <Card darkMode={darkMode} search={search} />
          )}
        </div>
        {codeArray.length < 180 && search === "" && (
          <ViewMoreBtn className="cursor-pointer" viewMore={viewMore} />
        )}
      </div>
    </section>
  );
};

export default Home;
