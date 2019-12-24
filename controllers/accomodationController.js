const Accomodation = require("../models/accomodation");

exports.createAccomodation = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Accomodation content can not be empty"
        });
    }

    const accomodation = new Accomodation({
        id: req.body.id,
        userName: req.body.userName,
        name: req.body.name,
        image: req.body.image,
        gender: req.body.gender,
        email: req.body.email,
        contact: req.body.contact
    });

    accomodation.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Accomodation."
            });
        });
}

exports.getAllAccomodations = (req, res) => {
    Accomodation.find()
        .then(accomodations => {
            res.send(accomodations);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving accomodations."
            });
        });
};

exports.getAccomodationDetail = (req, res) => {
    Accomodation.findById(req.params.accomodationId)
        .then(accomodation => {
            if (!accomodation) {
                return res.status(404).send({
                    message: "Accomodation not found with id " + req.params.accomodationId
                });
            }
            res.send(accomodation);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Accomodation not found with id " + req.params.accomodationId
                });
            }
            return res.status(500).send({
                message: "Error retrieving accomodation with id " + req.params.accomodationId
            });
        });
};