import React from 'react'
import { Zap } from "lucide-react";
const Banner = () => {
  return (
    <div className='flex  gap-2 justify-center items-center'>
      <div className="w-10 h-10 bg-[#C8F400] rounded-xl flex items-center justify-center">
        <Zap className="w-5 h-5 text-black fill-black" />
      </div>
      <span className='text-white text-xl font-bold'>Sky <span className='text-[#C8F400]'>Mart</span></span>
    </div>
  )
}

export default Banner
