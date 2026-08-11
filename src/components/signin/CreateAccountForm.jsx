import React from 'react'
import Banner from '../Logo/Banner'
import{Mail,Lock,User,Eye,MoveRight}from 'lucide-react'
import InputComponent from './InputComponent'
const CreateAccountForm = ({setIsLogin}) => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center bg-black px-5">
        <Banner/>
       <div className="w-full max-w-md mx-auto border border-white/20 rounded-3xl p-8 bg-[#121212] text-white shadow-xl">

  {/* Heading */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold">Create <br />Account</h2>
                <p className="text-gray-400 mt-2">
               Join SkyMart and start shopping
                </p>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-5 relative">              
               <InputComponent
                    icon={User} type='text' placeholder='Enter Your Name'/>
                <InputComponent 
                    icon={Mail} type='email' placeholder='Email Address'/>
                <InputComponent 
                    icon={Lock} type='password'  placeholder='New Password'extra={Eye}/>
                <InputComponent 
                    icon={Lock} type='password'  placeholder='New Password (Minimum 6 character)'extra={Eye}/>

                <button
                className="w-full rounded-xl bg-[#C8F400] py-3 font-semibold text-black transition hover:scale-[1.02] hover:bg-lime-300 active:scale-95 relative"
                >
                Create Account {<MoveRight className='absolute top-1/3 right-5'/>}
                </button>

            </form>

            {/* Footer */}
            <p className="mt-6 text-center text-sm text-gray-400">
                Already have an account?{" "}
                <span className="cursor-pointer font-semibold text-[#C8F400] hover:underline"
                    onClick={()=>{setIsLogin(true)}}
                >
                Login
                </span>
            </p>

        </div>
    </div>
  )
}

export default CreateAccountForm
