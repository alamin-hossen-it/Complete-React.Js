import React, { Component } from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

// const About = () => {
//   return (
//     <div style={{marginTop:"10px"}}>
//       <Profile name='Alamin Hossen' email='alamin.it24to7@gmail.com' address='Umluj, KSA' />
//       <ProfileClass name='Alamin ' email='it24to7@gmail.com' address=' KSA' />
//     </div>
//   )
// }

// export default About

export class AboutClass extends Component {
  constructor() {
    super();
    console.log("Parent constractor is called");
  }

  componentDidMount() {
    console.log("Parent component Did Mount is called");
  }
  render() {
    console.log("Parent render is called");
    return (
      <div style={{ marginTop: "10px" }}>
      {/* <Profile name='Alamin Hossen' email='alamin.it24to7@gmail.com' address='Umluj, KSA' /> */}
        <ProfileClass
          email="alamin.it24to7@gmail.com"
          address="Umluj, KSA"
        />
      </div>
    );
  }
}
