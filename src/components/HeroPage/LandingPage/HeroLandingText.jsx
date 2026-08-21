import React, { useContext } from 'react'
import { MoveRight } from 'lucide-react'
import { MyStore } from '../../../Context/MyContext'
const HeroLandingText = () => {
    const{setCurrentPage}=useContext(MyStore)
  return (
    <div className='flex flex-col justify-center md:items-center md:justify-between md:flex-row gap-5  '>
        <div className='flex flex-col gap-5 md:gap-3'>
            <p className='text-[#C8F400]'>
            Good Evening
            </p>
            <h2 
            className="font-heading font-bold text-4xl sm:text-5xl text-white leading-tight">
                Welcome back,<br /> {" "}
                <span className="text-[#C8F400]">
                    UserName!
                </span>
            </h2>
            <p className=' w-5/6 text-white/40'>Discover today's picks — hand-curated products across electronics, fashion, and more.</p>
            <div className='flex flex-col md:flex-row gap-2.5'>
                <span 
                    className='border flex gap-3.5 bg-[#C8F400] text-black cursor-pointer items-center p-3 w-fit font-medium text-sm  rounded-xl'
                      onClick={()=>{
                        setCurrentPage('shop')
                    }}
                    >Shop Now <MoveRight/></span>
                <span 
                    className='border items-center p-3 w-fit text-white/70 text-sm  rounded-xl cursor-pointer'
                    onClick={()=>{
                        setCurrentPage('shop')
                    }}
                    >View All Products</span>
            </div>
        </div>
    <div className='mt-3.5 flex flex-col gap-3'>
        <span className='flex flex-col border items-center p-5 w-fit text-2xl font-bold rounded-xl text-[#C8F400] bg-[#C8F400]/9 border-[#C8F400]/20'>20+ <span className='text-sm font-light text-white/70' >Product Available</span></span>
        <span className='flex flex-col border items-center p-5 w-fit text-2xl font-bold rounded-xl'>Free <span className='text-sm font-light text-white/70'>Delivery on 999+</span> </span>
    </div>
    </div>
  )
}

export default HeroLandingText
