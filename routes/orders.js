const express = require('express');
const router = express.Router();

const { allOrders, seedOrders } = require('../controllers/orders-controller');

router.get("/all", allOrders)

router.post("/seed-orders", seedOrders);

module.exports = router;