const mongoose = require('mongoose');



const AdditioninfoPostingSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Description: { type: String, required: true },
  Category: { type: String, enum: ['JobPreparation', 'others'], required: true },
  PostedDate: { type: Date, required:true}
});

const AdditioninfoPosting = mongoose.model('AdditioninfoPosting', AdditioninfoPostingSchema);

module.exports = AdditioninfoPosting;

