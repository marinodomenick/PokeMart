import React, { useState, useEffect } from "react";
import { fetchAllItems } from "../api/items";
import ItemsContext from "../Context/ItemsContext";

export default function ItemsProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getAllItems = async () => {
      const items = await fetchAllItems();

      setItems(items);
    };
    getAllItems();
  }, []);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
}
