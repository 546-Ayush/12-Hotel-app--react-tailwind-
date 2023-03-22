import React from 'react';
import BackgroundImage from './Images/pty-img-1.jpg';
import Forms from './Forms';
import Navbar from './Navbar';

function Frontpart() {
  return (
    <div className='flex flex-col justify-center items-center w-full  relative z-10 opacity-100'>
      <img className='h-auto  mb-1' src={BackgroundImage} alt="Background Image" />
      <h1 className=' border-2 border-white py-5 px-7 text-white text-xl font-semibold absolute z-40 ' >Best rates guaranteed <br></br> when you book direct.</h1>


      {/*  ----------  Navbar  ----------*/}
      <div className='w-full text-white absolute top-0 left-0'>
        <Navbar />
      </div>

      {/*  ----------  Forms  ----------*/}
      <div className='w-full bg-zinc-900 text-white opacity-80 absolute bottom-1 left-0 z-10' >
        <Forms />
      </div>

    </div>
  )
}

export default Frontpart;