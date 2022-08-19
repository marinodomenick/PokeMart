import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleItem } from "../api/items";
import { Link } from "react-router-dom";

//note this page is off api/itemS/#
export default function SingleItem() {
  const [singleItem, setSingleItem] = useState({});
  let { id } = useParams();
  console.log(id, "we know this works");
  useEffect(() => {
    const getSingleItem = async () => {
      const mysingleItem = await fetchSingleItem(id);
      setSingleItem(mysingleItem);
    };
    getSingleItem();
  }, []);

  return (
    <>
      <div className="itemCard">
        <div>Single Item Page</div>
        <h2>{singleItem.name}</h2>
        <h4>
          Price:{singleItem.price} Stock:{singleItem.stock}
        </h4>
        <h4>{singleItem.description}</h4>
      </div>
    </>
  );
}
