const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

/*Your Order document looks like this.
```
{
	_id: ObjectId("61951bfa4d9fe0d34da86344"),
	userId: “61951bfa4d9fe0d34da86829”,
	productId: “61951bfa4d9fe0d34da86344”
	amount: 0,
	isFreeAppUser: true, 
	date: “22/11/2021”
}
```
*/

const OrderSchema = new mongoose.Schema({
    userId: {type:ObjectId,
        require:true
    },
    productId: {type:ObjectId,
        require:true
    },
    date : {
        type:Date,
        default:Date.now
    }
},{timestamps:true})

module.exports = mongoose.model('Order',OrderSchema)