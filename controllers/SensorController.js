const User = require('../models/User');
const Sensor = require('../models/Sensor');
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
    async setSensordata (req,res,next) {
        
        const type = req.body.type;
        const value = req.body.value;
        const sensor = new Sensor({
            type : req.body.type,
            value : req.body.value,
        });
        try{
            const sensordata = await sensor.save();
            res.send({sensor: sensor._id});
        }catch(err){
            res.status(500).send(err);
        }
    }
}