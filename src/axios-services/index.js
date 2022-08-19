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
  price,
  stock,
  floorId,
  imgUrl
) {
  try {
    const { data } = await axios.patch(`/api/items/${id}`, {
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

export async function createItem(
  name,
  type,
  description,
  price,
  stock,
  floorId,
  imgUrl
) {
  try {
    const { data } = await axios.create(`/api/items/`, {
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
