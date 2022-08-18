import axios from "axios";

export const fetchAllItems = async () => {
  try {
    const { data } = await axios.get("/api/items");
    return data
  } catch(err) {
    console.error(err)
  }
};

export const fetchSingleItem = async (id) => {
  try {
    const { data } = await axios.get(`/api/items/${id}`);
    return data
  } catch(err) {
    console.error(err)
  }
};
