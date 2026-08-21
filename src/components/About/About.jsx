import React from 'react'
import AboutHeroText from './AboutHeroText'
import { Package,Users,Star,Truck }  from 'lucide-react'
import AboutOurStory from './AboutOurStory'
import AboutWhatWeStandFor from './AboutWhatWeStandFor'
import AboutOurTeam from './AboutOurTeam'
import ReadyToShop from './ReadyToShop'
const About = () => {
  return (
    <div className='text-white p-5 flex flex-col items-center justify-center gap-10'>
      <AboutHeroText/>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5 w-[80vw]  p-3'>
        <div className='flex flex-col border rounded-2xl items-center gap-2.5 py-4'>
            <span><Package color='#C8F400'/></span>
            <span className='text-2xl font-bold'>20K+</span>
            <span className='text-white/30 text-xs'>Products</span>
        </div>
        <div className='flex flex-col border rounded-2xl items-center gap-2.5 py-4' >
            <span><Users  color='#C8F400'/></span>
            <span className='text-2xl font-bold'>50K+</span>
            <span className='text-white/30 text-xs'>Happy Customer</span>
        </div>
        <div className='flex flex-col border rounded-2xl items-center gap-2.5 py-4'>
            <span><Star color='#C8F400'/></span>
            <span className='text-2xl font-bold'>4.5</span>
            <span className='text-white/30 text-xs'>Avg. Rating</span>
        </div>
        <div className='flex flex-col border rounded-2xl items-center gap-2.5 py-4'>
            <span><Truck color='#C8F400'/></span>
            <span className='text-2xl font-bold'>99%</span>
            <span className='text-white/30 text-xs'>On-time Delivery</span>
        </div>
      </div>
      <div className=' w-[80vw]'>
        <AboutOurStory/>
      </div>
      <div className='w-[80vw]'>
        <AboutWhatWeStandFor/>
      </div>
      <div className='w-[80vw]'>
        <AboutOurTeam/>
      </div>
      <div className='w-[80vw]'><ReadyToShop/></div>
    </div>
  )
}

export default About
