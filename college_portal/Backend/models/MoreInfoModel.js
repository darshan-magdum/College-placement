const { string } = require('joi');
const mongoose = require('mongoose');


const moreInfoSchema = new mongoose.Schema({
  address: { type: String, required: false },
  interest: { type: String, required: false },
  department: { type: String, required: false },
  studyingYear: { type: String, required: false },
  resume: { type: String, required: false }, 
  marks10th: { type: Number, required: false },
  marks12thDiploma: { type: Number, required: false },
  engineeringFirstYear: { type: Number, required: false },
  engineeringSecondYear: { type: Number, required: false },
  engineeringThirdYear: { type: Number, required: false },
  engineeringLastYear: { type: Number, required: false },
  paramid:{ type: String, required: false }


});






const MoreInfo = mongoose.model('MoreInfo', moreInfoSchema);

module.exports = MoreInfo;
