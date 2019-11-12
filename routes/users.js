const express = require('express');
const router = express.Router();

const { allUsers, register, login, confirmLogin, logout, seedUsers } = require('../controllers/users-controller');

router.get("/all", allUsers);

router.post("/register", express.json(), register);

router.post("/login", express.json(), login, confirmLogin);

router.post("/logout", logout);

router.post("/seed-users", seedUsers)

module.exports = router;