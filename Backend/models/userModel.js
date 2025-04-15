const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : String, 
    email : String, 
    password: String, 
    age : Number
})

const signupModel = mongoose.model('Users: ', userSchema) ;

module.exports = signupModel ;