const ingredientRecipeService = require("../services/ingredientRecipeService");

module.exports.addIngredientToRecipe = async (req, res) => {
    try{
        const newAssoc = await ingredientRecipeService.addIngredientToRecipe(req.body); 
        return res.status(200).json({status: 200, data: newAssoc, message: "Sucessfully added the Ingredient to the Recipe."});
    }
    catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}