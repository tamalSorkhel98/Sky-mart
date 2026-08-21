import React from 'react'
import { useForm } from 'react-hook-form'

const InputComponent = ({ icon: Icon, type, placeholder,extra: Eye,...register }) => {

  
  return (
    <div className='relative'>
      <Icon
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />
        {
            Eye ? (
            <Eye
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
        ) : null
        }
      <input
        {...register}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border p-3 pl-10 pr-10
        focus:border-[#C8F400] focus:ring-2 focus:ring-[#C8F400]/30
             transition-all duration-500"
      />
    </div>
  )
}

export default InputComponent
