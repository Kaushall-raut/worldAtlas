export const AboutCards = ({ value }) => {
  const { id, countryName, capital, population, interestingFact } = value;

  return (
    <div className="cards" key={id}>
      <div className="cardContent ">
        <p className="countryName ">{countryName}</p>
        <p>
          <span className="countryCapital">Capital: </span>
          {capital}
        </p>
        <p>
          <span className="">Population: </span>
          {population}
        </p>
        <p>
          <span className="">Interesting Fact: </span>
          {interestingFact}
        </p>
      </div>
    </div>
  );
};
