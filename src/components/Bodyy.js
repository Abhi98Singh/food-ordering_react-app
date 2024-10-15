import ResturantCard, { withVegLabel } from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
//Importing custom hook - { useOnlineStatus }
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Bodyy = () => {
  //Local State Variable - Super Powerful Variable   [ Array Destrucuring on the Fly]
  let [listOfRests, setListofRests] = useState([]);

  let [filteredRestaurants, setFilteredRestaurants] = useState([]);

  let [searchText, setSearchText] = useState("");

  //calling withVegLabel() Higher-order Comp with arg (ResturantCard) and it will return New ResCard with Veg label
  const RestaurantCardVegLabel = withVegLabel(ResturantCard);

  //Whenever state variable updates, React triggers a Reconciliation cycle(re-renders the component )

  // console.log("bodyy rendered");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListofRests(
      //Optional Chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // console.log(json);
    console.log(listOfRests);
  };

  useEffect(() => {
    fetchData();
    // console.log("useEffect called");
  }, []);

  //using useOnlineStatus() custom hook to get the online status
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="offlineMsg text-center mt-[3%] text-lg">
        Looks like you're offline!!!😶, Please check your Internet Connection
        🙏.
      </h1>
    );

  //Conditional Rendering using Terneary Operator
  return listOfRests.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bodyy">
      <div className="upperContainer flex justify-center items-center flex-col">
        <div className="searchBar mt-5 p-4 ">
          <input
            type="text"
            data-testid="searchInput"
            placeholder="Search for Restaurants"
            value={searchText}
            className="border-2 border-solid border-pink-400 rounded-md text-base h-8 w-96 pl-2
             text-pink-900 focus:border-pink-800"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchBtn ml-1 px-5 py-1 text-base bg-pink-500 text-white border-2 
            border-solid rounded-lg shadow-sm hover:bg-pink-800"
            onClick={() => {
              //Filter the restaurant cards and update the UI
              const filteredRests = listOfRests.filter(
                (res) =>
                  //includes() function of String : The includes() method returns true if a string contains a specified string.
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                //toLowerCase() method
              );
              setFilteredRestaurants(filteredRests);
              console.warn(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filterBtn flex justify-center mt-6 px-7 py-2 text-base bg-pink-500 text-white border-2 
            border-solid rounded-lg shadow-sm hover:bg-pink-800"
          onClick={() => {
            //Filter Logic
            const filteredList = listOfRests.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurants(filteredList);
          }}
          // onClick={() => {
          //   filteredRests();
          // }}
          // onClick={filteredRests}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restContainer m-5 flex flex-wrap border-2 border-solid border-pink-800 pl-10">
        {/* not using keys (not acceptable) <<<< index as a key <<<<< unique id (Best practise) */}

        {filteredRestaurants.map((restt) => (
          <Link
            to={"restaurants/" + restt.info.id}
            // Key should be on the Parent JSX React element
            key={restt.info.id}
            className="linkableCard"
          >
            {/*if the Restaurant is Veg, then put a veg label on it */}
            {restt.info.veg ? (
              <RestaurantCardVegLabel restListss={restt} />
            ) : (
              <ResturantCard restListss={restt} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Bodyy;
