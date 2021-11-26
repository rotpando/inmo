const express = require("express")

const auth = require("./auth")
const users = require("./users")
const admin = require("./admin")
const cart = require("./cart")
const categories = require("./categories")

const router = express.Router()

router.use("/auth", auth)
router.use("/courses", courses)
router.use("/users", users)
router.use("/admin", admin)
router.use("/cart", cart)
router.use("/categories", categories)

module.exports = router