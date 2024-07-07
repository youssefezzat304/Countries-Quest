import React from 'react'

const CountryDetails = ({country}) => {
  return (
    <div name="Info" className="basis-2/3 flex-2 grow dark:text-white-txt">
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
  );
}

export default CountryDetails