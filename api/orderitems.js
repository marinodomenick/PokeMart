const prisma = require("../db/prisma");

const orderitemsRouter = require("express").Router();

//GET ALL ITEMS IN CART ==> come back to this for my account all orders
// orderitemsRouter.get("/:orderId", async (req, res, next) => {
//   try {
//     const cart = await prisma.orderitems.findMany({
//       where: {
//         orderId: +req.params.orderId,
//       },
//     });
//     res.send(cart);
//   } catch (error) {
//     next(error);
//   }
// });

//DELETE CART ITEM
orderitemsRouter.delete("/item/:id", async (req, res, next) => {
  try {
    const deleteitem = await prisma.orderitems.delete({
      where: {
        id: +req.params.id,
      },
    });
    res.send(deleteitem);
  } catch (error) {
    next(error);
  }
});

//UPDATE CART ITEM
orderitemsRouter.patch("/item/:id", async (req, res, next) => {
  const { quantity } = req.body;
  try {
    const updateitem = await prisma.orderitems.update({
      where: {
        id: +req.params.id,
      },
      data: {
        quantity: quantity,
      },
    });
    res.send(updateitem);
  } catch (error) {
    next(error);
  }
});

//DELETE ALL ITEMS IN CART
orderitemsRouter.delete("/:orderId", async (req, res, next) => {
  try {
    const cart = await prisma.orderitems.deleteMany({
      where: {
        orderId: +req.params.orderId,
      },
    });
    res.send(cart);
  } catch (error) {
    next(error);
  }
});

//CREATE NEW ITEM FOR CART
orderitemsRouter.post("/", async (req, res, next) => {
  const { itemId, orderId, quantity } = req.body;
  try {
    const cart = await prisma.orderitems.create({
      data: {
        itemId: itemId,
        orderId: orderId,
        quantity: quantity,
      },
    });
    res.send(cart);
  } catch (error) {
    next(error);
  }
});
module.exports = orderitemsRouter;
