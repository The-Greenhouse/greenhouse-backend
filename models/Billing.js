
const string = require('@hapi/joi/lib/types/string');
const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
    farmId: {
        type: mongoose.Schema.ObjectId,
        requirde: true,
        ref: "Farm"
    },
    currency : {
        type: String,
        required: true,
    },
    billingCycle : {
        type: Number,
        required: true,
    },
    lastPaid : {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Billing', billingSchema);
