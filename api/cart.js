const cartRouter = require("express").Router();

const prisma = require("../db/prisma");
const { authRequired } = require("./utils");

//----------------------------------ALL ORDERS FOR USER-------------------------------------

//PATCH ACTIVE CART ISFULFILLED = TRUE
cartRouter.patch("/orders/:orderId", authRequired, async (req, res, next) => {
  const { isFulfilled } = req.body;
  try {
    const userOrderComplete = await prisma.orders.update({
      where: {
        id: +req.params.orderId,
      },
      data: {
        isFulfilled: true,
      },
    });
    console.log(userOrderComplete, "for matt");
    res.send(userOrderComplete);
  } catch (error) {
    next(error);
  }
});
//---------------------------------------ACTIVE CART FOR USER----------------------------------------------
//GET ITEMS FROM ACTIVE CART ==> fetchallcartitems
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

//create new cart
cartRouter.post("/", async (req, res, next) => {
  const { userId, totalPrice, shippingAddress } = req.body;
  try {
    const cart = await prisma.orders.create({
      data: {
        userId,
        totalPrice,
        shippingAddress,
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
