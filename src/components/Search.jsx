export const Search = ({
  searchInput,
  setInput,
  selectFilter,
  setSelect,
  countryData,
  setData,
}) => {
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  const handleSort = (value) => {
    const sort = [...countryData].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setData(sort);
  };

  return (
    <div className="search flex">
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={handleInput}
      />

      <button className="flex" onClick={()=>handleSort("asc")}>
        Asc
      </button>
      <button className="flex" onClick={()=>handleSort("des")}>
        Desc
      </button>

      <select
        name="region"
        value={selectFilter}
        className="select-input"
        onChange={handleSelect}
      >
        <option value="all">all</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
      </select>
    </div>
  );
};
