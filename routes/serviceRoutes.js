const express = require("express");
const router = express.Router();
const { getAllServices, addDummyService } = require("../controllers/serviceController");

router.get("/", getAllServices);
router.post("/add", addDummyService);

module.exports = router;
