const app = require("./../app");
const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

const {
  signup,
  verifyEmail,
  login,
  protected,
  forgotPassword,
  resetPassword,
  logout,
} = authController;
const { updateProfile, getUserProfile, getUserProfileOffline } = userController;

router.route("/signup").post(signup);
router.route("/verify-email").get(verifyEmail);
router.route("/login").post(login);

router.route("/logout").post(logout);

router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword").patch(resetPassword);

router.route("/profile-update").patch(protected, updateProfile);
router.route("/profile-update").get(protected, getUserProfile);
router.route("/offline-profile").get(getUserProfileOffline);

module.exports = router;
