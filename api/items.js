const itemsRouter = require("express").Router();

const prisma = require("../db/prisma");

itemsRouter.get("/", async (req, res, next) => {
  try {
    const items = await prisma.items.findMany({
      include: {
        orderitems: {
          include: {
            orders: true,
          },
        },
      },
    });
    res.send(items);
  } catch (error) {
    next(error);
  }
});

itemsRouter.get("/:id", async (req, res, next) => {
  try {
    const item = await prisma.items.findUnique({
      where: {
        id: +req.params.id,
      },
    });
    res.send(item);
  } catch (error) {
    next(error);
  }
});

itemsRouter.get("/floor/:floorId", async (req, res, next) => {
  try {
    const item = await prisma.items.findMany({
      where: {
        floorId: +req.params.floorId,
      },
    });

    res.send(item);
  } catch (error) {
    next(error);
  }
});

module.exports = itemsRouter;
