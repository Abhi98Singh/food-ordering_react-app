//imported lazy named comp and Suspense comp from react package
import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Bodyy from "./components/Bodyy";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import LogIn from "./components/LogIn";
//imported Provider from react-redux to provide our Store to our React Application
import { Provider } from "react-redux";
//imported our appStore
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

//Chunking
//Code Splitting
//Dynamic Bundling
//Lazy Laoding
//on-Demand Loading
//Dynamic Import

//Importing Grocery comp using lazy() :- Lazy Laoding
const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  //creating a state variable for storing userInfo data that will be get from API for authenticate the user
  const [userName, setUserName] = useState();

  //authentication  (fetch data from API using useEffect)
  useEffect(() => {
    //Make a API call and send username and password
    const data = {
      name: "Romeo Singh",
    };
    setUserName(data.name);
  }, []);

  return (
    //Wrapped our whole app in <Provider> and pass our appStore as store props value
    <Provider store={appStore}>
      {/* //Wrapping whole APP(every components) in <UserContext.Provider> and passing updated value a method to update the value */}
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          {/* We can wrap a specific comp inside  <UserContext.Provider>*/}
          {/* <UserContext.Provider value={{ loggedInUser: "Annu"}}>
          <Header />
        </UserContext.Provider> */}
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

//Creating Routing Connfiguration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Bodyy />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          //wrapped the Grocery comp into Suspense to handle that state
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        //':' reprensents that path is dynamic
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//Earlier, we were rendering the <AppLayout/> directly
// root.render(<AppLayout />);

//Now, we will provide routing configuartion like this  => <RoutingProvide router={appRouter}/>
root.render(<RouterProvider router={appRouter} />);
