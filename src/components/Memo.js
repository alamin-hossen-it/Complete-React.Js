import react, {useMemo, useState} from "react";
import { nthPrime } from "../utils/constant";


const Memo = ()=>{
    const [isDark, setIsDark]= useState(false)
    const [num, setNum] = useState(0)
    const cachedValue = useMemo(()=> nthPrime(num), [num])
   
  
    return (
    <div className={`${isDark && "bg-gray-900 text-white"} max-w-6xl mx-auto border border-gray-500 px-2 mt-10`}>
        <button className="bg-blue-700 border border-white rounded-md px-2 py-1" onClick={()=>(setIsDark(!isDark))}>Switch</button>
    <h1 className="font-bold text-xl"> useMemo </h1>
    <input className="border border-black bg-gray-400 px-1" type="number" value={num} onChange={(e)=>(setNum(e.target.value))}/>
    <h1>Nth Number: {cachedValue}</h1>
    </div>
    )
}

export default Memo;