import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  // console.log(props);

  // const { restname, cuisinename } = props;

  const { restListss } = props;

  console.log(restListss);

  const {
    cloudinaryImageId,
    name,
    costForTwo,
    cuisines,
    avgRating,
    areaName,
    locality,
    aggregatedDiscountInfoV3,
  } = restListss?.info;

  return (
    <div
      data-tesid="resCard"
      className="restCard my-9 mx-7 p-2 w-56 min-h-[430px] border-2 bg-slate-50 border-pink-600 text-center 
    hover:border-[3px] hover:translate-x-1 "
    >
      <img
        className="cardImg w-[100%] h-52 rounded-lg hover:scale-105 "
        // src="https://png.pngtree.com/png-clipart/20231017/original/pngtree-burger-food-png-free-download-png-image_13329458.png"
        src={
          CDN_URL + cloudinaryImageId
          // props.restListss.info.cloudinaryImageId
        }
      />
      {/* <h2 className="absolute text-white font-semibold left-8 top-48">
        {aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}
      </h2> */}

      <h3 className="restCardName mt-3 font-bold text-pink-700">{name}</h3>
      <h5 className="cardOtherDetails mt-2 max-w-fit ml-12 p-1 border-2 border-pink-600 bg-pink-600 text-white ">
        {costForTwo}
      </h5>
      {/* <h5 className="cardOtherDetails mt-2 max-w-fit ml-5 text-center p-1 border-2 border-purple-700 bg-purple-700 text-white ">
        {aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}
      </h5> */}
      <h5 className="cardOtherDetails mt-2 text-pink-900">{locality}</h5>
      <h5 className="cardOtherDetails  text-pink-900">({areaName})</h5>

      {/* <h5 className="cardOtherDetails mt-2 text-pink-900">
        {cuisines.join(" , ")}
      </h5> */}
      <h5 className="cardOtherDetails mt-2 p-1   text-pink-600">
        ⭐{avgRating}
      </h5>
    </div>
  );
};

//We'll create a Higher-order component which will take this basic Rest card as input which will return us
// a new component ehich will be the enhanced Rest card with veg label

/**
 * Contract :- input - RestCard => RestCardWithVegLabel
 */

//takes ResturantCard(componenet) as input
export const withVegLabel = (ResturantCard) => {
  //returns a new Component
  return (props) => {
    //returns JSX
    return (
      <div className="relative">
        <label className="absolute  left-7  p-2 z-10  bg-green-500 text-white">
          Veg
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
