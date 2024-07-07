import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Card = ({ darkMode, search, code }) => {
  const url_local = `https://restcountries.com/v3.1/name/${search}`,
    url_general = "https://restcountries.com/v3.1/independent?status=true",
    url = search ? url_local : url_general,
    { country } = useFetch(url, code, search);

  return (
    <Link to={`/info/${country.name}`}>
      <section className={darkMode && "dark"}>
        <div className="bg-white-txt max-w-[320px] min-w-[320px]  rounded-lg shadow-lg cursor-pointer dark:bg-d-blue my-6 transition duration-200 hover:scale-105">
          <img
            className="rounded-t-lg max-h-[192px] min-h-[192px] w-full"
            src={country.flagPng}
            alt={`${country.name} Flag`}
          />
          <div className="p-7">
            <label className="font-extrabold text-lg dark:text-white-txt text-wrap">
              {country.name}
            </label>
            <div className="py-4 space-y-1 ">
              <p className="dark:text-white-txt">
                <span>Population:</span> {country.population.toLocaleString()}
              </p>
              <p className="dark:text-white-txt">
                <span>Region:</span> {country.region}
              </p>
              <p className="dark:text-white-txt">
                <span>Capital:</span> {country.capital}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Card;
