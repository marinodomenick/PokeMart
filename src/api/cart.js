//------------get all items in user cart
export const fetchAllCartItems = async (userId) => {
  console.log(userId, "just to confirm its here");
  const response = await fetch(`/api/cart/orders/active/user/${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();
  console.log(result, "from fetchallcartitems API");
  return result;
};
//----------delete item in user cart
export const deleteCartItem = async (id) => {
  console.log(id, "Inside cart.js delete function..the orderId");
  const response = await fetch(`/api/cart/item/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();
  console.log(result, "deleted result");
  return result;
};

//------------add item to user cart  ----
export const addCartItem = async (itemId, orderId, quantity) => {
  console.log(itemId, orderId, quantity);
  const response = await fetch(`/api/cart/item/${orderId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      itemId,
      orderId,
      quantity,
    }),
  });
  const result = await response.json();
  console.log(result, "result from adding to cart frontend");
  return result;
};
//---------edit quantity in user cart
export const editCartQuantity = async (id, quantity) => {
  console.log(id, "THE ORDERID WE EDIT");
  console.log(quantity, "works aswell");
  //CONSOLE.LOG ABOVE FIRES
  const response = await fetch(`/api/cart/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      quantity,
    }),
  });
  const result = await response.json();
  console.log(result, "NEEDS TO FIRE FOR EDIT TO WORK");
  return result;
};

//-----------DELETE WHOLE CART
export const deleteCart = async (id) => {
  console.log(id, "NEED TO GET THIS ID NOW");
  const response = await fetch(`/api/cart/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();
  console.log(result, "deleted result");
  return result;
};
