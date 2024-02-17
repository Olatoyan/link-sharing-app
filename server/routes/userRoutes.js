const app = require("./../app");
const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

const { signup, verifyEmail, login, protected } = authController;
const { updateProfile } = userController;

router.route("/signup").post(signup);
router.route("/verify-email").get(verifyEmail);
router.route("/login").post(login);
router.route("/profile-update").patch(protected, updateProfile);

module.exports = router;
