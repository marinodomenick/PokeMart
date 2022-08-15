import React, { useState, useEffect } from "react";
import { fetchSingleItem } from "../api/items";
import SingleItemContext from "../Context/ItemsContext";

export default function SingleItemProvider({ children }) {
  const [singleItem, setSingleItem] = useState([]);

  useEffect(() => {
    const getSingleItem = async () => {
      const singleItem = await fetchSingleItem();

      setSingleItem(singleItem);
    };
    getSingleItem();
  }, []);
  console.log("singleitem provider has rendered");
  console.log(singleItem, "SINGLE ITEM HERE");
  return (
    <SingleItemContext.Provider value={{ singleItem, setSingleItem }}>
      {children}
    </SingleItemContext.Provider>
  );
}
