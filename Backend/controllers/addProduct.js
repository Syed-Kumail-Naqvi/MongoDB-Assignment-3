const productModel = require('../models/productModel');

const addProduct = async (req, res) => {

    const {name, title, description} = req.body ;
    // const file = req.file ;
    try {
        let productadd = await productModel.create({
            name,
            title,
            description,
            // imageURL : `/upload/${file.filename}`
        })

        res.send("Product Added Succesfully!")

    } catch (error) {

        console.log("Error:", error);
          
    }
}

module.exports = addProduct ;