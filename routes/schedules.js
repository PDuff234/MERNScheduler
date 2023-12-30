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
    const savedSchedule = await newSchedule.save();

    res.status(201).json(savedSchedule);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
