import React, { useContext, useState } from 'react'
import SignIn from './components/signin/SignIn'
import CreateAccountForm from './components/signin/CreateAccountForm'
import WebPage from './components/HeroPage/WebPage';
import Navbar from './Navbar';
import ShopProducts from './components/Shopping/ShopProducts';
import { MyStore } from './Context/MyContext';
import AddToCart from './components/AddToCart/AddToCart';
import { Check } from 'lucide-react';

const App = () => {
  const {addToCartOpen,setAddToCartOpen,checkOut,currentPage, setCurrentPage} = useContext(MyStore);
  
  const [isLogin, setIsLogin] = useState(true);
  const [signin, setSignin] = useState(false);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 const products = [
  // ELECTRONICS
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    category: "electronic",
    productname: "Laptop",
    rating: 4.5,
    totalrating: 1250,
    price: 59999
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    category: "electronic",
    productname: "Smartphone",
    rating: 4.6,
    totalrating: 2340,
    price: 24999
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "electronic",
    productname: "Wireless Headphones",
    rating: 4.4,
    totalrating: 890,
    price: 3999
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1600086827875-a63b01f1335c",
    category: "electronic",
    productname: "Smart Watch",
    rating: 4.3,
    totalrating: 760,
    price: 2999
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9",
    category: "electronic",
    productname: "Gaming Monitor",
    rating: 4.7,
    totalrating: 540,
    price: 18999
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
    category: "electronic",
    productname: "Tablet",
    rating: 4.5,
    totalrating: 670,
    price: 15999
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
    category: "electronic",
    productname: "Bluetooth Speaker",
    rating: 4.2,
    totalrating: 430,
    price: 2499
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1593642532400-2682810df593",
    category: "electronic",
    productname: "Mechanical Keyboard",
    rating: 4.6,
    totalrating: 380,
    price: 4499
  },

  // CLOTHING
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    category: "clothing",
    productname: "Classic T-Shirt",
    rating: 4.4,
    totalrating: 1540,
    price: 799
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    category: "clothing",
    productname: "Denim Jeans",
    rating: 4.5,
    totalrating: 1120,
    price: 1999
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
    category: "clothing",
    productname: "Casual Shirt",
    rating: 4.3,
    totalrating: 870,
    price: 1299
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
    category: "clothing",
    productname: "Winter Jacket",
    rating: 4.7,
    totalrating: 620,
    price: 3499
  },
  {
    id: 13,
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    category: "clothing",
    productname: "Women's Dress",
    rating: 4.6,
    totalrating: 940,
    price: 2299
  },
  {
    id: 14,
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    category: "clothing",
    productname: "Hoodie",
    rating: 4.5,
    totalrating: 730,
    price: 1599
  },
  {
    id: 15,
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    category: "clothing",
    productname: "Casual Top",
    rating: 4.2,
    totalrating: 510,
    price: 999
  },
  {
    id: 16,
    img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea",
    category: "clothing",
    productname: "Cotton Shorts",
    rating: 4.3,
    totalrating: 390,
    price: 899
  },

  // FURNITURE
  {
    id: 17,
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    category: "furniture",
    productname: "Modern Sofa",
    rating: 4.7,
    totalrating: 450,
    price: 24999
  },
  {
    id: 18,
    img: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f",
    category: "furniture",
    productname: "Comfort Chair",
    rating: 4.5,
    totalrating: 320,
    price: 8999
  },
  {
    id: 19,
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    category: "furniture",
    productname: "Wooden Bed",
    rating: 4.6,
    totalrating: 280,
    price: 29999
  },
  {
    id: 20,
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
    category: "furniture",
    productname: "Dining Table",
    rating: 4.4,
    totalrating: 210,
    price: 15999
  },
  {
    id: 21,
    img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126",
    category: "furniture",
    productname: "Office Chair",
    rating: 4.5,
    totalrating: 580,
    price: 6999
  },
  {
    id: 22,
    img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2",
    category: "furniture",
    productname: "Storage Cabinet",
    rating: 4.2,
    totalrating: 190,
    price: 7499
  },
  {
    id: 23,
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013",
    category: "furniture",
    productname: "Bedside Table",
    rating: 4.3,
    totalrating: 170,
    price: 3999
  },
  {
    id: 24,
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    category: "furniture",
    productname: "Bookshelf",
    rating: 4.6,
    totalrating: 250,
    price: 5999
  },

  // SPORTS
  {
    id: 25,
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    category: "sports",
    productname: "Dumbbell Set",
    rating: 4.7,
    totalrating: 860,
    price: 3999
  },
  {
    id: 26,
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
    category: "sports",
    productname: "Basketball",
    rating: 4.5,
    totalrating: 430,
    price: 1499
  },
  {
    id: 27,
    img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
    category: "sports",
    productname: "Football",
    rating: 4.6,
    totalrating: 720,
    price: 1299
  },
  {
    id: 28,
    img: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6",
    category: "sports",
    productname: "Tennis Racket",
    rating: 4.4,
    totalrating: 310,
    price: 3499
  },
  {
    id: 29,
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
    category: "sports",
    productname: "Yoga Mat",
    rating: 4.5,
    totalrating: 680,
    price: 999
  },
  {
    id: 30,
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    category: "sports",
    productname: "Running Shoes",
    rating: 4.7,
    totalrating: 1450,
    price: 2999
  },
  {
    id: 31,
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
    category: "sports",
    productname: "Resistance Bands",
    rating: 4.3,
    totalrating: 520,
    price: 799
  },
  {
    id: 32,
    img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
    category: "sports",
    productname: "Cricket Bat",
    rating: 4.6,
    totalrating: 390,
    price: 4999
  },

  // ACCESSORIES
  {
    id: 33,
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    category: "accessories",
    productname: "Classic Watch",
    rating: 4.5,
    totalrating: 920,
    price: 4999
  },
  {
    id: 34,
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    category: "accessories",
    productname: "Travel Backpack",
    rating: 4.6,
    totalrating: 840,
    price: 1999
  },
  {
    id: 35,
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    category: "accessories",
    productname: "Sunglasses",
    rating: 4.4,
    totalrating: 650,
    price: 1499
  },
  {
    id: 36,
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    category: "accessories",
    productname: "Leather Handbag",
    rating: 4.7,
    totalrating: 410,
    price: 3499
  },
  {
    id: 37,
    img: "https://images.unsplash.com/photo-1627123424574-724758594e93",
    category: "accessories",
    productname: "Leather Wallet",
    rating: 4.5,
    totalrating: 570,
    price: 999
  },
  {
    id: 38,
    img: "https://images.unsplash.com/photo-1611923134239-b9be5816e23c",
    category: "accessories",
    productname: "Fashion Belt",
    rating: 4.2,
    totalrating: 290,
    price: 699
  },
  {
    id: 39,
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    category: "accessories",
    productname: "Reading Glasses",
    rating: 4.3,
    totalrating: 340,
    price: 899
  },
  {
    id: 40,
    img: "https://images.unsplash.com/photo-1585488434551-9c3a6a5a7e9e",
    category: "accessories",
    productname: "Cap",
    rating: 4.4,
    totalrating: 480,
    price: 599
  },

  // HOME
  {
    id: 41,
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    category: "home",
    productname: "Kitchen Set",
    rating: 4.6,
    totalrating: 430,
    price: 2499
  },
  {
    id: 42,
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    category: "home",
    productname: "Table Lamp",
    rating: 4.5,
    totalrating: 720,
    price: 1299
  },
  {
    id: 43,
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    category: "home",
    productname: "Decorative Vase",
    rating: 4.3,
    totalrating: 280,
    price: 799
  },
  {
    id: 44,
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    category: "home",
    productname: "Wall Clock",
    rating: 4.4,
    totalrating: 390,
    price: 999
  },
  {
    id: 45,
    img: "https://images.unsplash.com/photo-1604014237800-1c9102c219da",
    category: "home",
    productname: "Floor Lamp",
    rating: 4.6,
    totalrating: 310,
    price: 2499
  },
  {
    id: 46,
    img: "https://images.unsplash.com/photo-1583845112203-454c2e96f0b4",
    category: "home",
    productname: "Cushion Set",
    rating: 4.5,
    totalrating: 510,
    price: 899
  },
  {
    id: 47,
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013",
    category: "home",
    productname: "Home Decor",
    rating: 4.2,
    totalrating: 230,
    price: 1599
  },
  {
    id: 48,
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    category: "home",
    productname: "Desk Organizer",
    rating: 4.4,
    totalrating: 350,
    price: 699
  }
];
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
        
        
        return <div className='text-black'>
          'I am about'
        </div>
      }
      if(currentPage==='logout'){
        return <SignIn/>
      }
  }
  return (
    <div className='bg-black'>    
        {signin? 
          isLogin?<SignIn setIsLogin={setIsLogin}/>:<CreateAccountForm setIsLogin={setIsLogin}/>
              :
          <div>
          <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
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
