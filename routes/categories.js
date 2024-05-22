const categoriesRouter = require('express').Router();

const { findAllCategories, createCategory, findCategoryById, deleteCategory } = require('../middlewares/categories');
const sendCategory = require('../controllers/categories');

categoriesRouter.get('/categories', findAllCategories, createCategory, sendCategory);
categoriesRouter.get('/categories/:id', findCategoryById, sendCategory);
categoriesRouter.post(
    "/categories",
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    checkAuth,
    createCategory,
    sendCategoryCreated
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
    sendCategoryDeleted
);

module.exports = categoriesRouter;