const productModel = require("../models/productModel");

const getProducts = async (req, res) => {
    try {
        let allProducts = await productModel.find();
        console.log('All Products:', allProducts);

        res.json({ Data: allProducts })
    }
    catch (error) {

        console.log('catch', error);
        res.json({ Message: error.message })

    }

}

module.exports = getProducts