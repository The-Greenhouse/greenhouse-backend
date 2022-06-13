const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema({
    brokerId: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Broker"
    },
    billingId : {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Billing"
    },
    blockId : [
        {
            type: mongoose.Schema.ObjectId,
            required: true,
            ref: "Block",
            default: []
        }
    ],
    userId : {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Farm', farmSchema);

