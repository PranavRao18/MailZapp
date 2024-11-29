const express = require('express');
const { register, login, protected } = require('../controllers/auth');

const router = express.Router();

// Register Route
router.post('/register', register);

// Login Route
router.post('/login', login);

// Protected Route Example
router.get('/protected', protected);

module.exports = router;
