import React from "react";
import useItems from "../Hooks/useItems";

import "../style/index.css";

export default function Items() {
  const { items } = useItems();
  console.log("items?", items)
  const itemsToDisplay = items.map((item, i) => {
    return (
      <div className="wrapper">
        <div className="itemCard" key={`Key ${i}`} id={item.id}>
          {/* CURRENTLY FOR FETCHSINGLEITEM(E.TARGET.ID) TO WORK EACH CHILD NEEDS THIS ID */}
          <h4 id={item.id}>{item.id}</h4>
          <span>
            <img className="itemImg" id={item.id} src={item.imgUrl} />
          </span>
          <h4 className="itemName" id={item.id}>{item.name}</h4>
          <h5 className="itemPrice" id={item.id}>{item.price}₽</h5>
          <h5 className="itemStock" id={item.id}>Stock: {item.stock}</h5>
          <h6 className="itemFloor" id={item.id}>Floor: {item.floorId}</h6>
          <h6 className="itemType" id={item.id}>Type: {item.type}</h6>
          <a href={`/items/${item.id}`}>View Item</a>
        </div>
      </div>
    );
  });
  console.log("The Items component has rendered");
  return <div>{itemsToDisplay}</div>;
}
