const express = require("express");
const router = express.Router();
const ingredientRecipeController = require("../controllers/ingredientRecipeController");

router.post("/", ingredientRecipeController.addIngredientToRecipe);

module.exports = router;