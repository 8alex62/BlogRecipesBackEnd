const Category = require("../models/category");

//Get all categories
module.exports.getAllCategory = async(query) => {
    try {
        let categories = await Category.find(query);
        return categories;
    } catch(e) {
        // Log Errors
        throw Error('Error while query all Category')
    }
}

//Get one category
module.exports.getCategory = async(query) => {
    try {
        let categories = await Category.findOne(query);
        return categories;
    } catch(e) {
        // Log Errors
        throw Error('Error while query the Category')
    }
}



// Create a category
module.exports.createCategory = async (category) => {
    try {
        return await category.save();
    } catch(e) {
        // Log Errors
        throw Error('Error while save Category')
    }
}



// Update a category
module.exports.updateCategory = async (query, category) => {
    try {
        return await Category.updateOne(query, category);
    } catch(e) {
        // Log Errors
        throw Error('Error while update Category')
    }
}

//Delete a category
module.exports.deleteCategory = async (query) => {
    try {
        return await Category.deleteOne(query);
    } catch(e) {
        // Log Errors
        throw Error('Error while delete Category')
    }
}