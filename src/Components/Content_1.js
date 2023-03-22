import React from 'react';
import WifiIcon from '@mui/icons-material/Wifi';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

function Content_1() {
    return (
        <div>
            <div className='flex flex-col items-center justify-center border-cyan-300 my-10'>
                <h1 className='text-4xl mt-10 mb-4' >Under New Management</h1>
                <h3 className='text-2xl text-orange-400' >An elegant and charming hotel awaits you in the heart of North Adelaide</h3>
            </div>


            <div className='flex justify-around mb-10' >
                <div className='flex flex-col items-center' >
                    <WifiIcon className='text-teal-600' />
                    <p>Free Wifi</p>
                </div>
                <div className='flex flex-col items-center'>
                    <RestaurantIcon className='text-teal-600'/>
                    <p>Dine-in or Take-Away Breakfast</p>
                </div>
                <div className='flex flex-col items-center'>
                    <DirectionsCarIcon className='text-teal-600'/>
                    <p>Free Limited Parking</p>
                </div>
                <div className='flex flex-col items-center'>
                    <DirectionsCarIcon className='text-teal-600'/>
                    <p>$10 per night Reserved Bay Parking</p>
                </div>
            </div>


            <div className='grid grid-cols-2 gap-x-3' >
                <p>A charming and stylish 4 star hotel awaits you in the heard of North Adelaide, located on the prominent O’Connell Street walking distance from some award wining fine dining restaurants, entertainment, local attractions and short drive from the Adelaide CBD and world renowned Adelaide Oval.</p>

                <p>Adelaide Inn’s 64 recently renovated and well-appointed accommodation rooms and suites are complemented by elegant spaces including flexible meeting and function rooms, an outdoor pool and spa area, and Fox Restaurant serving breakfast daily.</p>

                <p>In addition, on the hotels doorstep are fashion boutiques, restaurants, bars, pubs, a cinema, golf course, jogging tracks and Adelaide Oval.
                Welcome to our hotel, the elegant and charming Adelaide Inn</p>
            </div>
        </div>
    )
}

export default Content_1