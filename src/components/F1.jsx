import React, { useEffect, useState } from "react";
import { fetchItemsByFloor } from "../api/items";

export default function F1() {
  const [floorItems, setFloorItems] = useState([]);
  useEffect(() => {
    const getFloorItems = async () => {
      const myFloorItems = await fetchItemsByFloor(1);
      setFloorItems(myFloorItems);
    };
    getFloorItems();
  }, []);

  return (
    <>
      {floorItems.map((item, index) => {
        return (
          <div className="wrapper">
            <h4 key={`Key: ${index}`} className="itemCard">
              <div className="itemName">
                {item.name} <img id={item.id} src={item.imgUrl} />
              </div>

              <div className="itemPrice">
                Price: {item.price}₽ Stock: {item.stock}
              </div>
              <a className="viewItem" href={`/items/${item.id}`}>View Item</a>
            </h4>
          </div>
        );
      })}
    </>
  );
}
//TEST
