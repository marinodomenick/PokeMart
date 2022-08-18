import React, { useState, useEffect } from "react";
// import useAuth from "../Hooks/useAuth";
import { fetchAllCartItems } from "../api/cart";
import CartContext from "../Context/CartContext";
// import { useParams } from "react-router-dom";
import { getMe } from "../axios-services";

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // let id = user.id;
  // console.log(id, "needs to work id ");
  // const { id } = useParams();
  // console.log(id, "we need a user here from the auth");

  //PASSING PASSWORD NEAR FRONT END? SEEMS SKETCHY...?WETFGIJSDNGFLKJsGS JUST WORK
  useEffect(() => {
    const getAllCartItems = async () => {
      const user = await getMe();
      console.log(user, "user stuff");
      console.log(user.id, "the id we are passing in");
      const cartItems = await fetchAllCartItems(user.id);
      console.log(cartItems, "from the cart provider");
      setCartItems(cartItems);
    };
    getAllCartItems();
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
