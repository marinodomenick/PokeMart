import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleItem } from "../api/items";
import { Link } from "react-router-dom";

const EditItem = () => {
  const [singleItem, setSingleItem] = useState({});
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [floorId, setFloorId] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  let { id } = useParams();
  useEffect(() => {
    const getSingleItem = async () => {
      const mysingleItem = await fetchSingleItem(id);
      setSingleItem(mysingleItem);
    };
    getSingleItem();
  }, []);
  return (
    <div>
      <form>
        <input
          placeholder={singleItem.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder={singleItem.type}
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          placeholder={singleItem.description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder={singleItem.price}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          placeholder={singleItem.stock}
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <input
          placeholder={singleItem.floorId}
          value={floorId}
          onChange={(e) => setFloorId(e.target.value)}
        />
        <input
          placeholder={singleItem.imgUrl}
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
      </form>
    </div>
  );
};

export default EditItem;
