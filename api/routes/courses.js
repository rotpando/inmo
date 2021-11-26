const express = require("express")
const CoursesController = require("../controllers/courses")

const router = express.Router()

//rutas de cursos
router.get("/getall", CoursesController.getAllCourses)
router.get("/:id", CoursesController.getCourse)
router.get("/:coursetitle", CoursesController.getCoursesFromTitle)
router.post("/add", CoursesController.addCourse)
router.put("/:id", CoursesController.updateCourse)
router.delete("/:id", CoursesController.deleteCourse)
router.get("/checkifpurchased/:courseId", CoursesController.checkIfPurchased)

//rutas p/asignar categorias a los cursos y acceder a cursos x categ
router.post("/addcategory/:courseId/:categoryId", CoursesController.addCategoryToCourse)
router.get("/category/:category", CoursesController.getCoursesFromCategory)


module.exports = router