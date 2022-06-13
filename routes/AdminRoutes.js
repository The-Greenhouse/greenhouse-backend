const express = require('express');
const authenticate = require('../utils/authenticate');
const contactusRoutes = express.Router();

contactusRoutes.get('/public', (req, res) => {
    res.json({
        test : "test from admin"
    })
});

contactusRoutes.get('/private', authenticate, (req, res) => {
    res.json({
        test : "test is private"
    })
});

module.exports = contactusRoutes;