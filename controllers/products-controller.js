const MyProduct = require('../models/MyProduct')
const User = require('../models/User');
const Order = require('../models/Order');

const index = (req, res) => {
  res.send('api works')
}

const allProducts = async (req, res) => {
  try {
    const products = await MyProduct.find({})
    res.send(products)
  } catch (err) {
    res.status(500).send(err)
  }
}

const myProducts = async (req, res) => {
  try {
    const products = await MyProduct.find({userId: req.body.user._id})
    res.send(products)
  } catch (err) {
    res.status(500).send(err)
  }
}

const newProduct = async (req, res) => {
  try {
    await MyProduct.create({
        userId: req.user._id,
        productId: req.body.productId,
        quantity: 1,
        orderId: await Order.find({period: "Holding"})
    });
  } catch (err) {
      res.status(500).send(err);
  };
}

const updateProduct = async (req, res) => {
  const { id, quantity, orderId } = req.body;
  const myProduct = MyProduct.findById(id)
  const product = {
    userId: myProduct.userId,
    productId: myProduct.productId,
    quantity,
    orderId
  };
  try {
    await MyProduct.findByIdAndUpdate(req.body.id, product, {new:true});
  } catch (err) {
    res.status(500).send(err);
  };
}

const deleteProduct = async (req, res) => {
  try {
    await MyProduct.findByIdAndDelete(req.param.id);
  } catch (err) {
    res.status(500).send(err);
  };
}

const seedProducts = async (req, res) => {
  try {
    await MyProduct.deleteMany({})
    await MyProduct.insertMany([
      {
        userId: User.find({username: "Piggly Wiggly"})._id,
        productId: "lol, no products yet",
        quantity: 4,
        orderId: Order.find({period: "Weekly"})._id
      },
      {
        userId: User.find({username: "Piggly Wiggly"})._id,
        productId: "still no products",
        quantity: 3,
        orderId: Order.find({period: "Monthy"})._id
      },
    ])
    console.log(await MyProduct.find({}))
    res.send(await MyProduct.find({}))
  } catch (err) {
    res.status(500).send(err)
  }
}

module.exports = {
  index,
  allProducts,
  myProducts,
  newProduct,
  updateProduct,
  deleteProduct,
  seedProducts
}