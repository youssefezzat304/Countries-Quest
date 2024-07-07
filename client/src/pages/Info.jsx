import React from "react";

//------------------ Icons ----------------------
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";

//--------------- Hooks -------------------
import useFetch from "../hooks/useFetch";

const Info = ({ darkMode }) => {
  const navigate = useNavigate();
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
          <div className="basis-1/2 py-14">
            <button
              className="basis-1/2 flex h-fit w-fit text-2xl gap-2 items-center py-2 px-4 shadow-lg rounded-lg transition duration-200 hover:scale-95 dark:bg-d-blue dark:text-white-txt"
              onClick={() => navigate("/")}
            >
              <IoArrowBackCircleOutline />
              <p>Back</p>
            </button>
          </div>

          <div className="basis-1/3 py-20 flex flex-1 grow items-center gap-28 min-w-[730px]">
            <div className="grow">
              <img
                src={country.flagPng}
                alt=""
                className="grow min-w-fit w-[38rem] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
              />
            </div>

            <div
              name="Info"
              className="basis-2/3 flex-2 grow dark:text-white-txt"
            >
              <h1 className="font-bold text-3xl pb-7">{country.name}</h1>
              <div className="space-y-2 grid grid-cols-2 grid-rows-5 grid-flow-col items-center gap-2">
                <p>
                  <span>Native Name: </span>
                  {country.nativeName}
                </p>
                <p>
                  <span>Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span>Region: </span>
                  {country.region}
                </p>
                <p>
                  <span>Capital: </span>
                  {country.capital}
                </p>
                <p>
                  <span>Subregion: </span>
                  {country.subRegion}
                </p>
                <p>
                  <span>Main Currency: </span>
                  {country.currencies}
                </p>
                <p>
                  <span>Languages: </span>
                  {country.languages}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
