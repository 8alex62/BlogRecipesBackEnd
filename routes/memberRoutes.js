const express = require("express");
const router = express.Router();
const memberController = require("../controllers/memberController");

router.get("/all", memberController.getAllMembers);
router.get("/:id", memberController.getMember);
router.post("/login", memberController.login);
router.post("/register", memberController.createMember);
router.put("/:id", memberController.updateMember);
router.delete("/:id", memberController.deleteMember);

module.exports = router;