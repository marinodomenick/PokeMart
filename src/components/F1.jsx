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
      <button
        onClick={(e) => {
          setPage(() => page - 1);
        }}
        disabled={page === 1}
      >
        Previous
      </button>
      <button
        onClick={(e) => {
          setPage(() => page + 1);
        }}
        disabled={floorItems.length < 30}
      >
        Next
      </button>
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
      <button
        onClick={(e) => {
          setPage(() => page - 1);
        }}
        disabled={page === 1}
      >
        Previous
      </button>
      <button
        onClick={(e) => {
          setPage(() => page + 1);
        }}
        disabled={floorItems.length < 30}
      >
        Next
      </button>
    </>
  );
}
//TEST
