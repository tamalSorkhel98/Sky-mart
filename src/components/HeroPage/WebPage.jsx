import React, { useState } from 'react'
import LandingPage from './LandingPage/LandingPage'
import Page2 from './page/Page2'
import Category from './page/Category/Category'
import TopRateProduct from './page/Top-rated/TopRateProduct'
import NewArrival from './page/New arrivals/NewArrival'
import WhyUs from './page/Why-us/WhyUs'
import Footer from './page/Footer/Footer'
import Navbar from '../../Navbar'


const WebPage = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='bg-black p-3 min-h-screen  md:p-5 lg:px-25 '>
      <div >
        <LandingPage/>
        <Page2/>
        <Category/>
        <div className='lg:flex '>
          <div className='flex-1'><TopRateProduct/></div>
          <div className='flex-1'><NewArrival/></div>
        </div>
        <WhyUs/>
        <Footer/>
      </div>
      <div className="shop">

      </div>
    </div>
  )
}

export default WebPage
