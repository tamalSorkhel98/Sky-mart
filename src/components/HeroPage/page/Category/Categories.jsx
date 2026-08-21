import React, { useContext } from 'react'
import { MyStore } from '../../../../Context/MyContext'

const Categories = () => {
  const{products,filter, setFilter, setCurrentPage}=useContext(MyStore);
  
  const setCategories=(category)=>{
    let count=0;
    products.forEach(element => {
      if(element.category===category){
        count+=1;
      }    
    });
    return count;
  }
  return (
    <div className='grid grid-cols-2 p-3 md:grid-cols-4 gap-4 text-black justify-items-center place-items-center   mt-4'>
      <div 
        className='flex w-full cursor-pointer flex-col aspect-square border rounded-2xl bg-white items-center justify-center max-w-50 '
        onClick={()=>{
          setFilter({...filter,categories:'electronic'});
          setCurrentPage('shop');
        }}
      >
        <span className='text-2xl md:text-3xl'>💻</span>
        <span>Electronics</span>
        <span className='text-sm text-black/60'>{setCategories('electronic')}</span>
      </div>
      <div 
        className='flex w-full cursor-pointer flex-col border aspect-square rounded-2xl bg-white items-center justify-center max-w-50  '
         onClick={()=>{
          setFilter({...filter,categories:'clothing'});
          setCurrentPage('shop');
        }}
        >
        <span className='text-2xl md:text-3xl '>📦</span>
        <span>Clothing</span>
        <span className='text-sm text-black/60'>{setCategories('clothing')}</span>
      </div>
      <div 
        className='flex w-full cursor-pointer flex-col border aspect-square rounded-2xl bg-white items-center justify-center max-w-50  '
         onClick={()=>{
          setFilter({...filter,categories:'furniture'});
          setCurrentPage('shop');
        }}
        >
        <span className='text-2xl md:text-3xl'>📦</span>
        <span>Furniture</span>
        <span className='text-sm text-black/60'>{setCategories('furniture')}</span>
      </div>
      <div 
        className='flex w-full cursor-pointer flex-col border aspect-square rounded-2xl bg-white items-center justify-center max-w-50  '
         onClick={()=>{
          setFilter({...filter,categories:'home'});
          setCurrentPage('shop');
        }}
        >
        <span className='text-2xl md:text-3xl'>📦</span>
        <span>Home</span>
        <span className='text-sm text-black/60'>{setCategories('home')}</span>
      </div>
      <div 
        className='flex w-full cursor-pointer flex-col border aspect-square rounded-2xl bg-white items-center justify-center max-w-50  '
         onClick={()=>{
          setFilter({...filter,categories:'sports'});
          setCurrentPage('shop');
        }}
        >
        <span className='text-2xl md:text-3xl'>📦</span>
        <span>Sports</span>
        <span className='text-sm text-black/60'>{setCategories('sports')}</span>
      </div>
      <div 
        className='flex w-full cursor-pointer flex-col border aspect-square rounded-2xl bg-white items-center justify-center max-w-50  '
         onClick={()=>{
          setFilter({...filter,categories:'accessories'});
          setCurrentPage('shop');
        }}
        >
        <span className='text-2xl md:text-3xl'>📦</span>
        <span>Accessories</span>
        <span className='text-sm text-black/60'>{setCategories('accessories')}</span>
      </div>
    </div>
  )
}

export default Categories
