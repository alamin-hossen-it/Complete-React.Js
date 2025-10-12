import React, { useState, useRef } from "react";

//Usecase of ref
//1 Want to Access DOM Element.
//

const Ref = () => {
  const ref2 = useRef(null)
  const [count, setCount] = useState(0);
  const ref = useRef(0) // what ever you store in use ref its store the data in a object like this useRef data storing systam useRef(0) == {current:0} and access the value use ref.current thats it.
  let x = 0;  // এই variable প্রতি render এ reset হয়

  console.log(ref)

  return (
    <div className=" flex items-center gap-2 justify-center max-w-5xl mx-auto border border-black mt-10 px-5 ">
     <div className="my-5">
       <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 border border-black rounded-md px-2 py-1"
      >
        Increment
      </button>
      <h1 className="font-bold"> counted state value: {count}</h1>
      <button
        onClick={() => {
          x++;
          console.log("x=>", x);
        }}
        className="bg-blue-600 border border-black rounded-md px-2 py-1"
      >
     
        Increment
      </button>
      <h1 className="font-bold"> count x value: {x}</h1>

       <button
        onClick={() => {
          ref.current = ref.current + 1;
          console.log("ref Value=>", ref.current);
        }}
        className="bg-blue-600 border border-black rounded-md px-2 py-1"
      >
     
        Increment
      </button>
      <h1 className="font-bold"> count useRef value: {ref.current}</h1>

       <input ref={ref2} type="text" placeholder="Full Name" className="border border-black px-2 py-1 rounded-md text-gray-800" />
      <button className="bg-blue-700 py-1 px-2 ml-1 font-bold text-white border rounded-md" onClick={()=>{
        ref2.current.focus()
      }}>Click</button>
      <br></br>
      <input ref={ref2} type="file" className="border border-black px-2 py-1 text-gray-800 mt-2 rounded-md" />
      <button className="bg-blue-700 py-1 px-2 ml-1 font-bold text-white border rounded-md" onClick={()=>{
        ref2.current.click()
      }}>Click</button>
     </div>
    </div>
  );
};

export default Ref;
