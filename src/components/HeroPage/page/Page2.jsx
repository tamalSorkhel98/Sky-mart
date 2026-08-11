import React from 'react'

const Page2 = () => {
  return (
    <div className='text-white p-3 flex flex-wrap justify-center gap-3 lg:gap-4'>
       <div
        className='w-[47%] md:w-[46%] lg:w-[23%] border border-white bg-white/5 rounded-2xl p-3 flex items-center gap-5'>
            <span>
                logo
            </span>
            <span className='font-bold text-base sm:text-lg lg:text-2xl truncate'>
                0
                <p className='text-[11px] sm:text-sm text-white/70'>CartItem</p>
                <span className='text-[10px] sm:text-xs text-white/40'>in your bag</span>
            </span>
        </div>
          <div
        className='w-[47%] md:w-[46%] lg:w-[23%] border border-white bg-white/5 rounded-2xl p-3 flex items-center gap-5'>
            <span>
                logo
            </span>
            <span className='font-bold text-base sm:text-lg lg:text-2xl truncate'>
                $0.00
                <p className='text-[11px] sm:text-sm text-white/70'>Cart Value</p>
                <span className='text-[10px] sm:text-xs text-white/40'>Ready to checkout</span>
            </span>
        </div>
          <div
        className='w-[47%] md:w-[46%] lg:w-[23%] border border-white bg-white/5 rounded-2xl p-3 flex items-center gap-5'>
            <span>
                logo
            </span>
            <span className='font-bold text-xl'>
                5
                <p className='text-[11px] sm:text-sm text-white/70'>Top Products</p>
                <span className='text-[10px] sm:text-xs text-white/40'>Highly rated</span>
            </span>
        </div>
          <div
        className='w-[47%] md:w-[46%] lg:w-[23%] border border-white bg-white/5 rounded-2xl p-3 flex items-center gap-5'>
            <span>
                logo
            </span>
            <span className='font-bold text-xl'>
                6
                <p className='text-[11px] sm:text-sm text-white/70'>Categories</p>
                <span className='text-[10px] sm:text-xs text-white/40'>To explore</span>
            </span>
        </div>
      
    </div>
  )
}

export default Page2
