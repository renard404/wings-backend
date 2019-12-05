var mongoose = require("mongoose");
var Registration = mongoose.Schema;

var registration = new Registration({
    id: {type: String},
    userName: {type: String, required: true},
    name: {type: String, required: true},
    image: {type: String},
    event: {type: String, required: true},
    email: {type: String},
    contact: {type: Number}
})

module.exports = mongoose.model("Registration", registration);