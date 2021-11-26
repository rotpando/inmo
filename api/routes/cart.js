const express = require("express")
const CartController = require("../controllers/cart")

const router = express.Router()

router.post("/addtocart/:userId/:courseId", CartController.addToCart)
router.post("/addcourses/:userId", CartController.addCoursesToCart)
router.delete("/:userId/:courseId", CartController.removeCourseFromCart)
router.delete("/:userId", CartController.removeCoursesFromCart)
router.get("/:userId/courses", CartController.getCoursesFromCart)

module.exports = router