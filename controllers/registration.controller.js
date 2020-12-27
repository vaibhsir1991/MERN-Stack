const {
    endOfDay
} = require("date-fns");
const db = require("../models");
const Registration = db.registration;

const getValidity = () => {
    const validDate = endOfDay(new Date());
    return validDate;
}

// Create and Save a new Registration
exports.create = (req, res) => {
    // Validate request
    if (!req.body.vehicalNo) {
        return res.status(400).send({
            message: "Registration data is not correct!"
        });
    }

    // Create a Registration
    const registration = new Registration({
        vehicalNo: req.body.vehicalNo,
        amount: req.body.isReturn ? 200 : 100,
        isReturn: req.body.isReturn || false,
        validTill: getValidity()
    });

    // Save Registration in the database
    registration.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Registration."
            });
        });
};

// Retrieve all Registration from the database.
exports.findAll = (req, res) => {
    Registration.find()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving data."
            });
        });
};

// Find a single Registration with an id
exports.findOne = (req, res) => {
    Registration.findById(req.params.registrationId)
        .then(registration => {
            if (!registration) {
                return res.status(404).send({
                    message: "Registration not found with id " + req.params.registrationId
                });
            }
            res.send(registration);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Registration not found with id " + req.params.registrationId
                });
            }
            return res.status(500).send({
                message: "Error retrieving registration with id " + req.params.registrationId
            });
        });
};

exports.findByVehicalNo = (req, res) => {
    Registration.findOne({
            vehicalNo: req.params.vehicalNo
        })
        .then(registration => {
            if (!registration) {
                return res.status(404).send({
                    message: "Registration not found with number " + req.params.vehicalNo
                });
            }
            res.send(registration);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Registration not found with number " + req.params.vehicalNo
                });
            }
            return res.status(500).send({
                message: "Error retrieving registration with number " + req.params.vehicalNo
            });
        });
};


// Update a Registration by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.vehicalNo) {
        return res.status(400).send({
            message: "Registration data is not correct!"
        });
    }

    // Find registration and update it with the request body
    Registration.findByIdAndUpdate(req.params.registrationId, {
            vehicalNo: req.body.vehicalNo,
            amount: req.body.isReturn ? 200 : 100,
            isReturn: req.body.isReturn,
            validTill: getValidity()
        }, {
            new: true
        })
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: "Registration not found with id " + req.params.registrationId
                });
            }
            res.send(registration);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Registration not found with id " + req.params.registrationId
                });
            }
            return res.status(500).send({
                message: "Error updating registration with id " + req.params.registrationId
            });
        });
};

// Delete a Registration with the specified vehicalNo in the request
exports.deleteByVehicalNo = (req, res) => {
    Registration.findOneAndRemove({
            vehicalNo: req.params.vehicalNo
        })
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: "Registration not found with vehicalNo " + req.params.vehicalNo
                });
            }
            res.send({
                message: "Registration deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Registration not found with vehicalNo " + req.params.vehicalNo
                });
            }
            return res.status(500).send({
                message: "Could not delete registration with vehicalNo " + req.params.vehicalNo
            });
        });
};

// Delete a Registration with the specified id in the request
exports.delete = (req, res) => {
    Registration.findByIdAndRemove(req.params.registrationId)
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: "Registration not found with id " + req.params.registrationId
                });
            }
            res.send({
                message: "Registration deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Registration not found with id " + req.params.registrationId
                });
            }
            return res.status(500).send({
                message: "Could not delete registration with id " + req.params.registrationId
            });
        });
};

// Delete all Registration from the database.
exports.deleteAll = (req, res) => {
    Registration.deleteAll()
        .then(data => {
            res.send({
                message: "All Registrations deleted successfully!"
            });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Registration."
            });
        });
};
