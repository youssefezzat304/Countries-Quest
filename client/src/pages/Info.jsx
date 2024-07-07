import React from "react";
//--------------- Components -------------------
import CountryDetails from "../components/CountryDetails";
import BackBtn from "../components/BackBtn";
import CountryFlag from "../components/CountryFlag";
//------------------ Icons ----------------------
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";
//--------------- Hooks -------------------
import useFetch from "../hooks/useFetch";

const Info = ({ darkMode }) => {
  const { id } = useParams();
  const url = `https://restcountries.com/v3.1/name/${id}`,
    search = null,
    code = null;

  const { country, loading } = useFetch(url, code, search, id);

  return (
    <section className={darkMode && "dark"}>
      <div className="min-h-[91.6vh] dark:bg-vd-blue px-20 pb-20 bg-vl-gray-lm shadow-inner">
        {loading && (
          <div className="flex min-h-[91.6vh] dark:bg-vd-blue px-20 pb-20 bg-vl-gray-lm shadow-inner items-center justify-center">
            <MoonLoader />
          </div>
        )}
        <div className="flex flex-col">
          <BackBtn />

          <div className="basis-1/3 py-20 flex flex-1 grow items-center gap-28 min-w-[730px]">
            <CountryFlag country={country} />
            <CountryDetails country={country} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
