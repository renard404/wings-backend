const Event = require("../models/event");

exports.createEvent = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Event content can not be empty"
        });
    }

    const event = new Event({
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        department: req.body.department,
        ruleBook: req.body.ruleBook,
        contacts: req.body.contacts,
        eligibility: req.body.eligibility
    });

    event.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Event."
            });
        });
}

exports.getAllEvents = (req, res) => {
    Event.find({}, {_id: 1, id: 1, name: 1, image: 1})
        .then(events => {
            res.send(events);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving events."
            });
        });
};

exports.getEventDetail = (req, res) => {
    Event.findById(req.params.eventId)
        .then(event => {
            if (!event) {
                return res.status(404).send({
                    message: "Event not found with id " + req.params.eventId
                });
            }
            res.send(event);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Event not found with id " + req.params.eventId
                });
            }
            return res.status(500).send({
                message: "Error retrieving event with id " + req.params.eventId
            });
        });
};