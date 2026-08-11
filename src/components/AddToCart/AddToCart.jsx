import React, { useContext } from 'react'
import {X,ShoppingBag} from 'lucide-react'
import { MyStore } from '../../Context/MyContext';
import CartItems from './CartItems';
import { MoveRight } from 'lucide-react';

const AddToCart = () => {
    const {setAddToCartOpen,addToCartOpen,cartItem,setCartItem}=useContext(MyStore);  
     const totalPrice = cartItem.reduce((acc,val)=>{
        return acc+(val.price*val.total)
    },0)
    const totalItem = cartItem.reduce((acc,val)=>{
        return acc+(val.total)
    },0)
    console.log(totalPrice); 
  return (
   <div className='bg-black fixed top-0 z-20 right-0 w-full h-screen  md:w-[50vw]  text-white flex flex-col'>
      <div className={`px-10 py-4 text-white flex justify-between items-center mb-5`}>
      <div className='flex gap-3'>
        <span className='text-[#C8f400] font-bold'><ShoppingBag /></span>
        <span className='font-bold'>Cart</span>
        <span className='text-[#C8F400] bg-[#c7f4003d] px-2 rounded-xl'>{totalItem} <span>item</span></span>
      </div>
      <p
       className='text-black/9 text-2xl font-bold'
       onClick={()=>{
        setAddToCartOpen(false)
       }}
      ><X className='text-white'/></p>
      </div>
      <hr />
      <div className='p-3 sm:p-5 flex-1 overflow-y-auto min-h-0'>
        <CartItems/>
      </div>
      <hr />
      <div className='p-5 flex flex-col gap-7'>
        <p className='flex w-full justify-between'><span className='text-xl text-white/50'>Total</span> <span className='text-2xl font-bold'>{totalPrice}</span></p>
        <button 
        className='flex justify-center gap-4 items-center bg-[#C8F400] text-black font-semibold text-xl w-full p-4 rounded-2xl'>
          <span>CheckOut</span>
          <span><MoveRight/></span>
        </button>
       <p className='text-center text-white/50'> 
       <span
       className='cursor-pointer'
        onClick={()=>{
          setCartItem([])
        }}
       >
        clear cart
        </span>
       </p>
      </div>
   </div>
  )
}

export default AddToCart
