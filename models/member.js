const mongoose = require('mongoose');

const memberSchema = mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        registrationDate : {type: Date, required: false, default: Date.now()}
    }
);

module.exports = mongoose.model("Member", memberSchema);