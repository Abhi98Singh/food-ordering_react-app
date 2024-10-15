import { useDispatch, useSelector } from "react-redux";
import CategoryItemsList from "./CategoryItemsList";
//exporting clearCart action from cartSlice
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  //subscribing to whole store will affect our app performance : ! Never do this
  // const store = useSelector((store)=>store)
  // const cartItems = store.cart.items;

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  //using useDispatch hook to create a dispath function, later on we will use this to dispatch an action
  const dispatch = useDispatch();

  const handleClearCart = () => {
    //dispatch an action
    dispatch(clearCart());
  };

  return (
    <div className="text-center">
      <h1 className="pageHeading text-2xl font-semibold  mt-6 mb-12  text-center text-pink-600">
        Cart
      </h1>
      <div className="w-6/12 m-auto ">
        <button
          className="mb-8 py-2 px-5 text-base leading-4 min-w-24 bg-pink-500 text-white border-s-2 rounded-md
             hover:bg-pink-700 hover:text-white"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Your Cart is Empty☹️, Add items to your Cart</h1>
        )}
        <CategoryItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
