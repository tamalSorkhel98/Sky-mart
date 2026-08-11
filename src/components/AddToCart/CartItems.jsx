import React, { useContext } from 'react'
import{Minus,Plus, Trash}from 'lucide-react'
import { MyStore } from '../../Context/MyContext'
const CartItems = () => {
    const {cartItem,setCartItem}=useContext(MyStore)
   const singlePrice = cartItem.filter((i)=>{
    
   })
    
  return (
    <div className="p-3 sm:p-5 flex flex-col  gap-3 ">
       { 
       
       cartItem.length!==0?
        cartItem.map((item)=>{
            return(
                <div key={item.id} className="border rounded-2xl p-3 flex gap-3 sm:gap-4 w-full">
            
                    {/* Product Image */}
                    <div className="border h-20 w-20 sm:h-24 sm:w-24 shrink-0 rounded-xl overflow-hidden">
                    <img
                        src={item.image}
                        alt="Product"
                        className="w-full h-full object-cover"
                    />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                    
                    {/* Product Name */}
                    <span className="font-medium truncate">
                        {item.productname}
                    </span>

                    {/* Price */}
                    <div>
                        <span className="text-[#C8F400] text-sm sm:text-base">
                        ₹{item.price*item.total}
                        </span>

                        <p className="text-white/40 text-xs sm:text-sm">
                        <span> ₹{item.price}</span> each
                        </p>
                    </div>

                    {/* Quantity + Delete */}
                    <div className="flex items-center justify-between gap-2 mt-auto">
                        
                        {/* Quantity */}
                        <div className="flex items-center gap-2 sm:gap-3">
                        <button 
                        onClick={()=>{
                            item.total!==1?
                            setCartItem(
                                cartItem.map((c)=>{
                                   return c.id===item.id ?
                                    {...c,total:item.total-=1}:c
                                })
                            ):setCartItem(
                                cartItem.filter((c)=>{
                                    return c.id!==item.id
                                })
                                
                            )
                        }}
                        className="p-1 sm:p-1.5 border rounded-xl border-white/40">
                            <Minus size={16} />
                        </button>

                        <span className="text-sm sm:text-base">
                            {item.total}
                        </span>

                        <button 
                            onClick={()=>{
                                setCartItem(
                                    cartItem.map((c)=>{
                                       return c.id===item.id?
                                       {...c,total:item.total+=1} :c
                                    })
                                )
                            }}
                        
                        className="p-1 sm:p-1.5 border rounded-xl border-white/40">
                            <Plus size={16} />
                        </button>
                        </div>

                        {/* Delete */}
                        <button
                        onClick={()=>{
                            setCartItem(
                                cartItem.filter((c)=>{
                                    return c.id!==item.id
                                })
                            )
                        }}
                        className="p-1">
                        <Trash className="text-red-700" size={18} />
                        </button>

                    </div>
            </div>
        </div>
            )
        })
        :
        'no items found'
    }
    </div>
  )
}

export default CartItems
