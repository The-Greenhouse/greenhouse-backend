const express = require('express');
const ActuatorController = require('../controllers/ActuatorController');
const router = express.Router();

router.route('/getActuatorData')
    .post(
        ActuatorController.GetActuatorData
    );

                        
module.exports = router;
