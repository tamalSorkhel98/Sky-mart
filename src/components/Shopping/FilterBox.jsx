import React, { useContext, useEffect, useState } from 'react'
import { MoveRight,X } from 'lucide-react'
import { MyStore } from '../../Context/MyContext';
const FilterBox = ({products}) => {
  
  
  const {filterProducts, setFilterProducts}=useContext(MyStore)
  const [filter, setFilter] = useState({
    search:'',
    categories:'all',
    feature:'featured'
  });
  
  const filterHandle=()=>{
    
    const filterResult = products.filter((p)=>{
        return (filter.categories==='all'||
        p.category==filter.categories)
            &&
        p.productname.toLowerCase().includes(filter.search.trim())    
       })
       if(filter.feature==='low_high') {
        filterResult.sort((a,b)=>a.price-b.price)
      }
      else if(filter.feature==='high_low'){
        filterResult.sort((a,b)=>b.price-a.price)
      }
      else if(filter.feature==='top_rated'){
         filterResult.sort((a,b)=>b.rating-a.rating)
      }
      else if(filter.feature==='low_rated'){
         filterResult.sort((a,b)=>a.rating-b.rating)
      }
    setFilterProducts(filterResult);
  }
  useEffect(() => {
   filterHandle();
  }, [filter])
  

  return (
    <div className='border border-white/70 rounded-2xl flex flex-col p-4 gap-4   md:w-[50vw] '>
      <input value={filter.search}
        onChange={(e)=>{
          setFilter({...filter,search:e.target.value})
        }}

      className='text-white border border-white/30 rounded-2xl p-2'
      type="text" placeholder='search here' />
      <select
      value={filter.categories} 
      onChange={(e)=>{
        setFilter({...filter,categories:e.target.value})
      }}
        className='text-white border bg-black border-white/30 rounded-2xl p-2'
      name="Categories" id="">
        <option value='all'>All Categories</option>
        <option value="electronic">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="furniture">Furniture</option>
        <option value="home">Home</option>
        <option value="sports">Sports</option>
        <option value="accessories">All Accesories</option>
      </select>
      <select
      value={filter.feature}
        onChange={(e)=>{
         setFilter({...filter,feature:e.target.value})
        }} 
        className='text-white bg-black border border-white/30 rounded-2xl p-2'
      name="Featured" id="">
        <option value="featured">All Featured</option>
        <option value="low_high">Price Low ➡️ High</option>
         <option value="high_low">Price High ➡️ Low</option>
         <option value="top_rated">Top Rated</option>
         <option value="low_rated">Lowest Rated</option>
      </select>
  
     <div className='flex gap-2'>
       {
        filter.search!==''&&
          <span className='flex bg-[#C8F400]/10 text-[#C8F400] w-fit px-5 py-1 rounded-xl'>
            <span className='cursor-pointer' onClick={()=>{
              setFilter({...filter,search:''})
            }}><X/></span>{filter.search}
            </span>
       }
        {
          filter.categories!=='all'&&
              <span className='flex bg-[#C8F400]/10 text-[#C8F400] w-fit px-5 py-1 rounded-xl'>
                <span className='cursor-pointer' onClick={()=>{
              setFilter({...filter,categories:'all'})
            }}><X/></span>{filter.categories}</span>
       }
        {
          filter.feature!=='featured'&&
          <div>
              <span className='flex bg-[#C8F400]/10 text-[#C8F400] w-fit px-5 py-1 rounded-xl'>
               <span className='cursor-pointer' onClick={()=>{
              setFilter({...filter,feature:'featured'})
            }}><X/></span>{filter.feature}</span>
          </div>
       }
     </div>
       {
        (filter.search!==''||filter.categories!=='all'||filter.feature!=='featured') &&
        (<button className='flex bg-red-500/10 text-red-500 w-fit px-5 py-1 rounded-xl'>Clear 
          <span onClick={()=>{
            setFilter({...filter,search:'',feature:'featured',categories:'all'})
          }}>
            <X/>
          </span> </button>)
       }
    </div>
  )
}

export default FilterBox
