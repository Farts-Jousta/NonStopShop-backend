const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myOrderSchema = new Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: 'User' },
  period: String,
  date: Number
});

const MyOrder = mongoose.model('MyOrder', myOrderSchema);

module.exports = MyOrder;