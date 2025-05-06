const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        picture: { type: String, required: true},
        creationDate : {type: Date, required: false, default: Date.now()},
        Category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
        Member: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true }
    }
);

module.exports = mongoose.model("Recipe", recipeSchema);