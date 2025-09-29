import React, { Component } from "react";
import Skeleton from "./Skeleton";
import UserContext from "../utils/UserContext";

class ProfileClass extends Component {
  constructor(props) {
    super(props);
    // console.log(" Child contractor is called");
    this.state = {
      count: 0,
      userInfo: null,
    };
  }

  // why we use componentDidMount?..
  // ans:- for api call because when this classbased component is called wherever first of all constractor method will call then call render Method then ComponentDidMount will call at the last. it semiler like we use for api call in useEffect at functional component.
  // Some realLife example expample for useing component did mount with api call.
  componentDidMount() {
    const fetchData = async () => {
      //  console.log("Child component did Mount called");
      const data = await fetch("https://api.github.com/users/alamin-hossen-it");
      const resData = await data.json();
      this.setState({
        userInfo: resData,
      });
      // console.log(resData)
      this.timer = setInterval(() => {
        console.log("Alamin Hossen");
      }, 1000);
    };

    fetchData();
  }

  componentDidUpdate() {
    console.log("componentDidUpdate with updated data");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    // console.log("Child render method is called");
    if (this.state.userInfo === null) {
      return <h1>Loading Data...</h1>;
    }
    const { name, avatar_url, bio } = this.state.userInfo;

    return (
      <div style={{ border: "2px solid black", padding: "20px" }}>
          <h1>Class Based Components</h1>
        <UserContext.Consumer>
          {(data) =>( 
            <div>
              <h1 className="font-bold ">Name: {data.name}</h1>
              <h1 className="font-bold">Email: {data.email}</h1>
            </div>)
          }
        </UserContext.Consumer>
        <img src={avatar_url} />
        <p>{bio}</p>
        <h2>Name: {name} </h2>
        <h2>Email:{this.props.email} </h2>
        <h2>Address: {this.props.address}</h2>
        <h1>Count: {this.state.count}</h1>
        <div className=" flex gap-2  w-40 h-9 justify-between items-center p-2 rounded-md">
          <button
            className="bg-green-800 px-2 py-1 text-white font-bold border rounded-md"
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Increase
          </button>
          <button
            className="bg-red-600 px-2 py-1 text-white font-bold border rounded-md"
            onClick={() => {
              this.setState({
                count: this.state.count - 1,
              });
            }}
          >
            Decrease
          </button>
        </div>
      </div>
    );
  }
}

export default ProfileClass;
