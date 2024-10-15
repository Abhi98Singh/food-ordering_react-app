import { useRouteError } from "react-router-dom";

const Error = () => {
  //by calling useRouteError() hook, it will give us every error details in a form of obj
  const err = useRouteError();

  console.log(err);

  return (
    <div>
      <h1>OOPS!, Error 404 - Page not round</h1>
      <h4>Something Went Wrong!!!</h4>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
