const usersRouter = require("express").Router();

const prisma = require("../db/prisma");

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await prisma.users.findMany({
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
    res.send(users);
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;
