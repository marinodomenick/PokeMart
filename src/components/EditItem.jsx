import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleItem } from "../api/items";
import { editItem } from "../axios-services";
import { Link, useNavigate } from "react-router-dom";

const EditItem = () => {
  const [singleItem, setSingleItem] = useState({});
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [floorId, setFloorId] = useState("");

  const navigate = useNavigate();

  let { id } = useParams();
  useEffect(() => {
    const getSingleItem = async () => {
      const mysingleItem = await fetchSingleItem(id);
      console.log("the mysingleItem from the useEffect is: ", mysingleItem);
      setSingleItem(mysingleItem);
    };
    getSingleItem();
  }, []);
  console.log("the singleItem is: ", singleItem);
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const updateItemResponse = await editItem(
            singleItem.id,
            name,
            type,
            description,
            price,
            stock,
            floorId
          );
          setSingleItem(updateItemResponse);
          setName("");
          setType("");
          setDescription("");
          setPrice("");
          setStock("");
          setFloorId("");

          navigate(`/items/${singleItem.id}`);
        }}
      >
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
        <button type="submit">Update Item</button>
      </form>
      <button
        onClick={() => {
          navigate(`/items/${id}`);
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default EditItem;
