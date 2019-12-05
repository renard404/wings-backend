var express = require('express');
var router = express.Router();
const registrations = require("../controllers/registrationController.js");

router.post("/add", registrations.createParticipant);
router.get('/getAllParticipants', registrations.getAllParticipants);
router.get("/getParticipantDetails/:userName", registrations.getParticipantDetail);

module.exports = router;