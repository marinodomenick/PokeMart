export const fetchAllItems = async () => {
  const response = await fetch("/api/items", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  console.log(result, "from src api items");
  return result;
};

export const fetchSingleItem = async () => {
  const response = await fetch("/api/items/:id", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  console.log(result, "From src singleitem");
  return result;
};
