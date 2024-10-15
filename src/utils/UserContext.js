//React provides utility function createContext to create a context
import { createContext } from "react";

//Created a UserContext using createContext() utility function provided by React
const UserContext = createContext({
  loggedInUser: "Guest",
});

export default UserContext;
