import React, { useState } from "react";
import useCart from "../Hooks/useCart";
import { deleteCartItem, editCartQuantity, deleteCart } from "../api/cart";

export default function Cart() {
  const { cartItems } = useCart();
  const [quantity, setQuantity] = useState("");

  return cartItems.length !== 0 ? (
    <>
      <div>
        {cartItems.map((item, index) => {
          return (
            <div className="wrapper">
              <h4 key={`Key: ${index}`} className="itemCard">
                <div>PokeCart:</div>
                <div>
                  Your UserId:{item.userId}
                  <img id={item.id} src={item.imgUrl} />
                </div>
                <div>Total: {item.totalPrice}₽</div>
                <div>Shpping Info: {cartItems[0].shippingAddress}</div>
                {item.orderitems.map((orderitem, index) => {
                  return (
                    <>
                      <p>
                        Item: {orderitem.items.name}
                        <img src={orderitem.items.imgUrl} /> Quantity:
                        {orderitem.quantity}
                        <span> Unit price: {orderitem.items.price}</span>
                      </p>
                      <span>
                        <form
                          onSubmit={async (event) => {
                            event.preventDefault();
                            await editCartQuantity(orderitem.id, quantity);
                            console.log("U MADE IT PAST THE BLOCK");
                          }}
                        >
                          <input
                            type="number"
                            placeholder="Quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                          />
                          <button type="submit">Edit Quantity</button>
                        </form>
                        <button
                          onClick={async (event) => {
                            event.preventDefault();
                            console.log("del button pressed");
                            await deleteCartItem(orderitem.id);
                          }}
                        >
                          Delete Item
                        </button>
                      </span>
                    </>
                  );
                })}
                <span>
                  {/* THIS IS DELETE WHOLE CART BUTTON */}
                  <button
                    onClick={async (event) => {
                      event.preventDefault();
                      console.log(cartItems[0].id, "TRICK TO GRAB CART ID");
                      await deleteCart(cartItems[0].id);
                    }}
                  >
                    Clear Cart
                  </button>
                  {/* THIS BUTTON NEEDS TO ALSO RUN A FUNCTION TO CREATE NEW CART */}
                </span>
              </h4>
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <h1 className="Error">Your cart is currently empty!</h1>
  );
}
