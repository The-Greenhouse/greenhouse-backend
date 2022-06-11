const express = require('express');
const AuthRoutes = require('./AuthRoutes');
const AdminRoutes = require('./AdminRoutes');

const apiRouter = express.Router();

apiRouter.use('/', AuthRoutes);
apiRouter.use('/', AdminRoutes);

module.exports = apiRouter;