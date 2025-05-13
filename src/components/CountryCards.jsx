import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const CountryCards = ({ currentValue }) => {
  //   console.log(currentValue);
  const { flags, name, population, region, capital } = currentValue;

  //   console.log(capital);
  //   console.log(capital);

  return (
    <li className="country-container ">
      <div className="country-border">
        <img src={flags.png} alt="" />
        <p>
          Name:
          <span>
            {name.common.length > 10
              ? name.common.substring(0, 10) + "..."
              : name.common}
          </span>
        </p>
        <p>
          population:
          <span>{population}</span>
        </p>
        <p>
          Region:
          <span>{region}</span>
        </p>
        <p>
          Capital:
          <span>
            {capital === undefined
              ? "none"
              : capital[0].substring(0, 10) + "..."}
          </span>
        </p>
        <NavLink to={`/country/${name.common}`}>
          <button className="flex">
            Read more <FaArrowRight />
          </button>
        </NavLink>
      </div>
    </li>
  );
};
