import React, { useContext, useEffect, useState } from 'react'
import SignIn from './components/signin/SignIn'
import CreateAccountForm from './components/signin/CreateAccountForm'
import WebPage from './components/HeroPage/WebPage';
import Navbar from './Navbar';
import ShopProducts from './components/Shopping/ShopProducts';
import { MyStore } from './Context/MyContext';
import AddToCart from './components/AddToCart/AddToCart';
import { Check } from 'lucide-react';
import About from './components/About/About';

const App = () => {
  const {isLogin, setIsLogin,signin, setSignin,addToCartOpen,setAddToCartOpen,checkOut,currentPage, setCurrentPage,products} = useContext(MyStore);
  
  
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);


 const showPage=()=>{
      if(currentPage==='home'){
        if(addToCartOpen){
          return(
            <div className='relative'> 
              <div className='blur-md'><WebPage/></div>
              <AddToCart/>
            </div>
          )
          
        }
       
        return <div><WebPage/></div>
      }

      if(currentPage==='shop'){
          if(addToCartOpen){
          return(
            <div className='relative'> 
              <div className='blur-md'><ShopProducts products={products}/></div>
              <AddToCart/>
            </div>
          )
          
        }

        return <ShopProducts products={products} />
      }
      if(currentPage==='about'){
        
        
        return <About/>
      }
      if(currentPage==='logout'){
        return <SignIn/>
      }
  }
  useEffect(()=>{
    showPage();
  },[currentPage])
  showPage();
  return (
    <div className='bg-black'>    
        {signin? 
          isLogin?<SignIn setIsLogin={setIsLogin}/>:<CreateAccountForm setIsLogin={setIsLogin}/>
              :
          <div>
          <Navbar  setSignin={ setSignin} setCurrentPage={setCurrentPage} currentPage={currentPage} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
          {
            showPage()
          }
         <div>
         
           { checkOut&&
              <p className=' flex gap-3 p-2 rounded-2xl fixed top-[90vh] right-10 bg-gray-950 text-white'>
                <span className='w-7 h-7 rounded-full p-1 bg-[#C8F400] border flex justify-center items-center text-black'><Check/></span>Ordered placed</p>          
           }
         
         </div>
          
          </div>
          
        } 

    </div>
  )
}

export default App
