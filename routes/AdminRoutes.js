const express = require('express');

const contactusRoutes = express.Router();

// const contactusController = require('../controllers/contactus.controller');

// contactusRoutes.post('/', errorHandler.wrapAsync(contactusController.someFunctionName));

contactusRoutes.get('/adminTest', (req, res) => {
    res.json({
        test : "test from admin"
    })
});

module.exports = contactusRoutes;