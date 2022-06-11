const express = require('express');

const contactusRoutes = express.Router();

// const contactusController = require('../controllers/contactus.controller');

// contactusRoutes.post('/', errorHandler.wrapAsync(contactusController.someFunctionName));

contactusRoutes.get('/authTest', (req, res) => {
    res.json({
        test : "test from auth"
    })
});

module.exports = contactusRoutes;