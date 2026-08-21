import React from 'react'

const AboutOurTeam = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center'>
      <h1 className='text-center font-bold text-2xl'>Meet the  team</h1>
      <div className='  grid grid-cols-2 gap-3 md:grid-cols-4  w-[90%] '>
        <div className='border rounded-xl flex flex-col   items-center justify-center gap-2 p-4'>
            <p className='bg-[#C8F400]  text-2xl font-bold  h-15 w-15 rounded-xl flex items-center justify-center text-black '>A</p>
            <span className='text-xl text-white/80'>Aryan Sing</span>
            <span className='text-sm text-white/50'>Founder & CEO</span>
        </div>
        <div className='border rounded-xl flex flex-col items-center justify-center gap-2  p-4'>
            <p className='bg-[#C8F400]  text-2xl font-bold  h-15 w-15 rounded-xl flex items-center justify-center text-black '>P</p>
            <span className='text-xl text-white/80'>Priya Mehta</span>
            <span className='text-sm text-white/50'>Head of product</span>
        </div>
        <div className='border rounded-xl flex flex-col items-center justify-center gap-2  p-4'>
            <p className='bg-[#C8F400]  text-2xl font-bold  h-15 w-15 rounded-xl flex items-center justify-center text-black '>R</p>
            <span className='text-xl text-white/80'>Rohan Verma</span>
            <span className='text-sm text-white/50'>Lead Engineer</span>
        </div>
        <div className='border rounded-xl flex flex-col items-center justify-center gap-2  p-4'>
            <p className='bg-[#C8F400]  text-2xl font-bold  h-15 w-15 rounded-xl flex items-center justify-center text-black '>S</p>
            <span className='text-xl text-white/80'>Sneha Kapoor</span>
            <span className='text-sm text-white/50'>Design Director</span>
        </div>
      </div>
    </div>
  )
}

export default AboutOurTeam
