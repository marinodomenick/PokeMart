export const fetchAllItems = async () => {
  const response = await fetch("/api/items", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  return result;
};

export const fetchSingleItem = async (id) => {
  const response = await fetch(`/api/items/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  return result;
};
