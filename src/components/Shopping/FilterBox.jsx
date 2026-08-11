import React from 'react'
import { MoveRight } from 'lucide-react'
const FilterBox = () => {
  return (
    <div className='border border-white/70 rounded-2xl flex flex-col p-4 gap-4   md:w-[50vw] '>
      <input 
      className='text-white border border-white/30 rounded-2xl p-2'
      type="text" placeholder='search here' />
      <select 
        className='text-white border bg-black border-white/30 rounded-2xl p-2'
      name="Categories" id="">
        <option value="All Categories">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Furniture">Furniture</option>
        <option value="Home">Home</option>
        <option value="Sports">Sports</option>
        <option value="All_Accesories">All Accesories</option>
      </select>
      <select 
        className='text-white bg-black border border-white/30 rounded-2xl p-2'
      name="Featured" id="">
        <option value="Featured">Featured</option>
        <option value="low_high">Price Low ➡️ High</option>
         <option value="high-low">Price High ➡️ Low</option>
         <option value="top_rated">Top Rated</option>
         <option value="low_rated">Lowest Rated</option>
      </select>
    </div>
  )
}

export default FilterBox
