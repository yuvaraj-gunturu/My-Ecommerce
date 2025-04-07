import React from 'react'
import {assets} from '../assets/assets.js'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14  text-sm  mt-20'>
        <div>
        <img src=  {assets.logo} className='mb-5 w-32' alt="" />
        <p className='w-full md:w-2/3 text-gray-600 '>Description should be added here</p>
        </div>

        <div>
          <p className='text-gray-800 mb-5 text-xl font-medium'>Company</p>
          <ul className='text-gray-600 felx flex-col gap-2'>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Price policy</li>
          </ul>
        </div>
        <div>
          <p className='text-gray-800 mb-5 text-xl font-medium'>Get In Touch</p>
          <ul className='text-gray-600 felx flex-col gap-2'>
            <li>91+ 987654321</li>
            <li>Dummy@gmail.com</li>

          </ul>

        </div>
      </div>
      <div >
        <hr className='mx-20 my-5 border-gray-400'/>
        <p className='py-5 text-sm text-center'>DummyCopyRights2025@MY-Ecommerce.com - All Rights Reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer

