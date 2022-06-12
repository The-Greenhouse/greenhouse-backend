const mongoose = require('mongoose');

const brokerchema = new mongoose.Schema({
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
        ref: "Broker"
    }
});

module.exports = mongoose.model('Farm', brokerSchema);

