import React, { useEffect, useState } from "react";

import { fetchItemsByFloor } from "../api/items";

export default function F2() {
  const [floorItems, setFloorItems] = useState([]);

  useEffect(() => {
    const getFloorItems = async () => {
      const myFloorItems = await fetchItemsByFloor(2);
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
              <div>
                {item.name} <img id={item.id} src={item.imgUrl} />
              </div>

              <div>
                Price: {item.price}₽ Stock: {item.stock}
              </div>
              <a href={`/items/${item.id}`}>View Item</a>
            </h4>
          </div>
        );
      })}
    </>
  );
}
//TEST
