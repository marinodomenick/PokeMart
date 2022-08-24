import React, { useState, useEffect } from "react";
import useAuth from "../Hooks/useAuth";
import { fetchAllCartItems } from "../axios-services/index";
import CartContext from "../Context/CartContext";

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const getAllCartItems = async () => {
      const cartItems = await fetchAllCartItems(user.id);

      setCartItems(cartItems);
    };
    getAllCartItems();
  }, [user]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
