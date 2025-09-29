import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'

const CompoC = () => {
  const userData = useContext(UserContext)
  return (
    <div  >
      <h1 className='flex justify-center'>User Profile</h1>
      <div className='border border-black w-auto' ></div>
      <h1>Name: {userData.name} </h1>
      <h1> Email: {userData.email}</h1>
    </div>
  )
}

export default CompoC
