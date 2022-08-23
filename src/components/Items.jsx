import React, { useState } from "react";
import useItems from "../Hooks/useItems";
import useCart from "../Hooks/useCart";
// import {useItems, useCart} from "../Hooks"
import "../style/index.css";
import { addCartItem } from "../axios-services";
import ItemCard from "./ItemCard";

export default function Items() {
  const { items } = useItems();
  const itemsToDisplay = items.map((item, i) => {
    return (
      <div>
        <ItemCard key={`Key: ${i}`} item={item} />
      </div>
    );
  });
  console.log("The Items component has rendered");
  return <div>{itemsToDisplay}</div>;
}
