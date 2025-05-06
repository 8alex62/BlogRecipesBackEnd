const IngredientRecipe = require("../models/ingredientRecipe");

module.exports.addIngredientToRecipe = async (query) => {
    try {
        const newIngredientRecipe = new IngredientRecipe(query);
        return await newIngredientRecipe.save();
    } catch (e) {
        throw Error(`Error while adding the Ingredient to the Recipe: ${e.message}`);
    }
};