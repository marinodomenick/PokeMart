import React, { useState, useEffect } from "react";
import { fetchSingleItem } from "../api/items";
import { useParams } from "react-router-dom";
import SingleItemContext from "../Context/SingleItemContext";

export default function SingleItemProvider({ children }) {
  const [singleItem, setSingleItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getItem = async () => {
      const singleItem = await fetchSingleItem(id);

      setSingleItem(singleItem);
    };
    getItem();
  }, []);

  return (
    <SingleItemContext.Provider value={{ singleItem, setSingleItem }}>
      {children}
    </SingleItemContext.Provider>
  );
}
