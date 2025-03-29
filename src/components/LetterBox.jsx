import React from 'react'

const LetterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
     }

  return (
    <div className='text-center py-5'>
      <p className='text-gray-800 text-2xl'>Suscribe Now & Get 20% Offer</p>
      <p className='text-gray-400 mt-4'>Discription should be added here</p>
      <form onSubmit={onSubmitHandler} action="" className='flex justify-center mt-4'>
        <input type="email" className='border border-gray-400 p-2 required' placeholder='Enter your email address' />
        <button className='bg-gray-800 text-white p-2' type='submit'>Suscribe</button>
      </form>
    </div>
  )
}

export default LetterBox
