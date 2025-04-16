const express = require('express');
const Router = express.Router();

// Importing All Files
const auth = require('../middleware/auth');
const signUp = require('../controllers/signUp');
const login = require('../controllers/login');
const addProduct = require('../controllers/addProduct');
const getProducts = require('../controllers/getProduct');

// Signup Route
Router.post('/signup', auth, signUp) ;

// Login Route
Router.post('/login', login) ;

// Add-Product Route
Router.post('/addProduct', addProduct);

// Show-Product Route
Router.get('/showProduct', getProducts);

module.exports = Router ;