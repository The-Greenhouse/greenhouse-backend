const express = require('express');
const SensorController = require('../controllers/SensorController');
const router = express.Router();


router.route('/getSensorData')
    .get(
        SensorController.GetSensorData
    );

module.exports = router;
