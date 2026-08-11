import React, { useContext } from 'react'
import Banner from './components/Logo/Banner'
import{ShoppingCart,LogOut,TextAlignJustify}from 'lucide-react'
import { MyStore } from './Context/MyContext'

const Navbar = ({setCurrentPage,currentPage,setIsMenuOpen,isMenuOpen}) => {
  const {addToCartOpen, setAddToCartOpen} = useContext(MyStore); 
  return (
 <div className=' sticky z-20 bg-black text-white  text-[14px] top-0'>
     <div className='flex sticky z-20 bg-black text-white  items-center justify-between text-[14px] top-0 h-[10vh] left-0 px-6 md:px-8 lg:px-30  w-full'>
      <div><Banner/></div>
      <div className='hidden md:flex gap-2'>
        <span className={`cursor-pointer ${currentPage==='home'?'text-[#C8F400] cursor-pointer':'' }`} onClick={()=>{setCurrentPage('home')}}>Home</span>
        <span className={`cursor-pointer ${currentPage==='shop'?'text-[#C8F400] cursor-pointer':'' }`} onClick={()=>{setCurrentPage('shop')}}>Shop</span>
        <span className={`cursor-pointer ${currentPage==='about'?'text-[#C8F400] cursor-pointer':'' }`} onClick={()=>{setCurrentPage('about')}}>About</span>
      </div>
      <div className='flex gap-3'>
        <span className='hidden md:flex bg-white/6 border-[.5px] tems-center gap-2 border-[#e5e7eb] px-2.5 py-1 rounded-md'><span className='bg-[#C8F400] text-black px-3 py-1 rounded'>U</span>User Name</span>

        <span 
          className='border-[.5px] border-white/30 px-2.5 py-1    rounded-md'
          onClick={()=>{
            console.log('cart');
            
            setAddToCartOpen(true)
          }}
        ><ShoppingCart/></span>
        <span className='border-[.5px] border-white/30 px-2.5 py-1 rounded-md'><LogOut/></span>
        <span className='cursor-pointer border-[.5px] border-white/30 px-2.5 py-1 md:hidden rounded-md'
        onClick={()=>{
          setIsMenuOpen((prev)=>!prev)
        }}
        >
        {
          isMenuOpen?'X':<TextAlignJustify/>
        }
        </span>
      </div>
  
    </div>
    <div className={`${isMenuOpen ? 'flex':'hidden'}  w-screen bg-[#040404] z-50  px-6 py-3  flex-col gap-10 border-t-2`}>
        <span className={`cursor-pointer ${currentPage==='home'?'text-[#C8F400] cursor-pointer':'' }`}
          onClick={()=>{
            setCurrentPage('home');
             setAddToCartOpen(false)
            setIsMenuOpen(false);
          }}
        >Home</span>
        <span className={`cursor-pointer ${currentPage==='shop'?'text-[#C8F400] cursor-pointer':'' }`}
          onClick={()=>{setCurrentPage('shop')
            setIsMenuOpen(false);
             setAddToCartOpen(false)
          }}
        >Shop</span>
        <span className={`cursor-pointer ${currentPage==='about'?'text-[#C8F400] cursor-pointer':'' }`}
          onClick={()=>{setCurrentPage('about')
            setIsMenuOpen(false);
             setAddToCartOpen(false)
          }}
        >About</span>
        <span className={`cursor-pointer ${currentPage==='logout'?'text-[#C8F400] cursor-pointer':'' }`}
          onClick={()=>{setCurrentPage('logout')
            setIsMenuOpen(false);
             setAddToCartOpen(false)
          }}
        >Logout</span>
      </div>
 </div>
  )
}
    
export default Navbar
