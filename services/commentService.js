const Comment = require("../models/comment");
const ServiceRecipe = require("../services/recipeService");

//Get all Comments
module.exports.getAllComments = async (query) => {
    try {
        let comments = await Comment.find(query);
        return comments;
    } catch(e) {
        // Log Errors
        throw Error('Error while query all Comments')
    }
}

//Get all the Comments from a Recipe ID
module.exports.getCommentsByRecipe = async(query) => {
    try
    {
        const recipe = await ServiceRecipe.getRecipe(query);
        const comments =  await Comment.find({ Recipe: recipe }).populate('Recipe');                 
        return comments;                    
    } catch(e) {
        // Log Errors
        throw Error('Error while query all Comments')
    }
}

//Get one comment
module.exports.getComment = async(query) => {
    try {
        let comment = await Comment.find(query);
        return comment;
    } catch(e) {
        // Log Errors
        throw Error('Error while query the Comment')
    }
}

// Create a category
module.exports.createComment = async (comment) => {
    try {
        return await comment.save();
    } catch(e) {
        // Log Errors
        throw Error('Error while save Comment')
    }
}
// Update a category
module.exports.updateComment = async (query, comment) => {
    try {
        return await Comment.updateOne(query, comment);
    } catch(e) {
        // Log Errors
        throw Error('Error while update Comment')
    }
}

//Delete a category
module.exports.deleteComment = async (query) => {
    try {
        return await Comment.deleteOne(query);
    } catch(e) {
        // Log Errors
        throw Error('Error while delete Comment')
    }
}