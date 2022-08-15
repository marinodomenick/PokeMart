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
  } catch (error) {}
  next(error);
});

//const dropTables = async () => {
//     console.log(`Dropping tables...`)
//     await prisma.$executeRaw`DROP TABLE IF EXISTS puppies_tricks;`
//     await prisma.$executeRaw`DROP TABLE IF EXISTS tricks;`
//     await prisma.$executeRaw`DROP TABLE IF EXISTS puppies;`
//     await prisma.$executeRaw`DROP TABLE IF EXISTS owners;`
//   }

// include: {
//     puppies_tricks: {
//       include: {
//         tricks: true,

// await prisma.$executeRaw`DROP TABLE IF EXISTS OrderItems`;
// await prisma.$executeRaw`DROP TABLE IF EXISTS Reviews`;
// await prisma.$executeRaw`DROP TABLE IF EXISTS Orders`;
// await prisma.$executeRaw`DROP TABLE IF EXISTS Items`;
// await prisma.$executeRaw`DROP TABLE IF EXISTS Floors`;
// await prisma.$executeRaw`DROP TABLE IF EXISTS Users`;

itemsRouter.get("/:id", async (req, res, next) => {
  try {
    const item = await prisma.items.findUnique({
      where: {
        id: +req.params.id,
      },
    });
    res.send(item);
  } catch (error) {}
  next(error);
});

module.exports = itemsRouter;
