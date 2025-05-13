import { useEffect, useState, useTransition } from "react";
import { Loader } from "../components/ui/Loader";
import { getData } from "../api/countryApi";
import { CountryCards } from "../components/CountryCards";

export const Country = () => {
  const [isPending, startTransition] = useTransition(); //this hook updates the state without blocking the ui

  const [countryData, setData] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getData();
      setData(res.data);
      // console.log(res);
    });
  }, []);

  if (isPending) return <Loader />;

  return (
    <section className=" container">
      <ul className="grid country-content ">
        {countryData.map((currentValue, index) => {
          return <CountryCards key={index} currentValue={currentValue} />;
        })}
      </ul>
    </section>
  );
};
