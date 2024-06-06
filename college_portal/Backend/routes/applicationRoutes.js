

const express = require('express');
const router = express.Router();
const Application = require('../models/ApplicationModel');
const JobPosting = require('../models/JobPosting'); // Import the JobPosting model


// Get all applications

router.get('/Getall', async (req, res) => {
  try {
    const applications = await Application.find()
      .populate('jobId') // Populate the associated job details
      .select('-__v'); // Exclude the __v field from the result

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

    // Create the application
    const newApplication = await Application.create({ studentName, contactNumber, email, department, jobId });

    // Fetch the job details corresponding to the jobId
    const jobDetails = await JobPosting.findById(jobId);

    // If jobDetails are found, include them in the response along with studentInfo
    if (jobDetails) {
      res.status(201).json({ newApplication, jobDetails, studentInfo: req.body.studentInfo });
    } else {
      // If jobDetails are not found, respond only with the newApplication
      res.status(201).json({ newApplication, studentInfo: req.body.studentInfo });
    }
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
