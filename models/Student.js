const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  schoolId: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true },
  name: { type: String, required: true },
  rollNo: { type: String, required: true },
  class: { type: String, required: true },
  section: { type: String },
  dateOfBirth: { type: String },
  bloodGroup: { type: String },
  address: { type: String },
  parentName: { type: String },
  parentPhone: { type: String },
  emergencyPhone: { type: String },
  photoUrl: { type: String },
  validYear: { type: String, default: () => {
    const now = new Date();
    return `${now.getFullYear()}-${now.getFullYear() + 1}`;
  }},
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Student', studentSchema);
