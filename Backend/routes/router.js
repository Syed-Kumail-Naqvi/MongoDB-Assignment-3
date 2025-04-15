const express = require('express');
const Router = express.Router();

// Importing All Files
const auth = require('../middleware/auth');
const signUp = require('../controllers/signUp');
const login = require('../controllers/login');

// Signup Route
Router.post('/signup', auth, signUp) ;

// Login Route
Router.post('/login', auth, login) ;

module.exports = Router ;