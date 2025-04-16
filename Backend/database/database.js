const mongoose = require('mongoose') ;
const URI = process.env.URI ;

const dbConnect = async () => {

    try {

        console.log("In Database Connectivity Section!!");
        await mongoose.connect(URI);
        console.log("Database Connected!");
        
    } catch (error) {
        
        console.log("Database Not Connected!", error);
        
    }
}

module.exports = dbConnect ;