import React, { useContext } from 'react'
import { Zap,MoveRight,ShoppingBag } from 'lucide-react'
import { MyStore } from '../../../../Context/MyContext'
const NewArrival = () => {
    const{setCurrentPage}=useContext(MyStore);
  return (
    <div className='p-4'>
            <div className='text-white bg-white/7 p-4 rounded-2xl'>
                <div className='flex mb-4 justify-between'>
                    <span className='flex gap-2'><span className=''><Zap className='text-[#C8F400] fill-[#C8F400]'/></span>New Arrival</span>
                    <span 
                        onClick={()=>{
                            setCurrentPage('shop');
                        }}
                    className='cursor-pointer text-sm flex gap-2 text-[#C8F400]'>
                        See All 
                        <span><MoveRight/></span>
                        </span>
                </div>
                <div className="container flex flex-col gap-4    rounded-xl">
                        <div className='flex justify-between p-3 rounded-xl border border-white/15'>
                            <span className='flex gap-2 text-[#C8F400]'><span><img className='w-10' src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400" alt="" /></span>$599.99</span>
                            <span className='text-amber-300'><ShoppingBag/></span>
                        </div>
                        <div className='flex justify-between p-3 rounded-xl border border-white/15'>
                            <span className='flex gap-2 text-[#C8F400]'><span><img className='w-10' src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400" alt="" /></span>$199.99</span>
                            <span className='text-amber-300'><ShoppingBag/></span>
                        </div>
                        <div className='flex justify-between p-3 rounded-xl border border-white/15'>
                            <span className='flex gap-2 text-[#C8F400]'><span><img className='w-10' src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400" alt="" /></span>$349.99</span>
                            <span className='text-amber-300'><ShoppingBag/></span>
                </div>
                        <div className='flex justify-between p-3 rounded-xl border border-white/15'>
                            <span className='flex gap-2 text-[#C8F400]'><span><img className='w-10' src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400" alt="" /></span>$49.99</span>
                            <span className='text-amber-300'><ShoppingBag/></span>
                        </div>
                        <div className='flex justify-between p-3 rounded-xl border border-white/15'>
                            <span className='flex gap-2 text-[#C8F400]'><span><img className='w-10' src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400" alt="" /></span>$149.99</span>
                            <span className='text-amber-300'><ShoppingBag/></span>
                        </div>
                </div>
            </div>
    </div>
  )
}

export default NewArrival
