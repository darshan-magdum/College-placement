const mongoose = require('mongoose');



const jobPostingSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  logo: { type: String, required: true },
  status: { type: String, enum: ['Active', 'Expired'], required: true },
  applyTill: { type: Date, required: true },
  criteria10th: { type: String, required: true },
  criteria12thDiploma: { type: String, required: true },
  criteriaEngineering: { type: String, required: true },
  description: { type: String, required: true }
});

const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

module.exports = JobPosting;

