import React from 'react'
import{Mail,Lock}from 'lucide-react'
const SignForm = ({setIsLogin}) => {
  
  return (
    <div className="w-full max-w-md mx-auto border border-white/20 rounded-3xl p-8 bg-[#121212] text-white shadow-xl">

  {/* Heading */}
  <div className="mb-8">
    <h2 className="text-3xl font-bold">Sign In</h2>
    <p className="text-gray-400 mt-2">
      Enter your credentials to continue
    </p>
  </div>

  {/* Form */}
  <form className="flex flex-col gap-5 relative">
      <Mail className="absolute left-2 top-1/7 -translate-y-1/2 text-gray-400 w-4 h-4" />
       <Lock className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

    <input
      type="email"
      placeholder=" Email Address"
      className="w-full rounded-xl border border-gray-600 bg-transparent px-7 py-3 outline-none transition focus:border-[#C8F400] focus:ring-2 focus:ring-[#C8F400]/30"
    />

    <input
      type="password"
      placeholder="Password"
      className="w-full rounded-xl border border-gray-600 bg-transparent px-7 py-3 outline-none transition focus:border-[#C8F400] focus:ring-2 focus:ring-[#C8F400]/30"
    />

    <button
      className="w-full rounded-xl bg-[#C8F400] py-3 font-semibold text-black transition hover:scale-[1.02] hover:bg-lime-300 active:scale-95"
    >
      Sign In
    </button>

  </form>

  {/* Footer */}
  <p className="mt-6 text-center text-sm text-gray-400">
    Don't have an account?{" "}
    <span className="cursor-pointer font-semibold text-[#C8F400] hover:underline"
    onClick={()=>{setIsLogin(false)}}
    >
      Create One
    </span>
  </p>

    </div>
  )
}

export default SignForm
