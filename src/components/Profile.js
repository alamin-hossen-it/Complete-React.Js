import React, { useEffect, useState } from 'react'

const Profile = ({name, email, address}) => {
     const [count, setCount]= useState(0);

     useEffect(()=>{
     const timer = setInterval(()=>{
        console.log('Alamin Hossen')
      },1000)
      return ()=>{
        clearInterval(timer)
      }

     },[])
  return (
    <div style={{border:"2px solid black", marginTop:"10px", padding:"20px"}}>
        <h1>Functional Components</h1>
      <h2>Name:{name}</h2>
      <h2>Address:{address}</h2>
      <h2>E-Mail: {email}</h2>
      <h2>Phone:+966564255679</h2>
      <h1>Count: {count}</h1>
     <div style={{width:"150px", height:"30px", display:"flex"}}>
         <button onClick={()=>{
        setCount(count + 1)
      }}>Increase</button>

      <button onClick={()=>{
        setCount(count-1)
      }}>Decrease</button>
     </div>
    </div>
  )
}

export default Profile
