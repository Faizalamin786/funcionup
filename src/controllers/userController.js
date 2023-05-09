const userModel = require('../models/userModel')




const basicCode = async function (req, res) {

    let contentTypeHeader = req.headers.content - type
    console.log("The headers received in this request are: ", req.headers)
    console.log("The content type header is: ", contentTypeHeader)


    req.headers.month = "December"
    req.batch = "Californium"

    console.log("The headers modified from this request are: ", req.headers)
    // let tokenDataInHeaders= req.headers.token
    // console.log(tokenDataInHeaders)
    res.header("year", "2022")
    console.log("HEADER DATA ABOVE")
    console.log("hey man, congrats you have reached the Handler")

    console.log("The request object looks like this: ", req)
    res.send({ msg: "This is coming from controller (handler)" })

}









/*Write a POST api to create a user that takes user details from the request body. If the header **isFreeAppUser** is not present terminate the request response cycle with an error message that the request is missing a mandatory header. The value of field isFreeAppUser is determined by **isFreeAppUser** request header.
*/

const createUser = async function (req, res) {
    const isFreeAppUser = req.headers.isfreeappuser
    const { name, balance, age, gender, address } = req.body
    const userDetails = {
        name,
        balance,
        age,
        gender,
        address,
        isFreeAppUser : isFreeAppUser
    }
    const user  = await userModel.create(userDetails)
    res.send({ msg: user })

}


const getUsersData = async function (req, res) {
    let allUsers = await UserModel.find()
    res.send({ msg: allUsers })
}

module.exports.createUser = createUser
module.exports.getUsersData = getUsersData
module.exports.basicCode = basicCode