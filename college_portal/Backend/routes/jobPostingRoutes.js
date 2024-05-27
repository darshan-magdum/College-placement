const express = require('express');
const router = express.Router();
const JobPosting = require('../models/JobPosting');

// Create a new job posting
router.post('/jobPostings', async (req, res) => {
  try {
    const jobPosting = new JobPosting(req.body);
    await jobPosting.save();
    res.status(201).send(jobPosting);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all job postings
router.get('/jobPostings', async (req, res) => {
  try {
    const jobPostings = await JobPosting.find();
    res.send(jobPostings);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a single job posting by ID
router.get('/jobPostings/:id', async (req, res) => {
  try {
    const jobPosting = await JobPosting.findById(req.params.id);
    if (!jobPosting) {
      return res.status(404).send({ message: 'Job posting not found' });
    }
    res.send(jobPosting);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a job posting by ID
router.patch('/jobPostings/:id', async (req, res) => {
  try {
    const jobPosting = await JobPosting.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!jobPosting) {
      return res.status(404).send({ message: 'Job posting not found' });
    }
    res.send(jobPosting);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a job posting by ID
router.delete('/jobPostings/:id', async (req, res) => {
  try {
    const jobPosting = await JobPosting.findByIdAndDelete(req.params.id);
    if (!jobPosting) {
      return res.status(404).send({ message: 'Job posting not found' });
    }
    res.send(jobPosting);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
