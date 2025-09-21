import React, { useState } from 'react'
import ListItems from './ListItems'

const Accordion = ({open, title, setOpen}) => {
 

  const handleShowBtn =()=>{
   return setOpen()
  }

  return (
    <div className='mt-2 border rounded-md shadow-md border-gray-200 w-64'>
     <div className='flex justify-between  mt-2 px-3 py-2'>
       <h1>{title}</h1>
      <button onClick={handleShowBtn} className='bg-slate-600 text-white px-2 rounded-md'>Show</button>
     </div>
     {
     open && <ListItems />
     }
    </div>
  )
}

export default Accordion
