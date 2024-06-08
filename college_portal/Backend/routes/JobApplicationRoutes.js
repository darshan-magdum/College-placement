
const express = require('express');
const router = express.Router();
const JobApplication = require('../models/JobApplicationModel');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// job application Post Request
router.post('/post', upload.single('resume'), async (req, res) => {
  try {
    const { studentName, contactNumber, email, department, jobId } = req.body;
    let resumeFilePath = ''; // Initialize resume file path variable

    // Check if a resume file was included in the request
    if (req.file) {
      resumeFilePath = req.file.path; // Get the file path of the uploaded resume
    }

    // Create a new job application instance
    const application = new JobApplication({ studentName, contactNumber, email, department, jobId, resume: resumeFilePath });
    
    // Save the job application to the database
    await application.save();

    // Send response indicating success
    res.status(201).json(application);
  } catch (error) {
    console.error('Error submitting job application:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// job application GetAll Request
router.get('/Getall', async (req, res) => {
  try {
    const applications = await JobApplication.find().populate('jobId');
    res.json(applications);
  } catch (error) {
    console.error('Error fetching job applications:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//job application Delete Request
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    
    const deletedApplication = await JobApplication.findByIdAndDelete(id);
    if (!deletedApplication) {
      return res.status(404).json({ error: 'Job application not found' });
    }
    res.status(200).json({ message: 'Job application deleted successfully' });
  } catch (error) {
    console.error('Error deleting job application:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
