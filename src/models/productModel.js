const mongoose = require('mongoose');
/*{
    _id: ObjectId("61951bfa4d9fe0d34da86344"),
    name:"Catcher in the Rye",
    category:"book",
    price:70 //mandatory property
}*/
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },     
    category: { type: String, required: true },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true })
module.exports = mongoose.model('product', productSchema);

