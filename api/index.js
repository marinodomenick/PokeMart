const apiRouter = require('express').Router();

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

apiRouter.get("/health", (req, res, next) => {
  res.send({
    healthy: true,
  });
});

apiRouter.use("/users", require("./users.js"));
const itemsRouter = require("./items");
apiRouter.use("/items", itemsRouter);

apiRouter.use("/auth", require("./auth"));

module.exports = apiRouter;
