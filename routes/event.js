var express = require('express');
var router = express.Router();
const events = require("../controllers/eventController.js");

router.post("/add", events.createEvent);
router.get("/getAllEvents", events.getAllEvents);
router.get("/getEvent/:eventId", events.getEventDetail);

module.exports = router;