import React, { useState } from "react";
import { createItem, fetchAllItems } from "../axios-services";
import { Link, useNavigate } from "react-router-dom";
import useItems from "../Hooks/useItems";

const CreateItem = () => {
  const [item, setItem] = useState({});
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [floorId, setFloorId] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const { setItems } = useItems();

  const navigate = useNavigate();

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
          setItem(newItemResponse);

          setName("");
          setType("");
          setDescription("");
          setPrice(0);
          setStock(0);
          setFloorId(0);
          setImgUrl("");
          const newItems = await fetchAllItems();
          setItems(newItems);
          navigate(`/items`);
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
      <div className="cancelButton">
      <Link to="/items">Cancel</Link></div>
    </div>
  );
};

export default CreateItem;
