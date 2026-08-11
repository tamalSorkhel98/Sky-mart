import React from 'react'
import { Zap,Shield,Tag } from 'lucide-react'
const WhyUs = () => {
  return (
    <div className='text-white grid grid-cols-1 gap-4 md:grid-cols-3 p-4 mb-15'>
        <div className='border flex p-4 rounded-2xl  gap-3 items-center '>
            <span><Zap className='text-[#C8F400]'/></span>
            <p className='flex flex-col text-white/35 text-sm'><span className='font-bold text-m text-white'>Fast Delivery</span>Same Day on select Item</p>
        </div>
        <div className='border flex p-4 rounded-2xl  gap-3 items-center '>
            <span ><Shield className='text-[#3b82f680]'/></span>
            <p className='flex flex-col text-white/35 text-sm'><span className='font-bold text-m text-white'>Secure Payment</span>100% encrypted checkout</p>
        </div>
        <div className='border flex p-4 rounded-2xl  gap-3 items-center '>
            <span><Tag className='text-green-400'/></span>
            <p className='flex flex-col text-white/35 text-sm'><span className='font-bold text-m text-white'>Best Price</span>Price Match guarantee</p>
        </div>
      
    </div>
  )
}

export default WhyUs
