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

export const fetchItemsByFloor = async (floorId) => {
  console.log(floorId, "THE FLOOR ID CONSOLE LOG"); //obv it got this because i hard code passed in floorid=1
  const response = await fetch(`/api/items/floor/${floorId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();
  console.log(result, "Result from new fetch here"); //still empty??? NVM ITS FILLED...
  return result;
};
