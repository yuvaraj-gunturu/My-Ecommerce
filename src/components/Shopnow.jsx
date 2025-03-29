import React from 'react'
import {assets} from '../assets/assets.js'


const Shopnow = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center border border-gray-300 lg:m-[20px]'>
        <div className='text-[#414141] flex justify-center flex-col'>
            <div className='flex text-center  p-2'>
                <p className='w-8 md:w-11 bg-[#414141] h-[4px] rounded m-2'></p>
                <p className='font-medium text-sm md:text-base'>OUR BESTSELLER</p>

            </div>
            <h1 className='prata-regular text-3xl md:text-5xl leading-relaxed sm:py-3 pl-[100px]' >Latest Arrival</h1>
            <div className='flex text-center m-2 p-2 pl-[200px]'>
                
                <p className='font-medium text-sm md:text-base'>SHOP NOW</p>
                <p className='w-8 md:w-11 bg-[#414141] h-[4px] rounded m-2'></p>

            </div>

        </div>
        <img className='w-full md:w-[300px] m-[20px]' src={assets.hero_img} alt="" />
     
    </div>
  )
}

export default Shopnow
