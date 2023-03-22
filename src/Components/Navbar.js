import React from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CallIcon from '@mui/icons-material/Call';

function Navbar() {
    return (
        <div className='mb-1 py-5 px-2 flex justify-between items-center '>
            <div className='flex items-center '>
                <AcUnitIcon className='mr-2' />
                <h1 className='text-xl '>ADELAIDE INN</h1>
            </div>

            <div className=''>
                <ol className='flex justify-between align-center text-sm '>
                    <li className='mr-3.5 text-base hover:text-orange-300 cursor-pointer'>ABOUT</li>
                    <li className='mr-3.5 text-base hover:text-orange-300 cursor-pointer'>ACCOMMODATION</li>
                    <li className='mr-3.5 text-base hover:text-orange-300 cursor-pointer'>EVENTS</li>
                    <li className='mr-3.5 text-base hover:text-orange-300 cursor-pointer'>RESTAURANT</li>
                    <li className='mr-3.5 text-base hover:text-orange-300 cursor-pointer'>CONTACT</li>
                </ol>
            </div>

            <div className='flex '>
                <p className='mr-3.5 text-base hover:text-orange-300 cursor-pointer'><CallIcon /> 0882675066</p>
                <p className='mr-3.5 text-base text-orange-300 cursor-pointer'>BOOK A ROOM</p>
            </div>
        </div>
    )
}

export default Navbar