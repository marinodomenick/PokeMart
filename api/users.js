const usersRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const prisma = require("../db/prisma");
const { users } = require("../db/prisma");
const { authRequired } = require("../api/utils");

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

usersRouter.get("/:id", async (req, res, next) => {
  try {
    const user = await prisma.users.findUnique({
      where: {
        id: +req.params.id,
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
    res.send(user);
  } catch (error) {
    next(error);
  }
});

usersRouter.patch("/:id", async (req, res, next) => {
  try {
    const updatedUser = await prisma.users.update({
      where: {
        id: +req.params.id,
      },
      data: req.body,
    });
    res.send(updatedUser);
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/me", authRequired, async (req, res, next) => {
  try {
    res.send(req.user);
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;
