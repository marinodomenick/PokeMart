import React, { useEffect, useState } from "react";
import { createItem } from "../axios-services";
import { Link, useNavigate } from "react-router-dom";

const CreateItem = () => {
  const [item, setItem] = useState({});
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [floorId, setFloorId] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const navigate = useNavigate();

  // this doesn't actually create anything, not even hitting the back-end route. we must create Big Tony.

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const newItemResponse = await createItem(
            name,
            type,
            description,
            price,
            stock,
            floorId,
            imgUrl
          );
          console.log("the newItemResponse is: ", newItemResponse);
          setItem(newItemResponse);
          console.log("the newly created item is: ", item);
          setName("");
          setType("");
          setDescription("");
          setPrice("");
          setStock("");
          setFloorId("");
          setImgUrl("");

          //   navigate(`/items`);
        }}
      >
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <input
          placeholder="Floor ID"
          value={floorId}
          onChange={(e) => setFloorId(e.target.value)}
        />
        <input
          placeholder="Image URL"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <button type="submit">Create Item</button>
      </form>
      <Link to="/items">Cancel</Link>
    </div>
  );
};

export default CreateItem;
