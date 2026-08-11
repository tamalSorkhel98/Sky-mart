import { createContext, useState } from "react";

 export const MyStore = createContext();
 export const ContextProvider = ({children})=>{
    const [addToCartOpen, setAddToCartOpen] = useState(false);
    const [cartItem, setCartItem] = useState([])
    
    return <MyStore.Provider value={{
        addToCartOpen,setAddToCartOpen,cartItem,setCartItem}}>{children}</MyStore.Provider>
 }
