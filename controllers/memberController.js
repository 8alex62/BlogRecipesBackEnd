const memberService = require("../services/memberService");
const Member = require("../models/member");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

module.exports.getAllMembers = async (req, res) => {
    try {
        let members = await memberService.getAllMembers();
        return res.status(200).json({ status: 200, data: members, message: "Succesfully Members Retrieved" });
    }
    catch(e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

module.exports.getMember = async (req, res) => {
    try {
        let member = await memberService.getMember({ _id: req.params.id });


        if (member == null) {
            return res.status(404).json({ status: 404, message: "Member not found" });
        }

        return res.status(200).json({ status: 200, data: member, message: "Succesfully Member Retrieved" });
    }
    catch(e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

module.exports.login = async (req, res) => {
    try {
        const password = req.body.password;
        let member = await memberService.getMember({ email: req.body.email });

        if (!member)
        {
            console.log("Something bad happened " + req.body.email);
            return res.status(401).json({ error: 'Authentication failed username' });
        }
        const passwordMatch = await bcrypt.compare(password, member.password);

        if (!passwordMatch)
        {
            return res.status(401).json({ error: 'Authentication failed password failed' });
        }
        // crée et retourne le token
        const token = jwt.sign({ memberId: member._id }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRATION});
        return res.status(200).json({ token, member });
    }
    catch(e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};


module.exports.createMember = async (req, res) => {
    try {

        let salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        let member = new Member(req.body);

        await memberService.createMember(member);
        const token = jwt.sign({ memberId: member._id }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRATION});
        return res.status(200).json({ token, member });
    }
    catch(e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

module.exports.updateMember = async (req, res) => {
    try {

        let salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);

        let member = await memberService.updateMember({ _id: req.params.id }, req.body);
        return res.status(200).json({ status: 200, data: member, message: "Succesfully Member Updated" });
    }
    catch(e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

module.exports.deleteMember = async (req, res) => {
    try {
        let member = await memberService.deleteMember({ _id: req.params.id });

        if (member == null) {
            return res.status(404).json({ status: 404, message: "Member not found" });
        }

        return res.status(200).json({ status: 200, data: member ,message: "Succesfully Member Deleted" });
    }
    catch(e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};
