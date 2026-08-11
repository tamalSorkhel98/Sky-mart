import React from 'react'

const Categories = () => {
  return (
    <div className='grid grid-cols-2 p-3 md:grid-cols-4 gap-4 text-black justify-items-center place-items-center   mt-4'>
      <div className='flex w-full flex-col aspect-square border rounded-2xl bg-white items-center justify-center max-w-50 '>
        <span className='text-2xl md:text-3xl'>💻</span>
        <span>Electronics</span>
        <span className='text-sm text-black/60'>17 items</span>
      </div>
      <div className='flex w-full  flex-col border aspect-square rounded-2xl bg-white items-center justify-center max-w-50  '>
        <span className='text-2xl md:text-3xl'>📦</span>
        <span>Clothing</span>
        <span className='text-sm text-black/60'>2 items</span>
      </div>
      <div className='flex w-full flex-col border aspect-square rounded-2xl bg-white items-center justify-center max-w-50  '>
        <span className='text-2xl md:text-3xl'>📦</span>
        <span>Furniture</span>
        <span className='text-sm text-black/60'>3 items</span>
      </div>
      <div className='flex w-full flex-col border aspect-square rounded-2xl bg-white items-center justify-center max-w-50  '>
        <span className='text-2xl md:text-3xl'>📦</span>
        <span>Home</span>
        <span className='text-sm text-black/60'>14 items</span>
      </div>
      <div className='flex w-full flex-col border aspect-square rounded-2xl bg-white items-center justify-center max-w-50  '>
        <span className='text-2xl md:text-3xl'>📦</span>
        <span>Sports</span>
        <span className='text-sm text-black/60'>8 items</span>
      </div>
      <div className='flex w-full flex-col border aspect-square rounded-2xl bg-white items-center justify-center max-w-50  '>
        <span className='text-2xl md:text-3xl'>📦</span>
        <span>Accessories</span>
        <span className='text-sm text-black/60'>6 items</span>
      </div>
    </div>
  )
}

export default Categories
