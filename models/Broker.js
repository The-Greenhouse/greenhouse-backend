const mongoose = require('mongoose');

const brokerSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    port: {
        type: String,
        required: true
    },
    farmId : {
        type: mongoose.Schema.ObjectId,
        require: true,
        ref: "Farm"
    }
});

module.exports = mongoose.model('Broker', brokerSchema);

