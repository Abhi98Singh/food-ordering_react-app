import { createSlice, current } from "@reduxjs/toolkit";

//Creating a cartSlice using createSlice()
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], //initialState obj's items variable has empty array initially
  },
  reducers: {
    //reducer function
    addItem: (state, action) => {
      //mutating the state => In Redux Toolkit :- We have to mutate the state(dont have a option) - Mandatory
      state.items.push(action.payload);
      //Earlier, In older Redux(vanilla) => mutating a state is not allowed...so we used make copy of state
      // const newState = [...state];
      // newState.state.items.push(action.payload);
      // return newState;
    },
    //reducer function
    removeItem: (state, action) => {
      state.items.pop();
    },
    //reducer function
    clearCart: (state) => {
      console.log(current(state));
      //RTK says => Either Mutate the existing state or return a new state
      // state.items.length = 0; //it will make our state again [] a empthy array
      return { items: [] }; //returning a new state , new state will be replaced with orignal state
    },
  },
});

//exporting our actions from cartSlice
export const { addItem, removeItem, clearCart } = cartSlice.actions;

//exporting reducer from cartSlice
export default cartSlice.reducer;
