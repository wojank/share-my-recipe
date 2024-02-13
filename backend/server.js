const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();
const app = express();

app.use('/api/user', require('./routes/userRoutes'));

app.listen(port, () => {
	console.log(`Aplikacja działa na porcie ${port}`);
});
