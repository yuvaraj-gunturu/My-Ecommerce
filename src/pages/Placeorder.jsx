import React, { useContext } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'


const Placeorder = () => {

const [method, setMethod] = useState('cod');
const {navigate} = useContext(Shopcontext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px] '>
        <div className='text-xl sm:text-2xl my-3'>
       <Title text1={'Delivery'} text2={'Information'}/> 
        </div>
        <div className='flex gap-3'>
          <input className='border border-gary-300 rounded py-1.5 px-3.5 w-full' type="text" name="" id="" placeholder='First Name'/>
          <input className='border border-gary-300 rounded py-1.5 px-3.5 w-full' type="text" name="" id="" placeholder='Last Name'/>

        </div>
        <input className='border border-gary-300 rounded py-1.5 px-3.5 w-full' type="text" name="" id="" placeholder='Email adress'/>
        <input className='border border-gary-300 rounded py-1.5 px-3.5 w-full' type="text" name="" id="" placeholder='Street'/>

        <div className='flex gap-3'>
          <input className='border border-gary-300 rounded py-1.5 px-3.5 w-full' type="text" name="" id="" placeholder='City'/>
          <input className='border border-gary-300 rounded py-1.5 px-3.5 w-full' type="text" name="" id="" placeholder='State'/>

        </div>
        <div className='flex gap-3'>
          <input className='border border-gary-300 rounded py-1.5 px-3.5 w-full' type="number" name="" id="" placeholder='Zipcode'/>
          <input className='border border-gary-300 rounded py-1.5 px-3.5 w-full' type="text" name="" id="" placeholder='Country'/>

        </div>
        <input className='border border-gary-300 rounded py-1.5 px-3.5 w-full' type="number" name="" id="" placeholder='Phone Number'/>


      </div>
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />

        </div>
        <div className='mt-12'>
          <Title text1={'Payment'} text2={'Method'}/>
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('stripe')} className='flex gap-3 items-center border p-2 px-3 cursor-pointer'>
              <p className= {`min-w-3.5 h-3.5 border rounded-full  ${method ==='stripe' ?'bg-green-500': '' }`} ></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={() => setMethod('razorpay')} className='flex gap-3 items-center border p-2 px-3 cursor-pointer'>
              <p className= {`min-w-3.5 h-3.5 border rounded-full ${method ==='razorpay' ?'bg-green-500': '' }`} ></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={() => setMethod('cod')} className='flex gap-3 items-center border p-2 px-3 cursor-pointer'>
              <p className= {`min-w-3.5 h-3.5 border rounded-full ${method ==='cod' ?'bg-green-500': '' }`} ></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>Cash On Delivery</p>
            </div>

          </div>
          <div className='w-full text-end mt-8'>
            <button onClick = {() => navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm '>Place Order</button>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Placeorder
