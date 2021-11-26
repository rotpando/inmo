const express = require("express")
const AdminController = require("../controllers/admin")
const {isAdmin} = require("../middlewares")

const router = express.Router()

router.put("/:id", isAdmin, AdminController.promoteAdmin)
router.delete("/:id", isAdmin, AdminController.deleteUser)
router.get("/", isAdmin, AdminController.getAll)

module.exports = router