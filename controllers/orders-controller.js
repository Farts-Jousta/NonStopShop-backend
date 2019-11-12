const User = require('../models/User');
const Order = require('../models/Order');

const allOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
    res.send(orders)
  } catch (err) {
    res.status(500).send(err)
  }
}

const seedOrders = async (req, res) => {
  try {
    await Order.deleteMany({})
    await Order.insertMany([
      {
        userId: User.find({username: "Piggly Wiggly"})._id,
        period: "Holding",
        date: null
      },
      {
        userId: User.find({username: "Piggly Wiggly"})._id,
        period: "Weekly",
        date: 1
      },
      {
        userId: User.find({username: "Piggly Wiggly"})._id,
        period: "Monthly",
        date: 1
      },
    ])
    console.log(await Order.find({}))
    res.send(await Order.find({}))
  } catch (err) {
    res.status(500).send(err)
  }
}

module.exports = {
  allOrders,
  seedOrders
}