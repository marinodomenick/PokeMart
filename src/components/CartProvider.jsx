import React, { useState, useEffect } from "react";
import useAuth from "../Hooks/useAuth";
import { fetchAllCartItems } from "../api/cart";
import CartContext from "../Context/CartContext";
// import { useParams } from "react-router-dom";
import { getMe } from "../axios-services";

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useAuth();
  console.log(user, "THIS IS THE USER");
  console.log(user.id, "ARE YOU HEREW");
  // let id = user.id;
  // console.log(id, "needs to work id ");
  // const { id } = useParams();
  // console.log(id, "we need a user here from the auth");

  //PASSING PASSWORD NEAR FRONT END? SEEMS SKETCHY...?WETFGIJSDNGFLKJsGS JUST WORK
  useEffect(() => {
    const getAllCartItems = async () => {
      console.log(user.id, "HEY HEY HEY");
      const cartItems = await fetchAllCartItems(user.id);

      //console.log(cartItems, "from the cart provider");
      setCartItems(cartItems);
    };
    getAllCartItems();
  }, [user]);
  console.log(cartItems, "want this");
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
