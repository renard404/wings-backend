var express = require('express');
var router = express.Router();
const accomodations = require("../controllers/accomodationController");

router.post("/add", accomodations.createAccomodation);
router.get("/getAllAccomodations", accomodations.getAllAccomodations);
router.get("/getAccomodation/:accomodationId", accomodations.getAccomodationDetail);

module.exports = router;