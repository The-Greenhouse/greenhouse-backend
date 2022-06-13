const mongoose = require('mongoose');

const actuatorSchema = new mongoose.Schema({
    // farm environmental variables
    type: {
        type: String,
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
    lastActivity : {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Actuator', actuatorSchema);

