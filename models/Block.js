const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
    locationTag: {
        type: String,
    },
    sensors: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Sensor",
            default: []
        }
    ],
    actuators: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Actuator",
            default: []
        }
    ],
    data : {
        count : {
            type : Number,
            default : 0,
            required: true,
        },
        avg_value : {
            type: mongoose.Schema.Types.Decimal128,
            required: true
        },
        last_updated : {
            type : Date,
            default : Date.now
        }
    }
});

module.exports = mongoose.model('Block', blockSchema);
