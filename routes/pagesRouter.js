const pagesRouter = require("express").Router();
const { sendIndex, checkCookiesJWT } = require("../controllers/auth.js");
const checkAuth = require("../middlewares/auth.js");

pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard);
pagesRouter.get("/", sendIndex);

module.exports = pagesRouter;