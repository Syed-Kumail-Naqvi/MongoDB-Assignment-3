const mongoose = require('mongoose')

let productSchema = mongoose.Schema({
    name : String,
    title : String,
    description : String,
    imageUrl: String
});

module.exports = mongoose.model('Products:', productSchema) ;