import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getData = () => {
  return api.get("/all");
};

export const getOneCountryData = (name) =>
  api.get(
    `/name/${name}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
