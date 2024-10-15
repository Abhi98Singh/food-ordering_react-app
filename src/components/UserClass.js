import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //props is an object that contains all the attributes that are passed to a component from its parent component.
    console.log(props);
    //for creating state in class-based comp
    //Creating a state variable to store the json data and updates the DOM
    //Constructor is best place to create state variables bcz whenever u create a instance of a class, the constructor is called
    this.state = {
      //Default/Initial State values
      count: 0,
      count2: 55,
      userInfo: {
        name: "Dummy name",
        location: "Default",
        avatar_url: "http://dummyphoto",
      },
    };
    console.log(this.props.name + "Child Constructor");
  }

  //Once the comp is mounted onto the DOM after calling both contructor() and render(), this method is called
  //to make an API call, we can make this componentDidMount() function a async function
  async componentDidMount() {
    console.log(this.props.name + "Child did mount");
    //API call after Comp is mounted/renderd onto the DOM
    const data = await fetch("https://api.github.com/users/Abhi98Singh");
    const json = await data.json();
    console.log(json);

    //Updating state big obj (state variable) using this.setState(), it takes an obj
    this.setState({
      userInfo: json,
    });

    //because of SPA, Page is not gonna reload thats why setInterval() will keep executing
    this.timer = setInterval(() => {
      console.log("setInterval");
    }, 1000);
  }

  //this is called after React re-renders the comp with updated value
  componentDidUpdate(prevProps, prevState) {
    console.log("compDidUpdate is caled");
    if (this.state.count !== prevState.count) {
    }
  }
  //componentWillUnmount() method is called just before our comp is unmount /removed from the DOM(HTML)
  componentWillUnmount() {
    //used for cleaning up the things :- rayta saaf karne ke liye
    clearInterval(this.timer);
    console.log("componentWillUnmount is called");
  }

  render() {
    //destructuring variables/keys of props obj
    // const { name, location } = this.props;

    //Destrcuturing keys/variables of this.state big obj
    const { count, count2 } = this.state;

    //Destructuring the userInfo variables/keys from this.state.userInfo
    const { name, location, avatar_url } = this.state.userInfo;

    console.log(this.props.name + "Child Render");
    // debugger;
    return (
      <div className="userCard">
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <img src={avatar_url} alt="no photo" width={"100px"} />
      </div>
    );
  }
}

export default UserClass;
