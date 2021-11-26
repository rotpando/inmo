const express = require("express");
const AuthController = require("../controllers/auth");
const { isLogin } = require("../middlewares")
const User = require("../models/User");
const passport = require("passport");

const router = express.Router();

router.post("/register", AuthController.register);
router.post("/login", passport.authenticate("local"), AuthController.login);
router.post("/logout", AuthController.logout);
router.get("/me", isLogin, AuthController.me);

module.exports = router;
