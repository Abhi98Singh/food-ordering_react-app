import React, { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(99);

  //this useeffect is called, whenever component is re-rendered
  useEffect(() => {
    //API call

    // setInterval in useEffect;
    const timer = setInterval(() => {
      console.log("setInterval");
    }, 1000);

    //returning the function for cleaning, it is called when we unmount the comp
    return () => {
      clearInterval(timer);
      console.log("useEffect Return");
    };
  }, []);

  return (
    <div className="userCard">
      <h2>Name : {name}</h2>
      <h3>Location : Ujjain</h3>
      <h4>Contact : Romeo98Singh</h4>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          // setCount(1);
          //using anonymous arrow function
          setCount((count) => count + 1);
        }}
      >
        Count
      </button>
      <h1>Count2 : {count2}</h1>
    </div>
  );
};

export default User;
