import React from 'react'
import { MoveRight } from 'lucide-react'
import Categories from './Categories'
const Category = () => {
  return (
    <div className='text-white p-4'>
     <div className='flex justify-between items-center'>
        <span className='text-lg md:text-xl font-bold'>Shop by category</span>
        <span className='text-[#C8F400] text-sm flex items-center gap-2 md:text-lg'>View all <MoveRight/></span>
     </div>
     <div>
        <Categories/>
     </div>
    </div>
  )
}

export default Category
