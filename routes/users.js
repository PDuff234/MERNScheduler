// routes/users.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Route to create a new user
router.post('/create', async (req, res) => {
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

    res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('An error occurred while creating user:', error);
      res.status(500).json({ error: 'Failed to create user' });
  }
});

module.exports = router;
