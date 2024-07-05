import React, { useEffect, useState } from "react";

const Card = ({ darkMode, search, code }) => {
  const [country, setCountry] = useState({
    flagPng: "",
    name: "",
    population: "",
    region: "",
    capital: "",
  });

  const url = `https://restcountries.com/v3.1/name/${search}`;
  const all_url = "https://restcountries.com/v3.1/independent?status=true";

  useEffect(() => {
    fetch(search? url : all_url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data[search? 0 : code]);
        setCountry({
          flagPng: data[search? 0 : code].flags.png,
          name: data[search? 0 : code].name.common,
          population: data[search? 0 : code].population,
          region: data[search? 0 : code].region,
          capital: data[search? 0 : code].capital,
        });
      });
  }, [code, search]);

  return (
    <section className={darkMode && "dark"}>
      <div className="bg-white-txt max-w-[320px] min-w-[320px]  rounded-lg shadow-lg cursor-pointer dark:bg-d-blue my-6 transition duration-200 hover:scale-105">
        <img
          className="rounded-t-lg max-h-[192px] min-h-[192px] w-full"
          src={country.flagPng}
          alt=""
        />
        <div className="p-7">
          <label className="font-extrabold text-lg dark:text-white-txt text-wrap">
            {country.name}
          </label>
          <div className="py-4 space-y-1 ">
            <p className="dark:text-white-txt">
              <span className="font-semibold dark:text-white-txt">
                Population:
              </span>{" "}
              {country.population.toLocaleString()}
            </p>
            <p className="dark:text-white-txt">
              <span className="font-semibold dark:text-white-txt">Region:</span>{" "}
              {country.region}
            </p>
            <p className="dark:text-white-txt">
              <span className="font-semibold dark:text-white-txt">
                Capital:
              </span>{" "}
              {country.capital}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
