//I BELIEVE THIS IS GOING TO NEED TO FETCH ALL THE ITEMS(ORDERITEMS) IN THE USERS ACTIVE CART(ORDER)
//do we need to add the useAuth to the function head to only allow currentuser to run this?
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
