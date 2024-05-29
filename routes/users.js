const usersRouter = require('express').Router();

const { findAllUsers, createUser, findUserById, updateUser, deleteUser, filterPassword, hashPassword } = require('../middlewares/users');
const { sendUser, sendUserUpdated, sendAllUsers } = require('../controllers/users');
const { checkAuth } = require("../middlewares/auth")

usersRouter.get("/users", findAllUsers, filterPassword, sendAllUsers);
usersRouter.get("/users/:id", findUserById, filterPassword, sendUser);
usersRouter.post(
    "/users",
    findAllUsers,
    //checkIsUserExists,
    //checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUser
);
usersRouter.put(
    "/users/:id",
    //checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
);
usersRouter.delete(
    "/users/:id",
    checkAuth,
    deleteUser,
    sendUser
);
usersRouter.get("/me", checkAuth, sendUser);

module.exports = usersRouter;