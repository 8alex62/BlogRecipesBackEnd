const categoryService = require("../services/categoryService");
const Category = require("../models/category");

//Get the list of the Category
module.exports.getAllCategory = async (req, res) => {
    try
    {
        let categories = await categoryService.getAllCategory();
        return res.status(200).json({status: 200, data: categories, message: "Sucessfully Category retrived list"})
    }
    catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
};

//Get a Category
module.exports.getCategory = async (req, res) => {
    try
    {
        let category = await categoryService.getCategory({_id: req.params.id});
        return res.status(200).json({status: 200, data: category, message: "Sucessfully retrived the Category"});
    }
    catch (e) 
    {
        return res.status(400).json({status: 400, message: e.message});
    }
};

//Create a Category
module.exports.createCategory = async (req, res) => {
    try{
        let category = new Category(req.body);

        //crée le user dans mangoDB
        let newCategory = await categoryService.createCategory(category);
        return res.status(200).json({status: 200, data: newCategory, message: "Sucessfully created the Category"});
    }
    catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

// Update a Category
module.exports.updateCategory = async(req, res) => {
    try
    {
        let category = await categoryService.updateCategory({_id: req.params.id}, req.body);
        return res.status(200).json({status: 200, data: category, message: "Sucessfully updated the Category"});
    }
    catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

// supprime un user
module.exports.deleteCategory= async (req, res) => {
    try
    {
        let category = await categoryService.deleteCategory({_id: req.params.id});
        return res.status(200).json({status: 200, data: category, message: "Sucessfully deleted the Category"});
    }
    catch(e)
    {
        return res.status(400).json({status: 400, message: e.message});
    }
}

