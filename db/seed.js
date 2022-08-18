const prisma = require("./prisma");

const {
  userData,
  orderData,
  reviewData,
  orderItemData,
} = require("./seedData");

const { seedFloors, fetchAndSeedItems } = require("./fetchAndSeed");

const dropTables = async () => {
  console.log("dropping tables...");
  await prisma.$executeRaw`DROP TABLE IF EXISTS OrderItems`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS Reviews`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS Orders`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS Items`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS Floors`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS Users`;
};

const createTables = async () => {
  console.log("creating tables...");
  await prisma.$executeRaw`
  CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR (255) UNIQUE NOT NULL,
    password VARCHAR (255) NOT NULL,
    name VARCHAR (255) NOT NULL,
    email VARCHAR (255) UNIQUE NOT NULL,
    address VARCHAR (255) NOT NULL,
    "isAdmin" BOOLEAN DEFAULT false
  );`;

  await prisma.$executeRaw`
  CREATE TABLE Floors (
    id SERIAL PRIMARY KEY,
    name VARCHAR (255) NOT NULL
  );
  `;

  await prisma.$executeRaw`
CREATE TABLE Items (
  id SERIAL PRIMARY KEY,
  name VARCHAR (255) NOT NULL,
  type VARCHAR (255),
  description TEXT,
  price INTEGER NOT NULL,
  stock INTEGER NOT NULL,
  "floorId" INTEGER REFERENCES Floors("id"),
  "imgUrl" TEXT
);
`;
  //Come back to TotalPrice
  await prisma.$executeRaw`
CREATE TABLE Orders (
  id SERIAL PRIMARY KEY,
  "userId" INTEGER REFERENCES Users("id"),
  "isFulfilled" BOOLEAN DEFAULT false,
  "totalPrice" INTEGER NOT NULL, 
  "shippingAddress" VARCHAR (255) NOT NULL
);
`;
  await prisma.$executeRaw`
CREATE TABLE Reviews (
  id SERIAL PRIMARY KEY,
  "itemId" INTEGER REFERENCES Items("id"),
  title VARCHAR (255) NOT NULL,
  content VARCHAR (255),
  "userId" INTEGER REFERENCES Users("id")
);
`;
  await prisma.$executeRaw`
CREATE TABLE OrderItems (
  id SERIAL PRIMARY KEY,
  "itemId" INTEGER REFERENCES Items("id"),
  "orderId" INTEGER REFERENCES Orders("id"),
  quantity INTEGER NOT NULL
);
`;
};

const seedDb = async () => {
  console.log("creating Users...");
  for (const user of userData) {
    const createdUser = await prisma.users.create({ data: user });
    console.log(createdUser);
  }
  await seedFloors();
  await fetchAndSeedItems();
  console.log("creating Orders...");
  for (const order of orderData) {
    const createdOrder = await prisma.orders.create({ data: order });
    console.log(createdOrder);
  }
  console.log("creating Reviews...");
  for (const review of reviewData) {
    const createdReview = await prisma.reviews.create({ data: review });
    console.log(createdReview);
  }
  console.log("creating Order Items...");
  for (const orderItem of orderItemData) {
    const createdOrderItemReview = await prisma.orderitems.create({
      data: orderItem,
    });
    console.log(createdOrderItemReview);
  }
};

const initDb = async () => {
  try {
    await dropTables();
    await createTables();
    await seedDb();
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};

initDb();
