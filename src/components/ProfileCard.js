import { Component } from "react";
import ShimmerProfileCard from "./ShimmerProfileCard";

class ProfileCard extends Component {
  //Constructor is best place to create state variables and receive the props bcz whenever u create a instance of a class, the constructor is called
  //props is an object that contains all the attributes that are passed to a component from its parent component.
  constructor(props) {
    super(props);

    //Creating state(state variable) of the comp using this.state big obj
    this.state = {
      userInfo: {
        avatar_url: "http://xyz.hgd.aqs",
        name: "Abc",
        bio: "Pqr",
      },
    };
  }

  //once this class-based comp is completely mounted on to the DOM, then this method componentDidMount() is called
  //we can make componentDidMount() method 'async' for perforiming async operations(API call)
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Abhi98Singh");
    const json = await data.json();
    console.log(json);

    //Updating the state variable(state obj) using this.setState() method, it takes an obj
    this.setState({
      userInfo: json,
    });
  }

  render() {
    //Destructuring the userInfo variables/keys from this.state.userInfo obj
    const { avatar_url, name, bio } = this.state.userInfo;

    return this.state.userInfo.name === "Abc" ? (
      <ShimmerProfileCard />
    ) : (
      <div className="cardContainer flex justify-center items-center flex-col mt-5 font-bold">
        <h2>Developer</h2>
        <div className="card profileCard w-[18rem] mt-2 pb-2 border-2 border-solid border-black rounded-lg shadow-xl">
          <img
            src={avatar_url}
            className="card-img-top profilePhoto rounded-sm h-[250px] w-[100%]"
            alt="..."
          />
          <div className="card-body">
            <h2 className="card-title profileDetail pt-3 text-center font-semibold">
              {name}
            </h2>
            <h4 className="card-text profileDetails  text-center">( {bio} )</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
