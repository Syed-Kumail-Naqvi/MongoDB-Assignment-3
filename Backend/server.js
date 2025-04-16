const express = require('express');
const app = express() ;
const router = require('./routes/router');
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json()); // For Parsing JSON Objects
app.use(express.urlencoded({ extended: true }));
app.use('/', router); // Calling Router
const middleware = require('./middleware/auth');
const database = require('./database/database');
const PORT = process.env.PORT ;

database(); // Calling Database

app.listen(PORT, ()=> console.log(`Server is Running on ${PORT}`));