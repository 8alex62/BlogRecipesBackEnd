const commentService = require("../services/commentService");
const Comment = require("../models/comment");

//Get the list of the Comments
module.exports.getAllComments = async (req, res) => {
    try
    {
        let comments = await commentService.getAllComments();
        return res.status(200).json({status: 200, data: comments, message: "Sucessfully retrieved the Comments list"})
    }
    catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
};

//Get the Comments by the Recipe ID
module.exports.getCommentsByRecipe = async (req, res) => {
    try 
    {
        const comments = await commentService.getCommentsByRecipe({_id: req.params.id });
        return res.status(200).json({status: 200, data: comments, message: "Sucessfully retrieved the Comments list"})
    }
    catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
};

//Get a Comment by its id
module.exports.getComment = async (req, res) => {
    try
    {
        let comment = await commentService.getComment({_recipe: req.params.recipe});
        return res.status(200).json({status: 200, data: comment, message: "Sucessfully retrived the Comment"});
    }
    catch (e) 
    {
        return res.status(400).json({status: 400, message: e.message});
    }
};

//Create a Category
module.exports.createComment = async (req, res) => {
    try{
        let comment = new Comment(req.body);

        let newComment = await commentService.createComment(comment);
        return res.status(200).json({status: 200, data: newComment, message: "Sucessfully created the Comment"});
    }
    catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

// Update a Comment
module.exports.updateComment = async(req, res) => {
    try
    {
        let comment = await commentService.updateComment({_id: req.params.id}, req.body);
        return res.status(200).json({status: 200, data: comment, message: "Sucessfully updated the Comment"});
    }
    catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

// Delete a Comment
module.exports.deleteComment= async (req, res) => {
    try
    {
        let comment = await commentService.deleteComment({_id: req.params.id});
        return res.status(200).json({status: 200, data: comment, message: "Sucessfully deleted the Comment"});
    }
    catch(e)
    {
        return res.status(400).json({status: 400, message: e.message});
    }
}