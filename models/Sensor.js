
const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
    // farm environmental variables
    type: {
        type: String,
        required: true,
    },
    value : {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
    },
    blockId : {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref:"Block"
    },
    dateInstalled : {
        type: Date,
        required: true,
        default: Date.now
    },
    dateLastMaintained : {
        type: Date,
        default: Date.now
    },
    lastPing : {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Sensor', sensorSchema);

