import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <div className='text-white bg-black flex justify-between px-10 py-5'>
            <div className='flex flex-col'> 
                <h1 className='mb-2'>ADELAIDE INN</h1>
                <div>
                    <FacebookRoundedIcon />
                    <InstagramIcon />
                </div>
            </div>

            <div className='w-1/2 flex justify-between'>
                <div className='flex flex-col'>
                    <h3 className='mb-2 text-orange-300'>PHONE</h3>
                    <p>Give us a call</p>
                    <button className='px-3 py-1 mt-2 border-2 border-orange-300 hover:bg-orange-400'>08 8267 5066</button>
                </div>

                <div className='flex flex-col'>
                    <h3 className='mb-2 text-orange-300'>WRITE</h3>
                    <p>Write us a mail</p>
                    <button className='px-3 py-1 mt-2 border-2 border-orange-300 hover:bg-orange-400'>CONTACT US</button>
                </div>

                <div className='flex flex-col'>
                    <h3 className='mb-2 text-orange-300'>VISIT</h3>
                    <p>160 O’CONNELL ST <br/>
                        NORTH ADELAIDE <br/>
                        SOUTH AUSTRALIA 5006</p>
                </div>
            </div>
        </div>
    )
}

export default Footer