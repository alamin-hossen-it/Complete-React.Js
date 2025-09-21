import React, { useState } from "react";
import Accordion from "./Accordian";
import { IoReorderThree } from "react-icons/io5";

const Men = () => {
    const [open, setOpen] = useState(null)
  return (
    <div className="max-w-6xl mx-auto mt-10">
    <div className="flex justify-between w-64 items-center">
        <h1 className="font-bold text-2xl py-3"> Filter Option</h1>
        <IoReorderThree size={30} color="black"/>
    </div>
     
      <div className="border-2 border-gray-700 w-64"></div>
      {
        ['Barnd', 'Mens', 'kids', 'Girls'].map((title, index)=>{return <Accordion title={title} key={index} open={index === open?true:false} setOpen= {()=>{setOpen(index)}} />})
      }
    </div>
  );
};

export default Men;
