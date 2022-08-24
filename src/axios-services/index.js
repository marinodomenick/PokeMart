import axios from "axios";

// this file holds your frontend network request adapters
// think about each function as a service that provides data
// to your React UI through AJAX calls

// for example, if we need to display a list of users
// we'd probably want to define a getUsers service like this:

export async function getUsers() {
  try {
    const { data: users } = await axios.get("/api/users");
    return users;
  } catch (err) {
    console.error(err);
  }
}

export async function getAPIHealth() {
  try {
    const { data } = await axios.get("/api/health");
    return data;
  } catch (err) {
    console.error(err);
    return { healthy: false };
  }
}

export async function getUserById(id) {
  try {
    const { data: user } = await axios.get(`/api/users/${id}`);
    return user;
  } catch (err) {
    console.error(err);
  }
}

export async function logoutUser() {
  try {
    const { data } = await axios.post(`/api/auth/logout`);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function registerUser(username, password, name, email, address) {
  try {
    const { data } = await axios.post("/api/auth/register", {
      username: username,
      password: password,
      name: name,
      email: email,
      address: address,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post("/api/auth/login", {
      username: username,
      password: password,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function updateUser(id, username, password, name, email, address) {
  try {
    const { data } = await axios.patch(`/api/users/${id}`, {
      username: username,
      password: password,
      name: name,
      email: email,
      address: address,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getMe() {
  try {
    const { data } = await axios.get("/api/auth/me");
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function destroyItem(id) {
  try {
    const { data } = await axios.delete(`/api/items/${id}`);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function editItem(
  id,
  name,
  type,
  description,
  sPrice,
  sStock,
  sFloorId
) {
  let price = +sPrice;
  let stock = +sStock;
  let floorId = +sFloorId;
  try {
    const { data } = await axios.patch(`/api/items/${id}`, {
      name,
      type,
      description,
      price,
      stock,
      floorId,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function createItem(
  name,
  type,
  description,
  sPrice,
  sStock,
  sFloorId,
  imgUrl
) {
  let price = +sPrice;
  let stock = +sStock;
  let floorId = +sFloorId;
  try {
    const { data } = await axios.post(`/api/items`, {
      name,
      type,
      description,
      price,
      stock,
      floorId,
      imgUrl,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
}

//------------get all items in user cart
//for our purposes this is fetchallactivecartitems
export async function fetchAllCartItems(userId) {
  try {
    const { data } = await axios.get(`/api/cart/orders/active/user/${userId}`);
    return data;
  } catch (err) {
    console.error(err);
  }
}

//--------switch cart isFulfilled = true
export const purchaseCart = async (orderId) => {
  try {
    const { data } = await axios.patch(`/api/cart/orders/${orderId}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

//-----------create new cart------------
export const createNewCart = async (userId, totalPrice, shippingAddress) => {
  try {
    console.log("CreateNewCart running", userId, totalPrice, shippingAddress);
    const { data } = await axios.post(`/api/cart`, {
      userId,
      totalPrice,
      shippingAddress,
    });
    console.log(data, "The data");
    return data;
  } catch (error) {
    console.error(error);
  }
};

//----------delete item in user cart
export async function deleteCartItem(id) {
  try {
    const { data } = await axios.delete(`/api/orderitems/item/${id}`);
    return data;
  } catch (err) {
    console.error(err);
  }
}

//------------add item to user cart  ----
export async function addCartItem(itemId, orderId, inquantity) {
  let quantity = +inquantity;
  try {
    const { data } = await axios.post(`/api/orderitems`, {
      itemId,
      orderId,
      quantity,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
}

//---------edit quantity in user cart
export async function editCartQuantity(id, inquantity) {
  let quantity = +inquantity;
  try {
    const { data } = await axios.patch(`/api/orderitems/item/${id}`, {
      quantity,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
}

//-----------CLEAR WHOLE CART OF ITEMS
export async function deleteCart(id) {
  try {
    const { data } = await axios.delete(`/api/orderitems/${id}`);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export const fetchAllItems = async (pageNum) => {
  try {
    const { data } = await axios.get(`/api/items?page=${pageNum}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchSingleItem = async (id) => {
  try {
    const { data } = await axios.get(`/api/items/${id}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export async function fetchItemsByFloor(floorId, pageNum) {
  try {
    const { data } = await axios.get(
      `/api/items/floor/${floorId}?page=${pageNum}`
    );
    return data;
  } catch (err) {
    console.error(err);
  }
}
