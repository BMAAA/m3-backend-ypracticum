const categoriesRouter = require("express").Router();

const {
  findAllCategories,
  createCategory,
  findCategoryById,
  updateCategory,
  deleteCategory,
  checkIsCategoryExists,
  checkEmptyName
} = require("../middlewares/categories.js");
const {
  sendAllCategories,
  sendCategory,
  sendCategoryUpdated
} = require("../controllers/categories.js");
const { checkAuth } = require("../middlewares/auth.js");

categoriesRouter.get("/categories", checkAuth, findAllCategories, sendAllCategories);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth,
  createCategory,
  sendCategory
);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategory);
categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategory
);
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategory);

module.exports = categoriesRouter;