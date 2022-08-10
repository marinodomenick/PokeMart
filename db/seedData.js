const userData = [
  {
    username: "TheRealOak",
    password: "catchThemAll",
    name: "Samuel Oak",
    address: "3 Pallet Town",
    isAdmin: true,
  },
];
//floorid needed?
const floorData = [{ name: "1F Trainers' Zone" }];

const itemData = [
  {
    name: "Pokeball",
    description: "throw at pokemon to catch",
    price: 200,
    stock: 2000,
    floorId: 1,
  },
];

const orderData = [
  {
    userId: 1,
    isFulfilled: true,
    totalPrice: 1000,
    shippingAddress: "3 Pallet Town",
  },
];

const reviewData = [
  {
    itemId: 1,
    title: "Did not catch rayquaza 0/10",
    content: "Refund please",
    userId: 1,
  },
];

const orderItemData = [
  {
    itemId: 1,
    orderId: 1,
    quantity: 5,
  },
];

module.exports = {
  userData,
  floorData,
  itemData,
  orderData,
  reviewData,
  orderItemData,
};
