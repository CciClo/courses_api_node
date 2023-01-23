const { Router } = require("express");
const { createCategory, deleteCategory } = require("../controllers/categories.controllers");
const authMiddleware = require("../middlwares/auth.middleware");

const router = Router();

router.post('/categories/:id', authMiddleware, createCategory);
router.delete('/categories/:id', authMiddleware, deleteCategory);


module.exports = router;