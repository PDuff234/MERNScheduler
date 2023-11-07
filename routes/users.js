// routes/users.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// POST api/users/register
router.post('/register', async (req, res) => {
  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    // Create a new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      role: req.body.role,
      password: hashedPassword,
    });

    // Save the user
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
