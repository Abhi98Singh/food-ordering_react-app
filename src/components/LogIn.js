import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const LogIn = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);

  const [userInputName, setUserInputName] = useState(loggedInUser);

  return (
    <div>
      <div className="mt-10">
        <div className="flex flex-col justify-center items-center">
          <label className="text-lg font-semibold mb-3">
            Enter Your Username :{" "}
          </label>
          <input
            type="text"
            className="border-2 border-black p-1 mb-6"
            onChange={(e) => setUserInputName(e.target.value)}
          />
          <button
            className="bg-pink-500 py-2 px-4 rounded-lg text-white"
            onClick={() => setUserName(userInputName)}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
