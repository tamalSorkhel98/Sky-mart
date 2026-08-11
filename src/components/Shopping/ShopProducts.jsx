import { Filter } from 'lucide-react'
import React from 'react'
import FilterBox from './FilterBox'
import AllProducts from './AllProducts'

const ShopProducts = ({products}) => {
  
  
  return (
    <div className=' text-white flex flex-col gap-5 px-6 py-5 mt-3'>
      <div>
        <h1 className='text-2xl font-bold mb-3'>All Products</h1>
      <p className='text-white/40'><span>50</span> products found</p>
      </div>
      <div className='md:flex justify-center md:mb-5'>
        <FilterBox/>
      </div>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4'>
        {
          products.map((p)=>{        
            return (<AllProducts key={p.id} id={p.id} image={p.img} category={p.category}  price={p.price} productname={p.productname} rating={p.rating} totalRating={p.totalrating} />)
          })
        }
      </div>
    </div>
  )
}

export default ShopProducts
