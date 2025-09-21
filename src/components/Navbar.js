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
    <div className="flex justify-between px-10 py-8 shadow-md bg-slate-700 text-white ">
      <h1 className="font-bold text-3xl">LOGO</h1>
      <ul className="flex gap-5 ">
        <li className="hover:border-b-gray-900 hover:text-blue-400"><Link to="/men">MEN </Link></li>
        <li className="hover:border-b-gray-900 hover:text-blue-400"><Link to="/women">WOMEN </Link></li>
        <li className="hover:border-b-gray-900 hover:text-blue-400"><Link to="/kids">KIDS </Link></li>
        <li className="hover:border-b-gray-900 hover:text-blue-400"><Link to="/cart">CART </Link></li>
        <li className="hover:border-b-gray-900 hover:text-blue-400"><Link to="/about">ABOUT </Link></li>
        <li className="hover:border-b-gray-900 hover:text-blue-400"><Link to="/grocery">GROCERY </Link></li>
        
      </ul>
       <button className="bg-blue-500 px-3 py-2 rounded-md" onClick={()=> setMode(!mode)}>
        {mode? "Light🌏" : "Dark🌑"}
      
      </button>
    </div>
  );
};
;

 