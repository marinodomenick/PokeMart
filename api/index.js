const apiRouter = require("express").Router();

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
// place your routers here

apiRouter.use("/auth", require("./auth"));

module.exports = apiRouter;
