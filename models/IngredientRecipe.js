const mongoose = require('mongoose');

const ingredientRecipeSchema = mongoose.Schema(
    {
        unit: { type: Number, required: true},
        quantity: { type: Number, required: true},
        Recipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true },
        Ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient', required: true }
    }
);

module.exports = mongoose.model("ingredientRecipe", ingredientRecipeSchema);