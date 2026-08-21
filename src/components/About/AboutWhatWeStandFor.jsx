import { HeartHandshake, ShieldCheck, Star, Truck } from 'lucide-react'
import React from 'react'

const AboutWhatWeStandFor = () => {
  return (
    <div className=' w-full flex flex-col gap-5'>
      <h1 className='text-2xl font-bold text-center'>What we stand for</h1>
      <div className='h-screen md:h-[45vh] grid gap-4 grid-cols-1 md:grid-cols-2'>
        <div className='border flex gap-5 p-4 items-center rounded-xl hover:border-[#C8F400]'>
            <div className=' bg-[#C8F400]/20 p-3 rounded-xl'><ShieldCheck color='#C8F400' /></div>
            <div className=''>
                <p className='font-bold text-xl'>Trust</p>
                <p className='text-white/50'>We obsess over delivery times so your orders arrive when promised.</p>
            </div>
        </div>
        <div className='border flex gap-5 p-4 items-center rounded-xl hover:border-[#C8F400]'>
            <div className=' bg-[#C8F400]/20 p-3 rounded-xl'><Truck color='#C8F400'/></div>
            <div className=''>
                <p className='font-bold text-xl'>Trust</p>
                <p className='text-white/50'>We obsess over delivery times so your orders arrive when promised.</p>
            </div>
        </div>
        <div className='border flex gap-5 p-4 items-center rounded-xl hover:border-[#C8F400]'>
            <div className=' bg-[#C8F400]/20 p-3 rounded-xl'><HeartHandshake color='#C8F400'/></div>
            <div className=''>
                <p className='font-bold text-xl'>Trust</p>
                <p className='text-white/50'>We obsess over delivery times so your orders arrive when promised.</p>
            </div>
        </div>
        <div className='border flex gap-5 p-4 items-center rounded-xl hover:border-[#C8F400]'>
            <div className=' bg-[#C8F400]/20 p-3 rounded-xl'><Star color='#C8F400'/></div>
            <div className=''>
                <p className='font-bold text-xl'>Trust</p>
                <p className='text-white/50'>We obsess over delivery times so your orders arrive when promised.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutWhatWeStandFor
