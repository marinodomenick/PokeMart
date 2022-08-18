import React from "react";
import useCart from "../Hooks/useCart";

export default function Cart() {
  const { cartItems } = useCart();
  console.log(cartItems, "big win here");
  console.log(cartItems);

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
                    </>
                  );
                })}
                <span>
                  <button>Edit</button> <button>Delete</button>
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
