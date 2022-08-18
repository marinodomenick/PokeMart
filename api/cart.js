const cartRouter = require("express").Router();
const prisma = require("../db/prisma");

cartRouter.get("/:id", async (req, res, next) => {
  try {
    const { userId } = req.body;
    const cart = await prisma.orders.findUnique({
      //What table do I await? OrderItems? Make a Cart table first?
      where: {
        userId: userId,
        isFulfilled: false,
        //I think we would compare the logged in user and the cart's user/owner. If they match, the user will be able to view their cart.
        //Probably wrong though
      },
    });
    res.send(cart);
  } catch (error) {
    next(error);
  }
});

//We need a patch request (edit cart) and a post request (submit cart for checkout and maybe post to the user order page?) most likely. Maybe the post request just brings you to a confirmation page?
//Or skip the post request in the cart and make the "Pay Now" button link to a fake success page.

// MVP Tier 1
// "checkout" the items in my cart so I can purchase my desired goods.
// Think of a typical user experience on popular websites from a guest user and logged-in user perspective.
// You can just start with by simulating the experience of checking out with a simple confirmation page.
//have a persistent cart so I can revisit and pick up where I left off.

//Guest user will show a login page on proceed to checkout forcing a login and account creation
//Regular cart would most likely show a proceed to checkout and have dummy fields for payment options
