import { useContext } from "react";
import itemsContext from "../ItemsContext";

const useItems = () => {
  const [items, setItems] = useContext(itemsContext);

  return { items, setItems };
};

export default useItems;
