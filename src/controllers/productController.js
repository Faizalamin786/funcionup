const productModel = require ('../models/productModel')


//- Write a POST api to create a product from the product details in request body.
const createProduct  = async function(req, res) {
        const savedProduct = await productModel.create(req.body);
        res.send({msg : savedProduct})
}
module.exports.createProduct = createProduct