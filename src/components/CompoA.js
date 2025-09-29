import React from 'react'
import CompoB from './CompoB'

const CompoA = () => {
  return (
    <div className='mt-20 justify-center mx-auto w-80'>
      <h1 >Component A</h1>
      <CompoB />
    </div>
  )
}

export default CompoA
