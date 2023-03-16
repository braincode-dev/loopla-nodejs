const express = require("express");
const rateController = require("../controllers/rateController");

const router = express.Router();

router.route("/")
  .get(rateController.getAllRates);

module.exports = router;
