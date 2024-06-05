

const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  studentName: String,
  contactNumber: String,
  email: String,
  department: String,
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'JobPosting' },
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
