const Member = require("../models/member");


module.exports.getAllMembers = async (query) => {
    try {
        let members = await Member.find(query);
        return members;
    } catch (e) {
        throw Error('Error while query all Members : ' + e.message)
    }
}


module.exports.getMember = async (query) => {
    try {
        return await Member.findOne(query);
    } catch (e) {
        throw Error('Error while query one Member :' + e.message)
    }
}


module.exports.createMember = async (member) => {
    try {
        return await member.save(member);
    } catch(e) {
        // Log Errors
        throw Error('Error while saving member : ' + e.message)
    }
}


module.exports.updateMember = async (query, member) => {
    try {
        await Member.updateOne(query, member);
        return member;
    } catch (e) {
        throw Error('Error while update Member :' + e.message)
    }
}


module.exports.deleteMember = async (query) => {
    try {
        return await Member.deleteOne(query);
    } catch (e) {
        throw Error('Error while delete Member :' + e.message)
    }
}