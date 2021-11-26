const express = require("express")
const router = express.Router()
const UsersController = require("../controllers/users")

router.post("/addcourses/:userId", UsersController.addCoursesToUser)
router.put("/:id",UsersController.editUser)

router.post("/sendmail/:userId", UsersController.sendMail)

//----------rutas para las órdenes(userCourses) del user----------
router.post("/adduserorders", UsersController.addCoursesToUserOrders)
router.get("/getuserorders/:userId", UsersController.getUserOrders)
router.get("/getcoursesfromorders/:userId", UsersController.getCoursesFromOrders)
router.get("/getmycourses/:userId", UsersController.getMyCourses)

module.exports=router