import React, { useEffect, useState } from "react";
import { fetchItemsByFloor } from "../axios-services";
import { useParams } from "react-router-dom";
export default function F1() {
  const [floorItems, setFloorItems] = useState([]);
  const { id } = useParams();
  const [page, setPage] = useState(1);
  useEffect(() => {
    const getFloorItems = async () => {
      const myFloorItems = await fetchItemsByFloor(+id, page);
      setFloorItems(myFloorItems);
    };
    getFloorItems();
  }, [id, page]);

  useEffect(() => {
    setPage(1);
  }, [id]);

  return (
    <>
      <div className="wrapper">
      {floorItems.map((item, index) => {
        return (
          <div className="f1Wrapper">
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
        disabled={floorItems.length < 30}
      >
        Next
      </button>
      </div>
      </div>
    </>
  );
}
//TEST
