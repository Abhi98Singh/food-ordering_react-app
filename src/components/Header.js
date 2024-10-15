import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
//imported useSelector hook from react-redux library to read the data from Store(to subscirebing the store)
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  //using useOnlineStatus() custom hook
  const onlineStatus = useOnlineStatus();

  //Accessing/Using UserContext data through useContext() hook
  // const data = useContext(UserContext);
  // console.log(data);
  //Destrcuting on the fly
  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using a Selector(useSelctor)
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between items-center bg-red-100 shadow-lg mb-2">
      <div className="logo-container">
        <Link to="/">
          <img
            className="w-24 p-1 mt-1 cursor-pointer"
            src={LOGO_URL}
            alt="no img"
          />
        </Link>
      </div>
      <div className="navItems">
        <ul className="flex items-center pr-5 m-4 list-none text-lg text-black ">
          <li className="px-4 mr-4">
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 hover:text-pink-600 hover:font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-pink-600 hover:font-medium">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:text-pink-600 hover:font-medium">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li
            className="px-4 text-lg font-medium  text-pink-600 decoration-solid
           hover:text-pink-800 hover:font-bold hover:underline"
          >
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-4 font-semibold">{loggedInUser}</li>
          <button
            className="py-2 px-5 ml-3 text-base leading-4 min-w-24 bg-pink-500 text-white border-s-2 rounded-md
             hover:bg-pink-700 hover:text-white "
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            <Link to="/login">{btnName}</Link>
          </button>
          <li className="cursor-pointer px-2 text-pink-800  hover:text-pink-600 hover:font-medium relative">
            <span className="absolute bottom-3 left-16  text-pink-600 font-bold">
              {cartItems.length}
            </span>
            <Link to="/cart">
              <FaCartPlus className="w-20 h-6" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
