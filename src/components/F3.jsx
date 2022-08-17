import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItemsByFloor } from "../api/items";

export default function F3() {
  const [floorItems, setFloorItems] = useState([]);
  let { floorId } = useParams();
  console.log(floorId, "AM I TRAPPED?"); //WAS EMPTY UNTILL SAVED?
  useEffect(() => {
    const getFloorItems = async () => {
      const myFloorItems = await fetchItemsByFloor(3);
      setFloorItems(myFloorItems);
      console.log(floorItems, "MyFloorItems");
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
