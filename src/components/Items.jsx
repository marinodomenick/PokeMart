import React, { useState } from "react";
import useItems from "../Hooks/useItems";
import useCart from "../Hooks/useCart";
// import {useItems, useCart} from "../Hooks"
import "../style/index.css";
import { addCartItem } from "../axios-services";
import ItemCard from "./ItemCard";

export default function Items() {
  const { items, page, setPage } = useItems();
  const itemsToDisplay = items.map((item, i) => {
    return (
      <div>
        <ItemCard key={`Key: ${i}`} item={item} />
      </div>
    );
  });

  return (
    <div>
      {itemsToDisplay}
      <div className="navButtons">
      <button className="navButton"
        onClick={(e) => {
          setPage(() => page - 1);
        }}
        disabled={page === 1}
      >
        Previous
      </button>
      <button className="navButton"
        onClick={(e) => {
          setPage(() => page + 1);
        }}
        disabled={items.length < 30}
      >
        Next
      </button>
      </div>
    </div>
  );
}

{/* <span>
<img className="itemImg" id={item.id} src={item.imgUrl} />
</span>
<h4 className="itemName" id={item.id}>{item.name}</h4>
<h5 className="itemPrice" id={item.id}>{item.price}₽</h5>
<h5 className="itemStock" id={item.id}>Stock: {item.stock}</h5>
<h6 className="itemFloor" id={item.id}>Floor: {item.floorId}</h6>
<h6 className="itemType" id={item.id}>Type: {item.type}</h6>
<a className="viewItem" href={`/items/${item.id}`}>View Item</a> */}
