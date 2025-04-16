const userModel = require('../models/userModel')

const auth = async (req, res, next) => {

    console.log('In Middleware Section!');
    
    let { userEmail } = req.body

try {

    let existingEmail = await userModel.findOne({email : userEmail})
    console.log(' Email Already Exists! ', existingEmail);
    

        if(existingEmail){
            return res.status(409).json({ Message : 'Email Already Exists!'})
        }

        next();
}

catch (error) {
    console.log(' Error: ', error);
}

}

module.exports = auth ;