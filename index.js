const express = require('express');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

// Middlewares
app.use(express.json());

// Impirting Routes
app.use('/api', require('./routes/index'));

// Connect to DB
require('./utils/connectDB')();

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));