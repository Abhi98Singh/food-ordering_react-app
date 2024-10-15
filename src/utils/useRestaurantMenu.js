import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  //creating a state for this custom hook, for storing API data and update the state
  const [resInfo, setResInfo] = useState(null);

  //useEffect is called just on initial render
  useEffect(() => {
    fetchData();
  }, []);

  //fetch data logic and updating the state
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data); //API data Array of obj Lists[]
  };

  //we are returing resInfo from this useRestaurantMenu custom hol
  return resInfo;
};

export default useRestaurantMenu;
