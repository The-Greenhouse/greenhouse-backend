const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    farmId: [
        {
            type: mongoose.Schema.ObjectId,
            required: true,
            ref: "Farm",
            default: []
        }
    ],
});

module.exports = mongoose.model('User', userSchema);

