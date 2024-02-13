const app = require("./../app");
const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

const { signup, verifyEmail, login } = authController;

router.route("/signup").post(signup);
router.route("/verify-email").get(verifyEmail);
router.route("/login").post(login);

module.exports = router;
