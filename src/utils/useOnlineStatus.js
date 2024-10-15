import { useEffect, useState } from "react";

//First finalize/decide the Contract of Hook :- kya input lega or kya outout return karega
export const useOnlineStatus = () => {
  //creating a state variable to store and update the online status, giving intial/default value 'false'
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    //if user is offline setOnlineStatus(false)
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    //if user is online setOnlineStatus(true)
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  //boolean value in status
  return onlineStatus;
};
