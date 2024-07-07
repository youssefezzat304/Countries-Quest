import React from 'react'

const CountryFlag = ({country}) => {
  return (
    <div className="grow">
      <img
        src={country.flagPng}
        alt=""
        className="grow min-w-fit w-[38rem] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
      />
    </div>
  );
}

export default CountryFlag