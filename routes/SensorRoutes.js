const express = require('express');
const SensorController = require('../controllers/SensorController');
const authenticate = require('../utils/authenticate');
const router = express.Router();


router.route('/getSensorData')
    .get(
        authenticate, 
        SensorController.GetSensordata
    );

module.exports = router;
