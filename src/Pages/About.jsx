import { AboutCards } from "../components/AboutCards";
import CountriesData from "../api/countriesData.json";

export const About = () => {
  return (
    <section className="container about-section">
      <div className="about-title">
        <h2>
          Interesting fact's <br />
          of some famous countries
        </h2>
      </div>
      <div className="about-cards  grid grid-col3  ">
        {CountriesData.map((value) => {
          return <AboutCards value={value} key={value.id} />;
        })}
      </div>
    </section>
  );
};
