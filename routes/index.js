const express = require('express');
const AuthRoutes = require('./AuthRoutes');
const AdminRoutes = require('./AdminRoutes');
const SensorController = require('../controllers/SensorController');
const ActuatorController = require('../controllers/ActuatorController');

const apiRouter = express.Router();

apiRouter.use('/auth', AuthRoutes);
apiRouter.use('/admin', AdminRoutes);
apiRouter.use('/sensor', SensorController);
apiRouter.use('/actuator', ActuatorController);

module.exports = apiRouter;