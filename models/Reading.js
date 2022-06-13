const mongoose = require('mongoose');

const readingSchema = new mongoose.Schema({    
    date : {
        type: Date,
        required:true,
        default: Date.now
    },
    cacheBlockId : {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "CacheBlock"
    },
});

module.exports = mongoose.model('Reading', readingSchema);

