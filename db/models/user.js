// grab our db client connection to use with our adapters
const { prisma } = require("@prisma/client");
const client = require("../client");

module.exports = {
  // add your database adapter fns here
  getAllUsers,
  createUser,
  updateUserById,
  getUserById,
};

async function getAllUsers() {
  /* this adapter should fetch a list of users from your db */
  const users = await prisma.users.findMany();
  return users;
}

async function createUser(userObj) {
  const user = await prisma.users.create({
    data: userObj,
  });
  return user;
}

async function updateUserById(userId, updateObj) {
  const updatedUser = await prisma.users.update({
    where: {
      id: userId,
    },
    data: updateObj,
  });
  return updatedUser;
}

async function getUserById(id) {
  const singleUser = await prisma.users.findUnique({
    where: {
      id: id,
    },
    include: {
      reviews: true,
      orders: {
        include: {
          orderitems: {
            include: {
              items: true,
            },
          },
        },
      },
    },
  });

  return singleUser;
}

// async function getOrdersAndIncludeItems() {
//   const ordersWithItems = await prisma.orders.findMany({
//     include: {
//       orderitems: {
//         include: {
//           items: true,
//         },
//       },
//     },
//   });
// }
