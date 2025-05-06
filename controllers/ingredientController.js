const ingredientService = require("../services/ingredientService");
const Ingredient = require("../models/ingredient");


//Get the list of the Ingredients
module.exports.getAllIngredients = async (req, res) => {
    try
    {
        let ingredients = await ingredientService.getAllIngredients();
        return res.status(200).json({status: 200, data: ingredients, message: "Sucessfully retrieved the Ingredients list"})
    }
    catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
};

//Get a Ingredient by its id
module.exports.getIngredient = async (req, res) => {
    try
    {
        let ingredient = await ingredientService.getIngredient({_recipe: req.params.recipe});
        return res.status(200).json({status: 200, data: ingredient, message: "Sucessfully retrived the Ingredient"});
    }
    catch (e) 
    {
        return res.status(400).json({status: 400, message: e.message});
    }
};

//Create a Ingredient
module.exports.createIngredient = async (req, res) => {
    try{
        let ingredient = new Ingredient(req.body);

        let newIngredient = await ingredientService.createIngredient(ingredient);
        return res.status(200).json({status: 200, data: newIngredient, message: "Sucessfully created the Ingredient"});
    }
    catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

// Update a Ingredient
module.exports.updateIngredient = async(req, res) => {
    try
    {
        let ingredient = await ingredientService.updateIngredient({_id: req.params.id}, req.body);
        return res.status(200).json({status: 200, data: ingredient, message: "Sucessfully updated the Ingredient"});
    }
    catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

// Delete a Ingredient
module.exports.deleteIngredient= async (req, res) => {
    try
    {
        let ingredient = await ingredientService.deleteIngredient({_id: req.params.id});
        return res.status(200).json({status: 200, data: ingredient, message: "Sucessfully deleted the Ingredient"});
    }
    catch(e)
    {
        return res.status(400).json({status: 400, message: e.message});
    }
}