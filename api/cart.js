const cartRouter = require("express").Router();
const prisma = require("../db/prisma");

cartRouter.get("/", async (req, res, next) => {
  try {
    const cart = await prisma.cart; //What table do I await? OrderItems? Make a Cart table?
  } catch (error) {
    next(error);
  }
});
