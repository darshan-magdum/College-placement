

const express = require('express');
const router = express.Router();
const Application = require('../models/ApplicationModel');
const JobPosting = require('../models/JobPosting'); 
const User = require('../models/user'); 


// Get all applications
router.get('/GetallAppliedJobs', async (req, res) => {
  try {
    const applications = await Application.find()
      .populate({
        path: 'jobId', 
        select: '-__v' 
      })
      .populate({
        path: 'userId', 
        select: '-password -__v' 
      })
      .select('-__v'); 

    res.json(applications);
  } catch (err) {
    console.error('Error fetching applications:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});








// Create a new application Post Request
router.post('/jobsapply', async (req, res) => {
  try {
    const { studentName, contactNumber, email, department, jobId } = req.body;

 
    const newApplication = await Application.create({ studentName, contactNumber, email, department, jobId });

    
    const jobDetails = await JobPosting.findById(jobId);

    
    if (jobDetails) {
      res.status(201).json({ newApplication, jobDetails, studentInfo: req.body.studentInfo });
    } else {
      
      res.status(201).json({ newApplication, studentInfo: req.body.studentInfo });
    }
  } catch (err) {
    console.error('Error creating application:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Get by ID
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
