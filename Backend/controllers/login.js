let bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
let jwt = require('jsonwebtoken');

const login = async (req, res) => {
    let { userEmail, userPassword } = req.body
    console.log('In Login Controller Section!');

    try {
        let emailMatched = await userModel.findOne({ email: userEmail })
        console.log(emailMatched);    

        if (!emailMatched) {
            return res.status(404).json({ Message : 'Email Not Registered!' })
        }

        let passwordMatched = await bcrypt.compare(userPassword, emailMatched.password);

        if (!passwordMatched) {
            return res.status(404).json({ Message : 'Invalid Password!' })
        }

        const token = jwt.sign({
            userID : emailMatched._id.toString(),
            userName : emailMatched.name,
            userEmail : emailMatched.email,
            userAge : emailMatched.age
        }, process.env.PRIVATEKEY)
    
        console.log("Token:", token);
        

        res.status(200).json({ Message : "Login Successful!"})
    }

    catch (error) {
        console.log("Error:", error);
        res.status(500).json({ Message : error.message})
    }
}

module.exports = login
