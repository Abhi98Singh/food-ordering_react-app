//importing useDispatch from "react-redux" to make dispatch function
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
//exporting addItem action from cartSlice
import { addItem } from "../utils/cartSlice";

const CategoryItemsList = ({ items }) => {
  console.log(items);

  const imgUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  //using useDispatch hook to create a dispath function, later on we will use this to dispatch an action
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispath an action addItem(item)
    dispatch(addItem(item));
  };

  return (
    <div className="w-3/4  pl-2">
      {items.map((item) => (
        <div className="flex  items-center justify-between">
          <div
            key={item.card.info.id}
            className="pb-10 border-b-2 border-slate-100 w-10/12"
          >
            <h2 className="font-bold">{item.card.info.name}</h2>
            <h4 className="font-semibold">
              ₹{item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </h4>
            <h5 className=" font-medium text-base">
              ⭐{item.card.info.ratings.aggregatedRating.rating}
            </h5>
            <p className="text-slate-500">{item.card.info.description}</p>
          </div>
          <div className="w-[150px] h-[130px] relative">
            <img
              src={imgUrl + item.card.info.imageId}
              alt=""
              className="w-full h-full rounded-xl "
            />
            {/* onClick on this Add button we  have to dispath an action */}
            <button
              className="p-2 bg-white text-green-500 absolute top-24 right-0 rounded-lg  shadow-lg mb-4"
              onClick={() => {
                //lets pass our items
                handleAddItem(item);
              }}
            >
              Add+
            </button>
          </div>
        </div>
      ))}
      <hr />
    </div>
  );
};

export default CategoryItemsList;
