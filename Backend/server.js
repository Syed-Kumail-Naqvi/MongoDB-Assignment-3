const express = require('express');
const app = express() ;

const dotenv = require('dotenv');
dotenv.config();

const router = require('./routes/router')
const middleware = require('./middleware/auth')
const database = require('./database/database')
const PORT = process.env.PORT ;

app.use(express.json()); // For Parsing JSON Objects
app.use('/', router);
database() // Calling Database

app.listen(PORT, ()=> console.log(`Server is Running on ${PORT}`));