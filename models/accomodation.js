var mongoose = require("mongoose");
var Accomodation = mongoose.Schema;

var accomodation = new Accomodation({
    id: {type: String},
    userName: {type: String, required: true},
    name: {type: String, required: true},
    image: {type: String},
    gender: {type: String, required: true},
    email: {type: String},
    contact: {type: Number}
})

module.exports = mongoose.model("Accomodation", accomodation);