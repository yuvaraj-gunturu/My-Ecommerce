import React from 'react'
import { assets } from '../assets/assets'

const Ourpolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around text-center py-10 gap-12 sm:gap-8 text-xl sm:text-sm md:text-base text-gray-700' >
        <div>
            <img src= {assets.exchange_icon} alt="" className='w-12 mb-8 m-auto '/>
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-700'>We Offer Free Exchange Policy</p>
        </div>
        <div>
            <img src= {assets.quality_icon} alt="" className='w-12 mb-8 m-auto '/>
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-700'>We Offer Free 7 Days Return Policy</p>
        </div>
        <div>
            <img src= {assets.support_img} alt="" className='w-12 mb-8 m-auto '/>
            <p className='font-semibold'>Best Customer Policy</p>
            <p className='text-gray-700'>We Offer 24/7 Customer Support</p>
        </div>
      
    </div>
  )
}

export default Ourpolicy
