import React from 'react'
import {  Shopcontext } from '../context/Shopcontext'
import Title from './Title';
import { useState, useEffect, useContext } from 'react';
import ProductItems from './ProductItems';


const LatestCollection = () => {

    const {products} = useContext(Shopcontext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    },
        [products]);
    
  return (
    <div className= 'my-10'>
      <div className='text-center py-10 text-3xl'>
        <Title text1={ 'Latest'}  text2={'Collections'} />
        <p className='w-3/4 text-xs m-auto sm:text-sm md:text-base text-gray-600'>
        Discription should be added here
        </p>

      </div>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4'>
       {
         latestProducts.map((items,index) => (
            <ProductItems key = {index} id = {items._id} image = {items.image} name = {items.name} price = {items.price} />
         ))
       }
      </div>
    
    </div>
  )
}

export default LatestCollection
