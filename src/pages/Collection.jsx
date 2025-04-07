import React, { useContext, useEffect } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { useState } from 'react'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItems from '../components/ProductItems';

const Collection = () => {
    
const {products, search, showSearch} = useContext(Shopcontext);



const [showFilters, setShowFilters] = useState(false);
const [showSort, setShowSort] = useState([]);
const [category, setCategory] = useState([]);
const [subCategory, setSubCategory] = useState([]);
const [sortType, setSortType] = useState('relavent');

const tooggleCategory = (e) => { 

    if(category.includes(e.target.value)){
        setCategory(prev => prev.filter(item => item !== e.target.value))
} else {
    setCategory(prev => [...prev, e.target.value])

}

}


const toogleSubCategory = (e) => { 

    if (subCategory.includes(e.target.value)) {
        setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
        setSubCategory(prev => [...prev, e.target.value])
    }


}


const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search) {
        productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    
    if(category.length > 0) {
        productsCopy = productsCopy.filter(item => category.includes(item.category));

    }
    

    if(subCategory.length >0) {
        productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));

    }
    setShowSort(productsCopy)
}


const sortProducts = () => {

    const filterProductsCopy = showSort.slice();

    switch(sortType) {
        case 'low-high':
            setShowSort(filterProductsCopy.sort((a,b) => (a.price - b.price)));
            break;
        case 'high-low':
            setShowSort(filterProductsCopy.sort((a,b) => (b.price - a.price)));
            break;
        default:
            applyFilter();
            break;
    }
}



useEffect(( ) => {
   applyFilter();

},[category, subCategory,search, showSearch])

useEffect(() => { 
    sortProducts();
}, [sortType])




 
return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10  my-15'>
       <div className='min-w-60'>
            <p onClick={() => setShowFilters(!showFilters)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters
            <img className={`h-3 sm:hidden ${showFilters ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
            </p>
            
            <div className= {`border border-gray-300 pl-5 py-3 mt-3 ${showFilters ? '' : 'hidden'} sm:block `}>
                <p className='text-sm font-medium mb-3'>Categories</p>
                <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                    <p className='flex gap-2'>
                        <input  className = "w-3 " type="checkbox" value={"Men"} onChange={tooggleCategory} /> Men
                    </p>
                    <p className='flex gap-2'>
                        <input  className = "w-3 " type="checkbox" value={"Women"} onChange={tooggleCategory} /> Women
                    </p>
                    <p className='flex gap-2'>
                        <input  className = "w-3 " type="checkbox" value={"Kids"} onChange={tooggleCategory} /> Kids
                    </p>

                </div>

            </div>


            <div className= {`border border-gray-300 pl-5 py-3 my-3 ${showFilters ? '' : 'hidden'} sm:block `}>
                <p className='text-sm font-medium mb-3'>Type</p>
                <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                    <p className='flex gap-2'>
                        <input  className = "w-3 " type="checkbox" value={"Topwear"} onChange={toogleSubCategory} /> Topwear
                    </p>
                    <p className='flex gap-2'>
                        <input  className = "w-3 " type="checkbox" value={"Bottomwear"} onChange={toogleSubCategory} /> Bottomwear
                    </p>
                    <p className='flex gap-2'>
                        <input  className = "w-3 " type="checkbox" value={"Winterwear"}  onChange={toogleSubCategory} /> Winterwear
                    </p>

                </div>

            </div>
       </div>

       <div className='flex-1'>
            <div className='flex justify-between text-base sm:text-2xl mb-4 '>
                <Title text1 = {'All'}  text2 ={'Collections'} />

                <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                    <option value="relavent">sort by : Relavent</option>
                    <option value="low-high">Sort by : Low to High</option>

                    <option value="high-low">Sort by : High to Low</option>

                </select>

            </div>

            <div className='grid grid-clos-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            
            {
                showSort.map((item,index) => (

                    <ProductItems key={index} name={item.name} id={item._id} image={item.image} price={item.price}  />
                ))
            }

            </div>



       </div>

    </div>
)
}

export default Collection
