const express = require('express'); // import express
const dotenv = require('dotenv').config(); // import dotenv
const colors = require('colors'); // import colors
const {errorHandler} = require('./middleware/errorMiddleware'); // custom error handler
const port = process.env.PORT || 6000; // set our port
const app = express();
const connectDB = require('./config/db'); // import db connection

connectDB(); // connect to db

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

app.use('/posts', require('./routes/postRoutes')); // use postRoutes
app.use('/users', require('./routes/userRoutes')); // use userRoutes
app.use('/admin',require('./routes/adminRoutes'))
app.use(errorHandler); // Error handler

app.listen(port, () => console.log(`Server running on port : ${port}`)); // start the server