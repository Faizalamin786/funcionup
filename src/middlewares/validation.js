/*
NOTE: In some of the below apis a header validation is to be performed (create user and create order). The name of the header is ‘isFreeAppUser’. Write a header validation that simply checks whether this header is present or not. Please note this validation should only be called in create user and create order apis. Perform this validation in a middleware.
*/

const userModel = require("../models/userModel")
const productModel = require("../models/productModel")

const validationHeader = async function (req, res, next) {
    if ((req.originalUrl === '/createUser' && req.method ==="Post") ||( req.originalUrl === '/createOrder' && req.method ==="Post")) {
        if ( ! req.headers.hasOwnProperty('isFreeAppUser')) {
            return res.status(400).json({ message: 'Header is not present' })
        }
    }
    next()
}

const userExists = async function (req, res, next) {
    if (await userModel.findById(req.body.userId)){
        next()
    }
    else {
        return res.status(400).json({ message: 'User does not exist' })
    }
}

const productExists = async function (req, res, next) {
    if (await productModel.findById(req.body.productId)) {
        next()
    }
    else {
        return res.status(400).json({ message: 'Product does not exist' })
    }
}

module.exports.validationHeader = validationHeader
module.exports.userExists = userExists
module.exports.productExists=productExists
