const express = require("express");
const router = express.Router();
// Import the Controller
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.getAllCategory);
router.get("/:id", categoryController.getCategory);
router.post("/", categoryController.createCategory);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);
// export des routes contenu dans le router
module.exports = router;