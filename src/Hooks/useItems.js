import { useContext } from "react";
import itemsContext from "../Context/ItemsContext";

const useItems = () => {
  const { items, setItems } = useContext(itemsContext); //tried setting to useContext(itemsContext) but got a not iterable error

  return { items, setItems };
};

export default useItems;
