import React, { useEffect, useState } from "react";
import { fetchAllItems } from "../api/items";
import useItems from "../Hooks/useItems";
import "../style/index.css";
// import { items } from "../../db/prisma";

//NEED TO IMPORT FETCHALLITEMS FROM API HOWEVER IT WORKS IN PRISMA

export default function Items() {
  const { items } = useItems();
  console.log(items, "from items.jsx that renders");

  const itemsToDisplay = items.map((item, i) => {
    return (
      <div className="wrapper">
        <div className="itemCard" key={`Key ${i}`}>
          <h4>{item.id}</h4>
          <h4>{item.name}</h4>
          <h5>{item.price}₽</h5>
          <h5>Stock: {item.stock}</h5>
          <h6>Floor: {item.floorId}</h6>
          <h6>Type: {item.type}</h6>
        </div>
      </div>
    );
  });

  console.log("The Items component has rendered");
  return <div>{itemsToDisplay}</div>;
}
