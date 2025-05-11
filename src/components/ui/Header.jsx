import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container grid navGrid-col2 ">
        <NavLink to={"/"}>
          <h1> WorldAtlas</h1>
        </NavLink>
        <ul className="flex">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/country"}>Country</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
