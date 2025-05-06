const Recipe = require("../models/recipe");
const CategoryService = require ("../services/categoryService");
//Get all recipes
module.exports.getAllRecipes = async(query) => {
    
    try{
        let recipes = await Recipe.find(query).populate('Category').populate('Member');
        return recipes;
    } catch (e) {
        throw Error('Error while query all Recipes : ${e.message}');
    }
};

//Get one recipe
module.exports.getRecipe = async (query) => {
    try {
        return await Recipe.findOne(query).populate('Category').populate('Member');
    } catch (e) {
        throw Error('Error while query one Recipe :' + e.message)
    }
}

module.exports.getRecipesByCategoryId = async (categoryId) => {
    try {
        const category = await CategoryService.getCategory(categoryId);
        const recipes = await Recipe.find({ Category: category })
                                    .populate('Category')
                                    .populate('Member');
        return recipes;
    } catch (e) {
        throw new Error('Error retrieving recipes by category name: ' + e.message);
    }
};



module.exports.createRecipe = async(recipe) => {
    try{
        return await recipe.save()
    } catch(e) {
        throw Error('Error while creating the recipe : ${e.message}');
    }
};

module.exports.updateRecipe = async(query, recipe) => {
    try{
        await Recipe.updateOne(query, recipe);
        return recipe;
    } catch (e) {
        throw Error('Error while update Member : ${e.message}');
    }
}

module.exports.deleteRecipe = async(query) => {
    try{
        return await Recipe.deleteOne(query)
    } catch(e){
        throw Error('Error while deleting the Recipe : ' + e.message);
    }
};
