const routes = require('express').Router();
const db = require("../models");
const registration = require('../controllers/registration.controller')

routes.post('/registration', registration.create);

// Retrieve all registration
routes.get('/registration', registration.findAll);

// Retrieve a single Registration with registrationId
routes.get('/registration/:registrationId', registration.findOne);

// Retrieve a single Registration with vehical number
routes.get('/registration/vehical/:vehicalNo', registration.findByVehicalNo);

// Update a Registration with registrationId
routes.put('/registration/:registrationId', registration.update);

// Delete a Registration with registrationId
routes.delete('/registration/:registrationId', registration.delete);

// Update a Registration with vehicalNo
routes.delete('/registration/vehicalNo/:vehicalNo', registration.deleteByVehicalNo);

// Delete All Registrations
routes.delete('/registration/:registrationId', registration.delete);

module.exports = routes;
