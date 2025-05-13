import { useEffect, useState, useTransition } from "react";
import { Loader } from "../components/ui/Loader";
import { getData } from "../api/countryApi";
import { CountryCards } from "../components/CountryCards";
import { Search } from "../components/Search";

export const Country = () => {
  const [isPending, startTransition] = useTransition(); //this hook updates the state without blocking the ui

  const [countryData, setData] = useState([]);

  const [searchInput, setInput] = useState("");
  const [selectFilter, setSelect] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getData();
      setData(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  // console.log(searchInput, selectFilter);

  const searchCountry = (value) => {
    if (searchInput) {
      return value.name.common.toLowerCase().includes(searchInput);
    }

    return countryData;
  };

  const filterSelect = (value) => {
    if (selectFilter === "all") return countryData;

    return value.region === selectFilter;
  };

  // filter logic for input
  const filter = countryData.filter(
    (value) => searchCountry(value) && filterSelect(value)
  );

  return (
    <section className=" container">
      <Search
        searchInput={searchInput}
        setInput={setInput}
        selectFilter={selectFilter}
        setSelect={setSelect}
        countryData={countryData}
        setData={setData}
      />
      <ul className="grid country-content ">
        {filter.map((currentValue, index) => {
          return <CountryCards key={index} currentValue={currentValue} />;
        })}
      </ul>
    </section>
  );
};
