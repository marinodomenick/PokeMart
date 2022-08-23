import axios from "axios";

//------------get all items in user cart
//for our purposes this is fetchallactivecartitems
export const fetchAllCartItems = async (userId) => {
  console.log(userId, "just to confirm its here");
  const response = await fetch(`/api/cart/orders/active/user/${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();
  console.log(result, "FETCH ALL CART ITEMS");
  return result;
};
//--------switch cart isFulfilled = true
export const purchaseCart = async (userid, isFullfilled) => {
  try {
    const { data } = await axios.patch(
      `/api/cart/orders/active/user/${userid}`,
      {
        isFullfilled,
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

//-----------create new cart------------
export const createNewCart = async (userId, totalPrice, shippingAddress) => {
  try {
    const { data } = await axios.post(`/api/cart`, {
      userId,
      totalPrice,
      shippingAddress,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
//----------delete item in user cart
export const deleteCartItem = async (id) => {
  const response = await fetch(`/api/orderitems/item/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();
  console.log(result, "DELETED");
  return result;
};

//------------add item to user cart  ----
export const addCartItem = async (itemId, orderId, inquantity) => {
  let quantity = +inquantity;

  const response = await fetch(`/api/orderitems`, {
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
  console.log(result, "ADDED");
  return result;
};
//---------edit quantity in user cart
export const editCartQuantity = async (id, inquantity) => {
  let quantity = +inquantity;
  //CONSOLE.LOG ABOVE FIRES
  const response = await fetch(`/api/orderitems/item/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      quantity,
    }),
  });
  const result = await response.json();
  console.log(result, "EDITED");
  return result;
};

//-----------CLEAR WHOLE CART OF ITEMS
export const deleteCart = async (id) => {
  console.log(id, "NEED TO GET THIS ID NOW");
  const response = await fetch(`/api/orderitems/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();
  console.log(result, "deleted result");
  return result;
};
