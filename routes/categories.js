const categoriesRouter = require('express').Router();

const { findAllCategories, createCategory, findCategoryById, deleteCategory } = require('../middlewares/categories');
const { sendCategory, sendCategoryUpdated } = require('../controllers/categories');
const { checkAuth } = require("../middlewares/auth.js");

categoriesRouter.get('/categories', findAllCategories, createCategory, sendCategory);
categoriesRouter.get('/categories/:id', findCategoryById, sendCategory);
categoriesRouter.post(
    "/categories",
    findAllCategories,
    //checkIsCategoryExists,
    //checkEmptyName,
    checkAuth,
    createCategory,
    sendCategory
);
categoriesRouter.put(
    "/categories/:id",
    checkEmptyName,
    checkAuth,
    updateCategory,
    sendCategoryUpdated
);
categoriesRouter.delete(
    "/categories/:id",
    checkAuth,
    deleteCategory,
    sendCategory
);

module.exports = categoriesRouter;