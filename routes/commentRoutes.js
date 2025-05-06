const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.get("/", commentController.getAllComments);
router.get("/:id", commentController.getComment);
router.get("/Recipe/:id", commentController.getCommentsByRecipe);
router.post("/", commentController.createComment);
router.put("/:id", commentController.updateComment);
router.delete("/:id", commentController.deleteComment);

module.exports = router;