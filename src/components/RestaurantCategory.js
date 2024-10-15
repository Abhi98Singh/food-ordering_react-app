import { useState } from "react";
import CategoryItemsList from "./CategoryItemsList";

const RestaurantCategory = ({ resMenuCategories, showItems, setShowIndex }) => {
  // console.log(resMenuCategories);

  const { title, itemCards } = resMenuCategories;

  //We dont want RestaurantCategory comp to maintain its state, we want it to be controlled comp
  // const [showItems, setShowItems] = useState(false);

  // let [clickedRestCategory, setClickedRestCategory] = useState(true);

  return (
    <div>
      {/* Accordian Header */}
      <div
        className="  w-3/4 bg-slate-100 p-4 shadow-lg mb-3 cursor-pointer"
        onClick={() => {
          setShowIndex();
        }}
      >
        <span className="font-semibold">
          {title} ({itemCards.length})
        </span>{" "}
        <button className="float-right cursor-pointer">
          {!showItems ? "🔺" : "🔻"}
          {/* {clickedRestCategory ? "🔺" : "🔻"} */}
        </button>
      </div>
      {/* Accordian body */}
      {/* {!clickedRestCategory && showItems ? ( */}
      {showItems ? <CategoryItemsList items={itemCards} /> : null}
    </div>
  );
};

export default RestaurantCategory;
