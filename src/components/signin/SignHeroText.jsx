import React from 'react'
import Banner from '../Logo/Banner'

const SignHeroText = () => {
  return (
    <div className='hidden lg:flex flex-col justify-center gap-10 h-screen w-1/2 border-r  border-white/20 px-8 relative'>
    <div className='absolute left-7 top-10'>
        <Banner />
    </div>

    <div className=''>
        <p className='text-[#C8F400] text-sm tracking-wider'>
            WELCOME BACK
        </p>

        <h2 className='text-white font-bold text-3xl xl:text-6xl leading-tight mt-2'>
            Shop the future.
            <br />
            <span className='text-[#C8F400]'>Today.</span>
        </h2>

        <p className='text-white/40 text-sm mt-4 leading-6 max-w-md'>
            Thousands of products, lightning-fast delivery, and prices that make your wallet happy.
        </p>
    </div>

    <div className='flex justify-center gap-3 w-full'>
        <span className='text-[#C8F400] flex flex-col items-center border border-white p-4 flex-1 rounded-xl'>
            20K
            <span className='text-white/40'>Product</span>
        </span>

        <span className='text-[#C8F400] flex flex-col items-center border border-white p-4 flex-1 rounded-xl'>
            50K
            <span className='text-white/40'>User</span>
        </span>

        <span className='text-[#C8F400] flex flex-col items-center justify-center border border-white p-4 flex-1 rounded-xl'>
            4.8
            <span className='text-white/40'>Rating</span>
        </span>
    </div>
</div>
  )
}

export default SignHeroText
