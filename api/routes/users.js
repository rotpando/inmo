const express = require("express")
const router = express.Router()
const UsersController = require("../controllers/users")

router.post("/addcourses/:userId", UsersController.addCoursesToUser)
router.put("/:id",UsersController.editUser)

router.post("/sendmail/:userId", UsersController.sendMail)

module.exports=router