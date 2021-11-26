const express = require("express")
const CategoriesController = require("../controllers/categories")

const router = express.Router()

router.post("/add", CategoriesController.addCategory)
router.get("/", CategoriesController.getCategories)
router.delete("/:id", CategoriesController.removeCategory)
router.put("/:id", CategoriesController.updateCategory)


module.exports = router