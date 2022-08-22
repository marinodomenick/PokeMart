const cartRouter = require("express").Router();

const prisma = require("../db/prisma");

//----------------------------------ALL ORDERS FOR USER-------------------------------------

cartRouter.get("/orders/user/:userId", async (req, res, next) => {
  try {
    const userOrders = await prisma.orders.findMany({
      where: {
        userId: +req.params.userId,
      },
    });
    res.send(userOrders);
  } catch (error) {
    next(error);
  }
});

//---------------------------------------ACTIVE CART FOR USER----------------------------------------------
//GET ITEMS FROM ACTIVE CART
cartRouter.get("/orders/active/user/:userId", async (req, res, next) => {
  try {
    const activeUserOrder = await prisma.orders.findMany({
      where: {
        isFulfilled: false,
        userId: +req.params.userId,
      },
      include: {
        orderitems: {
          include: {
            items: true,
          },
        },
      },
    });
    res.send(activeUserOrder);
  } catch (error) {
    next(error);
  }
});

//-------GET----DELETE----PATCH---ALL CART ITEMS---------
//GET ALL ITEMS IN CART
cartRouter.get("/:orderId", async (req, res, next) => {
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
//DELETE CART ITEM
cartRouter.delete("/item/:id", async (req, res, next) => {
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
cartRouter.patch("/item/:id", async (req, res, next) => {
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

//DELETE WHOLE CART ... Safer to delete all items in cart
// cartRouter.delete("/:id", async (req, res, next) => {
//   try {
//     const cart = await prisma.orders.delete({
//       where: {
//         id: +req.params.id,
//       },
//     });
//     res.send(cart);
//   } catch (error) {
//     next(error);
//   }
// });

//------DELETE/GET/POST ALL ITEMS IN CART-----
cartRouter.delete("/:orderId", async (req, res, next) => {
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
//GETS ALL ITEMS IN CART
cartRouter.get("/:orderId", async (req, res, next) => {
  try {
    const cart = await prisma.orderitems.findMany({
      where: {
        orderId: {
          contains: req.params.orderId,
        },
      },
    });
    res.send(cart);
  } catch (error) {
    next(error);
  }
});
//CREATE NEW ITEM FOR CART
cartRouter.post("/", async (req, res, next) => {
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

//--------RANDOM NOTES SECTION BELOW--------
//edit button will need to have a click event to target the Id so we know which item we are editing

//We need a patch request (edit cart) and a post request (submit cart for checkout and maybe post to the user order page?) most likely. Maybe the post request just brings you to a confirmation page?
//Or skip the post request in the cart and make the "Pay Now" button link to a fake success page.

// MVP Tier 1
// "checkout" the items in my cart so I can purchase my desired goods.
// Think of a typical user experience on popular websites from a guest user and logged-in user perspective.
// You can just start with by simulating the experience of checking out with a simple confirmation page.
//have a persistent cart so I can revisit and pick up where I left off.

//Guest user will show a login page on proceed to checkout forcing a login and account creation
//Regular cart would most likely show a proceed to checkout and have dummy fields for payment options

module.exports = cartRouter;
