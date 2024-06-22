'use client'
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export default function Dataprovider({children}) {

  const [cart, setCart] = useState([]);
  const [countCart, setCountCart] = useState(0);
  const [isInCart, setIsInCart] = useState(false);
  
  return (
    <CartContext.Provider value={{ cart, setCart, setCountCart, countCart, isInCart, setIsInCart}}>
      {children}
    </CartContext.Provider>
  )
}
