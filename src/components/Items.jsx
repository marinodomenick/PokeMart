import React, { useState } from "react";
import useItems from "../Hooks/useItems";
import useCart from "../Hooks/useCart";
// import {useItems, useCart} from "../Hooks"
import "../style/index.css";
import { addCartItem } from "../api/cart";

export default function Items() {
  const { cartItems } = useCart();
  const { items } = useItems();
  const [quantity, setQuantity] = useState("");
  console.log(cartItems, "does cart make it to items?");
  console.log(items, "data to play with on this page");
  const itemsToDisplay = items.map((item, i) => {
    return (
      <div className="wrapper">
        <div className="itemCard" key={`Key ${i}`} id={item.id}>
          {/* CURRENTLY FOR FETCHSINGLEITEM(E.TARGET.ID) TO WORK EACH CHILD NEEDS THIS ID */}
          <h4 id={item.id}>{item.id}</h4>
          <span>
            <img id={item.id} src={item.imgUrl} />
          </span>
          <h4 id={item.id}>{item.name}</h4>
          <h5 id={item.id}>{item.price}₽</h5>
          <h5 id={item.id}>Stock: {item.stock}</h5>
          <h6 id={item.id}>Floor: {item.floorId}</h6>
          <h6 id={item.id}>Type: {item.type}</h6>
          <a href={`/items/${item.id}`}>View Item</a>
          <span>
            <form
              onSubmit={async (event) => {
                event.preventDefault();
                console.log(item.id, "the target");

                console.log(cartItems[0].id, "use this??");
                //i think we can use cartitems[0] as a user will always
                //have one cart that isFulfilled=false
                await addCartItem(item.id, cartItems[0].id, quantity);
                console.log("past the block");
              }}
            >
              <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button type="submit">Add to Cart</button>
            </form>
          </span>
        </div>
      </div>
    );
  });
  console.log("The Items component has rendered");
  return <div>{itemsToDisplay}</div>;
}
