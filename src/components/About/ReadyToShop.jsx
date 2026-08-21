import { MoveRight } from 'lucide-react'
import React, { useContext } from 'react'
import { MyStore } from '../../Context/MyContext'

const ReadyToShop = () => {
    const{setCurrentPage}=useContext(MyStore)
  return (
    <div className='flex flex-col items-center gap-4 border border-[#c8f400]/30 p-5 rounded-2xl'>
      <h1 className='text-xl font-bold text-center'>Ready To Shop</h1>
      <p className='text-white/60'>Explore thousand of products of unbeatable price</p>
      <span 
        className='mt-3 flex w-fit gap-3 px-5 items-center text-black h-20 rounded-2xl text-2xl font-semibold justify-center  bg-[#c8f400] cursor-pointer'
        onClick={()=>{
            setCurrentPage('shop')
        }}
        ><span>Browse Produce</span> <span><MoveRight /></span></span>
    </div>
  )
}

export default ReadyToShop
