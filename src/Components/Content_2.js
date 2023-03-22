import React from 'react';
import Image from './Images/pty-img-2.jpg'

function Content_2() {
  return (
    <div className='my-10 py-10 flex bg-black text-zinc-100 '>

        <div className='w-1/2 pl-40 pr-5 py-5  flex flex-col items-start '>
            <h1 className='text-3xl text-orange-400 mb-5 ' >Accommodation</h1>
            <h3 className='text-2xl mb-4' >An elegant and charming 4-star hotel awaits you in the heart of North Adelaide.</h3>
            <p className=''>Located on bustling O’Connell Street in the premier dining, entertainment and shopping location of North Adelaide, the hotel is just a short walk to the Adelaide CBD and the acclaimed Adelaide Oval.</p>

            <button className='bg-cyan-300 mt-5 px-5 py-2 rounded-md text-black' >Find Out More</button>
        </div>

        <div className='w-1/2 px-10 py-5 '>
            <img src={Image} alt="Background-Image" />
        </div>
    </div>
  )
}

export default Content_2