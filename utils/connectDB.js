const { default: mongoose } = require('mongoose');

const connectDB = () => {
    mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (err) {
            console.log('Connection Error: ', err);
        } else {
            console.log(`DB Connected Successfully`);
        }
    }
    )
}

module.exports = connectDB;