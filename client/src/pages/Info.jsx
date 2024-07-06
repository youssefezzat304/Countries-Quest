import React from "react";
import { useState, useEffect } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

const Info = ({ darkMode }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [country, setCountry] = useState({
    flagPng: "",
    name: "",
    population: "",
    region: "",
    capital: "",
    nativeName: "",
    subRegion: "",
    currencies: "",
    languages: "",
  });

  const url = `https://restcountries.com/v3.1/name/${id}`;
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const currencies = Object.values(data[0].currencies)[0],
          Languages = Object.values(data[0].languages).join(", "),
          NativeName = Object.values(Object.values(data[0].name)[2])[0];
        setCountry({
          flagPng: data[0].flags.png,
          name: data[0].name.common,
          population: data[0].population,
          region: data[0].region,
          capital: data[0].capital,
          nativeName: NativeName.official,
          subRegion: data[0].subregion,
          currencies: currencies.name,
          languages: Languages,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className={darkMode && "dark"}>
      <div className="min-h-[91.6vh] dark:bg-vd-blue px-20 pb-20 bg-vl-gray-lm shadow-inner">
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
                className="grow min-w-fit w-[38rem] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
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
