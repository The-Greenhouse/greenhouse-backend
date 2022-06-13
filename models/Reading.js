const mongoose = require('mongoose');

const readingSchema = new mongoose.Schema({    
    date : {
        type: Date,
        required:true,
        default: Date.now
    },
    avg_value : {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Reading', readingSchema);

