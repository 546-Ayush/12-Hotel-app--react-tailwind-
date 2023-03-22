import React from 'react';
import Image1 from './Images/pty-img-5.jpg';
import Image2 from './Images/pty-img-3.jpg';

function Content_4() {
  return (
    <div className='my-10 b-t-3'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl my-5 text-rose-500'>Hotel LifeStyle</h1>

            <div className='flex' >
                <div className='w-1/2 py-3 px-8 flex flex-col items-center'>
                    <img className='' src={Image1} alt="Bg_image-1" />
                    <p className='py-3 px-5 mt-2 bg-teal-500 rounded-md'>Hotel Facilities</p>
                </div>

                <div className='w-1/2 py-3 px-10 flex flex-col items-center'>
                    <img src={Image2} alt="Bg_image-2" />
                    <p className='py-3 px-5 mt-2 bg-teal-500 rounded-md'>Local Attractions</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content_4