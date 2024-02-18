const app = require("./../app");
const express = require("express");
const linkController = require("./../controllers/linkController");
const authController = require("./../controllers/authController");

const router = express.Router();

const { addLink, getAllLinksPerUser, getAllLinksPerUserOffline } =
  linkController;
const { protected } = authController;

router
  .route("/links")
  .post(protected, addLink)
  .get(protected, getAllLinksPerUser);

router.route("/offline-links").get(getAllLinksPerUserOffline);

module.exports = router;
