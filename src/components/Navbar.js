import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

const [mode, setMode] = useState(true)

 
// useEffect Array Dependency have 3 to call him.

// 1st Case:- UseEffect with Empty Array dependency -> [] -> Only onece call for the first time with render Navbar Component if Navbar rerender not useEffect rerender again.

// 2nd Case:- No Array dependency with useEffect -> This useEffect render all the time with the component who have this useEffect inside her.

//3rd Case:- Value With Array Dependency -> Not all the time render with component after some action we need to call the useEffect then use like this state variable changes mode. is mode is change then call useEffect.
useEffect(()=>{
  
},[mode])

  return (
    <div className="navbar">
      <h1>LOGO</h1>
      <ul className="menu_items">
        <li><Link to="/men">MEN </Link></li>
        <li><Link to="/women">WOMEN </Link></li>
        <li><Link to="/kids">KIDS </Link></li>
        <li><Link to="/cart">CART </Link></li>
        <li><Link to="/about">ABOUT </Link></li>
        
      </ul>
       <button onClick={()=> setMode(!mode)}>
        {mode? "Light🌏" : "Dark🌑"}
      
      </button>
    </div>
  );
};
;

 