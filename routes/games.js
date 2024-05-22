const gamesRouter = require('express').Router();

const { findAllGames, createGame, findGameById, updateGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, deleteGame } = require('../middlewares/games');
const { sendGame, sendGameUpdated } = require('../controllers/games');
const { checkAuth } = require("../middlewares/auth.js");

gamesRouter.post(
  "/games",
  findAllGames,
  //checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGame
);
gamesRouter.get("/games/:id", findGameById, sendGame);
gamesRouter.put(
  "/games/:id",
  findGameById,
  //checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated
);
gamesRouter.delete(
  "/games/:id",
  checkAuth, 
  deleteGame,
  sendGame
);

module.exports = gamesRouter;