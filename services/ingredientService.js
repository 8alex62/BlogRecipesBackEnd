const Ingredient = require("../models/ingredient");

//Get all Ingredients
module.exports.getAllIngredients = async(query) => {
    
    try{
        let ingredients = await Ingredient.find(query);
        return ingredients;
    } catch (e) {
        throw Error('Error while query all Ingredients : ${e.message}');
    }
};

//Get one Ingredient
module.exports.getIngredient = async(query) => {
    try{
        let ingredient = await Ingredient.findOne(query);
        return ingredient;
    } catch (e) {
        throw Error('Error while query the Ingredient : ${e.message}');
    }
};


module.exports.createIngredient = async(ingredient) => {
    try{
        return await ingredient.save();
    } catch(e) {
        throw Error('Error while creating the Ingredient : ${e.message}');
    }
};

module.exports.updateIngredient = async(query, ingredient) => {
    try{
        await Ingredient.updateOne(query, ingredient);
        return ingredient;
    } catch (e) {
        throw Error('Error while update Member : ${e.message}');
    }
}

module.exports.deleteIngredient = async(query) => {
    try{
        return await Ingredient.deleteOne(query)
    } catch(e){
        throw Error('Error while deleting the Ingredient : ${e.message}');
    }
};
