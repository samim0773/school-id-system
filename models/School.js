const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String },
  phone: { type: String },
  email: { type: String },
  website: { type: String },
  logoUrl: { type: String },
  selectedTemplate: { type: String, default: 'classic' },
  primaryColor: { type: String, default: '#1a237e' },
  secondaryColor: { type: String, default: '#e8eaf6' },
  accentColor: { type: String, default: '#c5a028' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('School', schoolSchema);
