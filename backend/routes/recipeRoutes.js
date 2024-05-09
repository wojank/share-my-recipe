const express = require("express");
const {
  createRecipe,
  getAllRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeControllers");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../config/upload");
const router = express.Router();

router.post("/", protect, upload, createRecipe);
router.get("/", getAllRecipes);
router.get("/:recipeId", getRecipe);
router.put("/:recipeId", protect, upload, updateRecipe);
router.delete("/:recipeId", protect, deleteRecipe);

module.exports = router;
