import { ShoppingCartIcon,Check } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { MyStore } from '../../Context/MyContext';

const AllProducts = (props) => { 
  const {cartItem,setCartItem,addToCartOpen, setAddToCartOpen,usersData,setUsersData,currentUser,setCurrentUser} = useContext(MyStore);   
  const {id,image,category,price,productname,rating,totalRating,total}=props;
 
  const addToCartHandle = (idx) => {
    let carts = [...cartItem];

    const result = cartItem.find(e => e.id == idx);

    const user = usersData.find(
        d =>
            d.email === currentUser.email &&
            d.new_password === currentUser.new_password
    );

    if (result) {
        result.total += 1;
        carts = [...cartItem];   // add this
    } else {
        carts = [...cartItem, { ...props, total: 1 }];
        setCartItem(carts);
    }

    user.Cart_Items = [...carts];

    localStorage.setItem(
        'Current-User',
        JSON.stringify(user)
    );

    setCurrentUser(user);

    localStorage.setItem(
        'Users-Data',
        JSON.stringify(usersData)
    );

    setAddToCartOpen(true);
};
   const inCart = cartItem.some((item)=>item.id===id);
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
            {/* ⭐⭐⭐⭐ */}
            {
                rating>4.7&&"⭐⭐⭐⭐⭐" ||
                rating>4.3&&"⭐⭐⭐⭐"||
                rating<=4.3&&"⭐⭐⭐"
                
            } <span>{rating}</span>
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
                className={`${inCart ? 'bg-green-500' : 'bg-[#C8F400]'}  flex items-center  text-black text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl whitespace-nowrap`}

                onClick={()=>{
                  
                   
                    addToCartHandle(id)
                    
                   
                }}
            >
                {
                    inCart?
                   
                    <>
                        <span>Added</span>
                        <span>
                            <Check size={16} />
                        </span>
                    </> 
                    :
                    <>
                        <span>Add</span>
                        <span>
                            <ShoppingCartIcon size={16} />
                        </span>
                    </>
                }
                
            </button>
        </div>
    </div>
  )
}

export default AllProducts
