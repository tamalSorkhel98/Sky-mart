import React from 'react'
import Banner from '../Logo/Banner'
import SignForm from './SignForm'
import SignHeroText from './SignHeroText'

const SignIn = ({setIsLogin}) => {
  return (
    <div className="relative min-h-screen flex flex-col gap-10 items-center justify-center bg-black px-5">
  {/* Login Card */}
      <div className='lg:hidden'><Banner/></div>
      <div className='flex gap-2 lg:h-full w-screen'>
        <SignHeroText/>
        <div className='w-screen p-3 lg:flex justify-center items-center  lg:w-1/2'>
          <SignForm setIsLogin={setIsLogin}/>
        </div>
        
      </div>
    </div>
  )
}

export default SignIn
