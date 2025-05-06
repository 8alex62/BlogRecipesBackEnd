const recipeController = require("../controllers/recipeController");
const express = require("express");
const router = express.Router();

router.get("/", recipeController.getAllRecipes);
router.get("/:id", recipeController.getRecipe);
router.get("/Category/:id", recipeController.getRecipesByCategoryId);
router.post("/", recipeController.createRecipe);
router.put("/:id", recipeController.updateRecipe);
router.delete("/:id", recipeController.deleteRecipe);

module.exports = router;