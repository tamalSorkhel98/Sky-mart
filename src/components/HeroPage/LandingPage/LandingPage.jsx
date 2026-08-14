import React, { useContext } from 'react'
import Navbar from '../../../Navbar'
import HeroLandingText from './HeroLandingText'
import { MyStore } from '../../../Context/MyContext'

const LandingPage = () => {
  const{checkOut}=useContext(MyStore)
return (
  <div className="h-fit  bg-black text-white p-3 lg:p-6">
    

    <div className="mt-15  bg-white/6 flex flex-col rounded-2xl border border-white/20 p-10 lg:p-8 min-h-[40vh] md:h-[60vh]   lg:justify-center">
      <HeroLandingText />
     
    </div>
  </div>
);
}

export default LandingPage
