import React, { Component } from "react";

class ProfileClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div style={{ border: "2px solid black", padding: "20px" }}>
        <h1>Class Based Components</h1>
        <h2>Name:{this.props.name} </h2>
        <h2>Email:{this.props.email} </h2>
        <h2>Address: {this.props.address}</h2>
        <h1>Count: {this.state.count}</h1>
         <div style={{width:"150px", height:"30px", display:"flex"}}>
                    <button
          onClick={() => {
            this.setState({
                count: this.state.count + 1
            })
          }}
        >
          Increase
        </button>
        <button onClick={()=>{
            this.setState({
                count: this.state.count - 1,
            })
        }}>Decrease</button>
         </div>
      </div>
    );
  }
}

export default ProfileClass;
