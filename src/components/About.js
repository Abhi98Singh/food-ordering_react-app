import React from "react";
import ProfileCard from "./ProfileCard";
// import UserContext from "../utils/UserContext";

// const About = () => {
//   return (
//     <div>
//       <h1 className="pageHeading">About Us</h1>

//       <User name={"Abhishek Bhadoriya (From Functional )"} />
//       <UserClass
//         name={"Abhishek Bhadoriya (From Class)"}
//         location={"Ujjain (from Class)"}
//       />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  //this parent's componentDidMount() is called after About comp is mounted on the DOM
  componentDidMount() {
    console.log("Parent DidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1 className="pageHeading text-2xl font-semibold mt-6 text-center text-pink-600">
          About Us
        </h1>
        <ProfileCard />
        <div></div>
      </div>
    );
  }
}

export default About;
