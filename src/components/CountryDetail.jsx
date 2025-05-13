import { useEffect, useState, useTransition } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "./ui/Loader";
import { getOneCountryData } from "../api/countryApi";

export const CountryDetail = () => {
  const name = useParams();

  const nav = useNavigate();

  const [isPending, startTransition] = useTransition();
  const [countryData, setData] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getOneCountryData(name.name);

      setData(res.data[0]);
      // console.log(res.data);
    });
  }, []);
  console.log(countryData);

  if (isPending) return <Loader />;
  return (
    <section className="container  ">
      {countryData && (
        <div className="grid grid-col2 card-container">
          <div>
            <img src={countryData.flags.svg} alt="flag" />
          </div>
          <div>
            <h4>{countryData.name.official}</h4>
            <p>
              Native name:{" "}
              <span>
                {Object.keys(countryData.name.nativeName).map(
                  (name) => countryData.name.nativeName[name].common
                )}
              </span>
            </p>
            <p>
              Currency name:{" "}
              <span>
                {Object.keys(countryData.currencies)
                  .map((curElem) => countryData.currencies[curElem].name)
                  .join(", ")}
              </span>
            </p>
            <p>
              Capital: <span>{countryData.capital[0]}</span>
            </p>
            <p>
              Region: <span>{countryData.region}</span>
            </p>
            <p>
              Population: <span>{countryData.population}</span>
            </p>
            <p>
              Sub region: <span>{countryData.subregion}</span>
            </p>
            <p>
              Domain: <span>{countryData.tld[0]}</span>
            </p>
          </div>
          <button onClick={() => nav(-1)}>Go back</button>
        </div>
      )}
    </section>
  );
};
