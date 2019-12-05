const Participant = require("../models/registration");

exports.createParticipant = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Participant content can not be empty"
        });
    }

    const participant = new Participant({
        id: req.body.id,
        userName: req.body.userName,
        name: req.body.name,
        image: req.body.image,
        event: req.body.event,
        email: req.body.email,
        contact: req.body.contact,
    });

    participant.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Participant."
            });
        });
}

exports.getAllParticipants = (req, res) => {
    Participant.find({}, {_id: 1, id: 1, userName: 1, name: 1, image: 1, contact: 1})
        .then(participants => {
            res.send(participants);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving events."
            });
        });
};

exports.getParticipantDetail = (req, res) => {
    Participant.find({"userName":req.params.userName})
        .then(participant => {
            if (!participant) {
                return res.status(404).send({
                    message: "Participant not found with id " + req.params.participantId
                });
            }
            res.send(participant);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Participant not found with id " + req.params.participantId
                });
            }
            return res.status(500).send({
                message: "Error retrieving participant with id " + req.params.participantId
            });
        });
};