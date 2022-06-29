const express = require('express');
const AuthRoutes = require('./AuthRoutes');
const AdminRoutes = require('./AdminRoutes');
const SensorRoutes = require('./SensorRoutes');
// const ActuatorController = require('../controllers/ActuatorController');

const apiRouter = express.Router();

apiRouter.use('/auth', AuthRoutes);
apiRouter.use('/admin', AdminRoutes);
apiRouter.use('/sensor', SensorRoutes);
// apiRouter.use('/actuator', ActuatorController);

module.exports = apiRouter;