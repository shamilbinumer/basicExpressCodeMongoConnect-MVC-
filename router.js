const express = require('express');
const router = express.Router();
const { createUser } = require('./controller');

// Define routes
router.post('/users', createUser);

module.exports = router;
