import { ShoppingCartIcon } from 'lucide-react';
import React, { useContext } from 'react'
import { MyStore } from '../../Context/MyContext';

const AllProducts = (props) => { 
  const {cartItem,setCartItem,addToCartOpen, setAddToCartOpen} = useContext(MyStore);   
  const {id,image,category,price,productname,rating,totalRating}=props;

   const  addToCartHandle=(idx)=>{ 
   const result = (cartItem.find(e=>e.id==idx));
   if(result){
    result.total+=1;
   }
   else{
    setCartItem([...cartItem, {...props, total:1}])
   }
    setAddToCartOpen(true)

    console.log(result);
   }
  return (
    <div className=' bg-white/5 border relative border-white/10 rounded-2xl overflow-hidden w-full'>
        <span className='absolute bg-black/80 px-3 py-1 rounded-2xl left-2 top-2 text-xs z-10'>
            {category}
        </span>

        <div className='bg-white p-3 sm:p-4 md:p-5'>
            <img
            src={image}
            alt=""
            className='w-full aspect-square object-contain'
            />
        </div>

        <div className='flex flex-col px-3 sm:px-4 md:px-5 py-3 gap-2'>
            <span className='text-xs sm:text-sm text-white/40'>
           {category}
            </span>

            <span className='font-bold text-sm sm:text-base truncate'>
            {productname}
            </span>

            <span className='text-xs'>
            ⭐⭐⭐⭐
            <span className='ml-1 sm:ml-2 text-white/40'>
                ({totalRating})
            </span>
            </span>
        </div>

        <hr />

        <div className='flex justify-between mt-3 items-center pb-2 px-2 sm:px-3 gap-2 sm:gap-4'>
            <span className='text-[#C8F400] font-bold flex text-sm sm:text-base whitespace-nowrap'>
            <span>₹</span> {price}
            </span>

            <button 
                className='flex items-center bg-[#C8F400] text-black text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl whitespace-nowrap'

                onClick={()=>{
                  
                   
                    addToCartHandle(id)
                    
                   
                }}
            >
                <span>Add</span>
                <span>
                    <ShoppingCartIcon size={16} />
                </span>
            </button>
        </div>
    </div>
  )
}

export default AllProducts
