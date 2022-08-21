import { useContext } from "react";
import SingleItemContext from "../Context/SingleItemContext";

const useSingleItem = () => {
  const { singleItem, setSingleItem } = useContext(SingleItemContext);
  return { singleItem, setSingleItem };
};

export default useSingleItem;
