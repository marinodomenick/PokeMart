import React, { useEffect, useState } from "react";
import useSingleItem from "../Hooks/useSingleItem";

export default function SingleItem() {
  const { singleItem } = useSingleItem();
  console.log(singleItem, "from singleitem.jsx that renders");
  console.log(singleItem, "asdasdasdasds");
  console.log("The Items component has rendered");
  return <div>Single Item Page</div>;
}
