import { useContext } from "react";
import cartContext from "../Context/CartContext";

const useCart = () => {
  const { cartItems, setCartItems } = useContext(cartContext);

  return { cartItems, setCartItems };
};

export default useCart;
