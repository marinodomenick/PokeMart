const jwt = require("jsonwebtoken");

const authRequired = (req, res, next) => {
  const token = req.signedCookies.token;
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
  } catch (error) {
    res.status(401).send({
      loggedIn: false,
      message: "You are def not authorized.",
    });
    return;
  }

  next();
};

module.exports = { authRequired };
