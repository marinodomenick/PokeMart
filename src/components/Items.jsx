import React, { useEffect, useState } from "react";

//NEED TO IMPORT FETCHALLITEMS FROM API HOWEVER IT WORKS IN PRISMA

export default function Items() {
  console.log("from items.jsx that renders");

  const [items, setItems] = useState([]);
  useEffect(() => {});

  return (
    <>
      <p>route is working for itemss</p>
    </>
  );
}
