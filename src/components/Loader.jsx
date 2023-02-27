import React from 'react'
import loader from "../assets/img/loader.gif"
const Loader = () => {
  return (
    <div className='flex relative h-[100vh] items-center justify-center'>
      <img className='md:w-[120px] w-[100px]' src={loader} alt="loader" />
    </div>
  )
}

export default Loader;
