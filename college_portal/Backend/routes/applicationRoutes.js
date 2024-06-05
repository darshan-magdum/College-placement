

const express = require('express');
const router = express.Router();
const Application = require('../models/ApplicationModel');

// Get all applications
router.get('/Getall', async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (err) {
    console.error('Error fetching applications:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new application
router.post('/jobsapply', async (req, res) => {
  try {
    const { studentName, contactNumber, email, department, jobId } = req.body;
    const newApplication = await Application.create({ studentName, contactNumber, email, department, jobId });
    res.status(201).json(newApplication);
  } catch (err) {
    console.error('Error creating application:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get an application by ID
router.get('/:id', async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    res.json(application);
  } catch (err) {
    console.error('Error fetching application:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router;
