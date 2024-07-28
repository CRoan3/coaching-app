const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
const tokenService = require('../JSutilities/jwt_gen');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
    // ... user registration logic
});

router.post('/login', async (req, res) => {
    // ... user login logic
});

router.post('/logout', async (req, res) => {
    // ... token invalidation logic
});

router.post('/refresh', async (req, res) => {
    // ... token refresh logic
});

module.exports = router;
