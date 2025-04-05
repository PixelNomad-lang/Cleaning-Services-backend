const express = require("express");
const router = express.Router();
const { submitContactForm } = require("../controllers/contactController");

router.post("/", submitContactForm);

module.exports = router;
