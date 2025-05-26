const Member = require("../models/member");
// récupère un user
module.exports.getUser = async (query) => {
    try {
        let user = await Member.findOne(query);
        console.log("User found : " + user);
        return user;
    }
    catch(e) {
        throw Error("Error while query the user : " + e);
    }
}
// crée un user
module.exports.createUser = async (user) => {
    try {
        return await user.save();
    }
    catch(e) {
        throw Error("Error while create user : " + e);
    }
}