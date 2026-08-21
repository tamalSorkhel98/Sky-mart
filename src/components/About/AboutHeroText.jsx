import React from 'react'
import { Zap } from 'lucide-react'
const AboutHeroText = () => {
  return (
    <div className='flex flex-col gap-8 justify-center items-center'>
      <span 
      className='flex justify-center items-center w-16 h-16 rounded-3xl
      bg-[#C8F400]'><Zap fill='black ' color='black'/></span>
      <h1 
      className='text-4xl text-center md:text-5xl font-bold w-30 md:w-fit'
      >About <span className='text-[#C8F400]'>SkyMart</span></h1>
      <p className='text-white/60 text-lg w-[50vw]  text-center md:w-[80vw]'>SkyMart is a next-generation e-commerce platform built to make online shopping fast, fair, and enjoyable — for everyone.</p>
    </div>
  )
}

export default AboutHeroText
