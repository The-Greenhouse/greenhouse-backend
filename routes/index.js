const express = require('express');
const AuthRoutes = require('./AuthRoutes');
const AdminRoutes = require('./AdminRoutes');

const apiRouter = express.Router();

apiRouter.use('/auth', AuthRoutes);
apiRouter.use('/admin', AdminRoutes);

module.exports = apiRouter;