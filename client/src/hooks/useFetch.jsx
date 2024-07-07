import { useState, useEffect } from "react";

const useFetch = (url, code = null, search = null, id = null) => {
  const [loading, setLoading] = useState(false);
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
  if (id) {
    useEffect(() => {
      setLoading(true);
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setLoading(false);
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
  } else {
    useEffect(() => {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const res = search ? 0 : code;
          setCountry({
            flagPng: data[res].flags.png,
            name: data[res].name.common,
            population: data[res].population,
            region: data[res].region,
            capital: data[res].capital,
          });
        })
        .catch((err) => console.log(err));
    }, [code, search]);
  }

  return { country, loading };
};

export default useFetch;
