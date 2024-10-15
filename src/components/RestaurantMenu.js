import ShimmerResMenu from "./ShimmerResMenu";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
//Importing our own custom hook
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

function RestaurantMenu() {
  //instead of writing params.resId, we gonna use destructuring on the fly
  const { resId } = useParams();

  //Creating our own custom hook for fetching the data and give it back to resInfo
  const resInfo = useRestaurantMenu(resId);

  //creating state of Category Array Index for collapse/expand the category list
  const [showIndex, setShowIndex] = useState(null);
  //we will pass this setShowIndex() updating function to its child as a props in a function

  const [clickedAgain, setClickedAgain] = useState(false);

  //bcz resInfo is null intially, we cannot use it directly with conditional rendering through terneray opertaor
  if (resInfo === null) return <ShimmerResMenu />;
  // debugger;

  //Destrucuring and Optioanl Chaining :- For Restaurant Details
  const {
    name,
    costForTwoMessage,
    areaName,
    sla,
    avgRating,
    totalRatings,
    cuisines,
    cloudinaryImageId,
  } = resInfo?.cards[2]?.card?.card?.info;

  // console.log(resInfo?.cards[2]?.card?.card?.info);

  //Destrucuring and Optioanl Chaining :- For Restaurant Menu Items
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  //filtering all the items category
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (categry) =>
        categry.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);
  return (
    <div className="resMenuContainer ">
      <div className="resMenuResInfoContainer flex flex-col  ml-[380px]">
        <h1 className="resMenuResName mt-14 mb-5 text-2xl font-bold">{name}</h1>

        <div className="resMenuResInfo   border-[1px] border-slate-300 w-3/4 rounded-2xl shadow-2xl shadow-gray-200 ">
          <h2 className="resMenuDetails mt-2  px-2 pt-2 font-semibold">
            ⭐{avgRating}({totalRatings} ratings) • {costForTwoMessage}
          </h2>
          <h3 className="pl-4 text-pink-600 font-semibold">
            {cuisines.join(" , ")}
          </h3>
          <h3 className="resMenuDetails pl-5 pt-1 mb-1 font-semibold">
            Outlet : <span className="font-normal">{areaName}</span>
          </h3>
          <h3 className="resMenuDetails pl-5 pt-1 mb-2 font-semibold">
            {" "}
            {sla.minDeliveryTime}-{sla.maxDeliveryTime} mins
          </h3>
        </div>
      </div>
      <div className=" mt-14   ml-[380px]">
        {/* Categories Acordian */}
        {categories.map((category, index) => (
          //Controlled Comp
          <RestaurantCategory
            key={category?.card?.card.title}
            resMenuCategories={category?.card?.card}
            //we are instructing its child comp by sending props
            showItems={index === showIndex ? true : false}
            //passing a function(with setShowIndex() updating function) as a props to children to make change in state of its parent
            setShowIndex={() => {
              setShowIndex(index); //also passing index with setShowIndex()
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;
