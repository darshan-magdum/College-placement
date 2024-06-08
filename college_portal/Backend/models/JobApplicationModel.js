
const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String, required: true },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'JobPosting' },
  resume: { type: String }
});

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

module.exports = JobApplication;
