const express = require("express");
const {
  createRecipe,
  getAllRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeControllers");
const upload = require("../config/upload");
const router = express.Router();

router.post("/", upload, createRecipe);
router.get("/", getAllRecipes);
router.get("/:recipeId", getRecipe);
router.put("/:recipeId", upload, updateRecipe);
router.delete("/:recipeId", deleteRecipe);

module.exports = router;
