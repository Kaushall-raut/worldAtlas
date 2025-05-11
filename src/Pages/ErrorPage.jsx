import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError(); //hook which gives all the error related to routing
  //   console.log(error);

  return (
    <section className=" flex middle error-page">
      <h1 className="text-size">Page Not Found</h1>
      <p>{error.data}</p>
      <NavLink to={"/"}>
        <button>Go Home</button>
      </NavLink>
    </section>
  );
};
