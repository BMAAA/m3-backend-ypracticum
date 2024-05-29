const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
    const authorization = req.cookies.jwt;
    console.log(`Это не реквест куки джей ви ти: ${req.cookies.jwt}`)
    console.log(authorization)
    if (!authorization) {
    return res.status(401).send({ message: "Необходима авторизация" });
  }

  try {
    req.user = jwt.verify(authorization, "some-secret-key");
  } catch (err) {
    return res.status(401).send({ message: "Необходима авторизация" });
  }
  next();
};

const checkCookiesJWT = (req, res, next) => {
  if (!req.cookies.jwt) {
    return res.redirect("/");
  }
  console.log(`Это точно реквест куки джей ви ти: ${req.cookies.jwt}`)
  req.headers.authorization = `Bearer ${req.cookies.jwt}`;
  next();
};

module.exports = { checkAuth, checkCookiesJWT };