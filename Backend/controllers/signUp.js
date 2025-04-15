const bcrypt = require('bcrypt')
const signupModel = require('../models/userModel')

const signUp = async (req, res) => {
    console.log('In Signup Controller Section!');
    
  let { userName, userEmail, userPassword, userAge } = req.body

  try {
     
     let hashPass = await bcrypt.hash(userPassword, 10)
     console.log('Hashed-Password', hashPass);
        
    let userRegister = await signupModel.create({
        name : userName,
        email : userEmail,
        password : hashPass,
        age : parseInt(userAge)
    })

    res.status(201).json({Message: 'SignUp Sucessful', user : userRegister})
     
  } 
  catch (error) {
    console.log(' Error! ', error);
  }
}

module.exports = signUp ;