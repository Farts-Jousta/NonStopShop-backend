const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myProductSchema = new Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: 'User' },
  productId: String,
  quantity: Number,
  orderId: { type: mongoose.Schema.ObjectId, ref: 'Order' },
});

const MyProduct = mongoose.model('MyProduct', myProductSchema);

module.exports = MyProduct;