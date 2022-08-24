import React, { useState, useEffect } from "react";
import { fetchAllItems } from "../axios-services";
import ItemsContext from "../Context/ItemsContext";

export default function ItemsProvider({ children }) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getAllItems = async () => {
      const items = await fetchAllItems(page);
      setItems(items);
    };
    getAllItems();
  }, [page]);

  return (
    <ItemsContext.Provider value={{ items, setItems, page, setPage }}>
      {children}
    </ItemsContext.Provider>
  );
}
