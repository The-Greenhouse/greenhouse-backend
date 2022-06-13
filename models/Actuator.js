const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        ref: "farm_variable_type"
    },
    value : {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
    },
    blockId : {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
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

module.exports = mongoose.model('Billing', billingSchema);

