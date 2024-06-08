const express = require('express');
const router = express.Router();
const AdditioninfoPosting = require('../models/AdditioninfoPosting');

// Create a new additional information posting
router.post('/infopost', async (req, res) => {
  try {
    const additionalInfoPosting = new AdditioninfoPosting(req.body);
    await additionalInfoPosting.save();
    res.status(201).send(additionalInfoPosting);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all additional information postings
router.get('/infoget', async (req, res) => {
  try {
    const additionalInfoPostings = await AdditioninfoPosting.find();
    res.send(additionalInfoPostings);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get by ID
router.get('/additionalInfoPostings/:id', async (req, res) => {
  try {
    const additionalInfoPosting = await AdditioninfoPosting.findById(req.params.id);
    if (!additionalInfoPosting) {
      return res.status(404).send({ message: 'Additional information posting not found' });
    }
    res.send(additionalInfoPosting);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update an additional information posting by ID
router.patch('/additionalInfoPostings/edit/:id', async (req, res) => {
  try {
    const additionalInfoPosting = await AdditioninfoPosting.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!additionalInfoPosting) {
      return res.status(404).send({ message: 'Additional information posting not found' });
    }
    res.send(additionalInfoPosting);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete an additional information posting by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const additionalInfoPosting = await AdditioninfoPosting.findByIdAndDelete(req.params.id);
    if (!additionalInfoPosting) {
      return res.status(404).send({ message: 'Additional information posting not found' });
    }
    res.send(additionalInfoPosting);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
