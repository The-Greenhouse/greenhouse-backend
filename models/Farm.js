const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema({
    brokerId: {
        type: mongoose.Schema.ObjectId,
        require: true,
        ref: "Broker"
    },
    billingId : {
        type: mongoose.Schema.ObjectId,
        require: true,
        ref: "Broker"
    },
    blockId : [
        {
            type: mongoose.Schema.ObjectId,
            require: true,
            ref: "farm",
            default: []
        }
    ],
    userId : {
        type: mongoose.Schema.ObjectId,
        require: true,
        ref: "User"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Farm', farmSchema);

