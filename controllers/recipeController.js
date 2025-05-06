const recipeService = require("../services/recipeService");
const Recipe = require("../models/recipe");

module.exports.getAllRecipes = async (req, res) => {
    try{
        let recipes = await recipeService.getAllRecipes();
        return res.status(200).json({ status: 200, data: recipes, message: "Succesfully retrived the list of Recipes" });
    }
    catch(e) {
        return res.status(400).json({ status: 400, message: e.message });

    }
};

module.exports.getRecipe = async (req, res) => {
    try{
        let recipe = await recipeService.getRecipe({_id: req.params.id})
        return res.status(200).json({ status: 200, data: recipe, message: "Succesfully retrieved the Recipe" });
    } catch(e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

module.exports.getRecipesByCategoryId = async (req, res) => {
    try{
        let recipe = await recipeService.getRecipesByCategoryId({_id: req.params.id})
        return res.status(200).json({ status: 200, data: recipe, message: "Succesfully retrieved the Recipe" });
    } catch(e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

module.exports.createRecipe = async(req, res) => {
    try {
        let recipe = new Recipe(req.body);
        let newRecipe = await recipeService.createRecipe(recipe);
        return res.status(200).json({ status: 200, data: newRecipe, message: "Succesfully created the Recipe" });
    } catch(e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

module.exports.updateRecipe = async(req,res) => {
    try {
        let recipe = await recipeService.updateRecipe({ _id: req.params.id }, req.body);
        return res.status(200).json({ status: 200, data: recipe, message: "Succesfully updated the Recipe" });
    }catch(e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

module.exports.deleteRecipe = async(req,res) => {
    try {
        let recipe = await recipeService.deleteRecipe({ _id: req.params.id });
        return res.status(200).json({ status: 200, data: recipe, message: "Succesfully deleted the Recipe" });
    }catch(e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};