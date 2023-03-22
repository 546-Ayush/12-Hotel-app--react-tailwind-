import React from 'react'

function Forms() {
    return (
        <div className="w-full py-3 flex justify-center align-center">
            <form className=' flex justify-around items-end w-full ' >

                <div className='flex flex-col'>
                    <label htmlFor="check_in">Check In <span className='text-orange-300'>*</span></label>
                    <input className='outline-none px-1 border-2 border-orange-300 ' type="date" placeholder='mm/dd/yy' required />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="check_out">Check Out <span className='text-orange-300'>*</span></label>
                    <input className='outline-none px-1 border-2 border-orange-300 ' type="date" placeholder='mm/dd/yy' required />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="adults">Adults <span className='text-orange-300'>*</span></label>
                    <input className='outline-none w-32 px-1  border-2 border-orange-300' type="number" placeholder='1' required />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="children">Children</label>
                    <input className='outline-none w-32 px-1  border-2 border-orange-300' type="number" placeholder='0' required />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="infant">Infant</label>
                    <input className='outline-none w-32 px-1 border-2 border-orange-300' type="number" placeholder='1' required />
                </div>

                <button className='text-white bg-orange-300 h-7 px-3' >CHECK AVAILABILITY</button>
            </form>
        </div>
    )
}

export default Forms;