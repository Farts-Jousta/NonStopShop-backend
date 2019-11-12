const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../initializers/auth.js');

const { index, allProducts, newProduct, myProducts, updateProduct, deleteProduct, seedProducts } = require('../controllers/products-controller');

router.get('/test', index);

router.get("all", allProducts);

router.get("/user", ensureAuthenticated, myProducts);

router.post("/new", ensureAuthenticated, newProduct);

router.patch("/update/:id", ensureAuthenticated, updateProduct);

router.delete("/delete/:id", ensureAuthenticated, deleteProduct);

router.post("/seed", seedProducts)

module.exports = router;