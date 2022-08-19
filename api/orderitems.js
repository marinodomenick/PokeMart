const { prisma } = require("@prisma/client");

const orderitemsRouter = require("express").Router();

//---------------------------------ITEMS ON ORDER------------------------------------
orderitemsRouter.get("/:orderId", async (req, res, next) => {
  try {
    const cart = await prisma.orderitems.findMany({
      where: {
        orderId: +req.params.orderId,
      },
    });
    res.send(cart);
  } catch (error) {
    next(error);
  }
});

orderitemsRouter.post("/", async (req, res, next) => {
  try {
    const { itemId, orderId } = req.body;
    const orderitem = await prisma.orderitems.create({
      data: {
        itemId,
        orderId,
      },
    });
    res.send(orderitem);
  } catch (error) {
    next(error);
  }
});
// Endpoint to add item to the cart

// endpoint to update the qty of an item in the cart

// endpoint to remove an item from the cart
orderitemsRouter.delete("/", async (req, res, next) => {
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

module.exports = orderitemsRouter;
