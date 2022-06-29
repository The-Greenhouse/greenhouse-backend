const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SensorServiceWorker = require('../utils/SensorServiceWorker');
var http = require('http'),
queryString = require('querystring');

module.exports = {
    
    async GetSensordata(req, res, next) {
        const sDate = req.query.startdate;
        const eDate = req.query.enddate;
        const data = await SensorServiceWorker(sDate,eDate);
        return res.status(200)
            .json({
                status: true,
                message: 'Notification listing',
                payload : data
            });
    },
}