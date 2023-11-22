const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');

// POST endpoint for creating a new schedule
router.post('/', async (req, res) => {
  try {
    const { fullName, email, date, major } = req.body;

    // Create a new schedule instance
    const newSchedule = new Schedule({ fullName, email, date, major });

    // Save the schedule to the database
    await newSchedule.save();

    res.status(201).json(newSchedule);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add more routes as needed...

module.exports = router;
