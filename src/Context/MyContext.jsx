import { createContext, useState } from "react";

 export const MyStore = createContext();
 export const ContextProvider = ({children})=>{
    const [addToCartOpen, setAddToCartOpen] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [cartItem, setCartItem] = useState([])
    const [checkOut, setCheckOut] = useState(false)
    const [currentPage, setCurrentPage] = useState('home');
    return <MyStore.Provider value={{
        currentPage, setCurrentPage,addToCartOpen,setAddToCartOpen,cartItem,setCartItem,checkOut, setCheckOut,filterProducts, setFilterProducts}}>{children}</MyStore.Provider>
 }
