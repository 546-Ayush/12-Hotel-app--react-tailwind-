import React from 'react';
import Image from './Images/pty-img-4.jpg';
 
function Content_3() {
  return (
    <div className='flex '>
        <div className='w-1/2 px-5 py-5'>
          <img src={Image} alt="Background-Image" />
        </div>

        <div className='w-1/2 flex flex-col justify-center items-start pl-10 pr-5 py-5'>
            <h1 className='text-3xl text-orange-500 mb-5' >Meetings & Events</h1>
            <h3 className='text-2xl mb-3 '>Your ‘one stop shop’, providing all the facilities you will need.</h3>
            <p>Whether it’s a business meeting or conference, Adelaide Inn offers a choice of three versatile event spaces. Adelaide Inn will ensure your next breakfast meeting, seminar or trade display is a success.</p>

            <button className='px-5 py-2 mt-6 bg-orange-300 rounded-md' >Find Out More</button>
        </div>
    </div>
  )
}

export default Content_3;