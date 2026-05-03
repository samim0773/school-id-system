const express = require('express');
const router = express.Router();
const School = require('../models/School');

// Get all schools
router.get('/', async (req, res) => {
  const schools = await School.find().sort({ createdAt: -1 });
  res.json(schools);
});

// Get single school
router.get('/:id', async (req, res) => {
  const school = await School.findById(req.params.id);
  if (!school) return res.status(404).json({ error: 'School not found' });
  res.json(school);
});

// Create school
router.post('/', async (req, res) => {
  const school = new School(req.body);
  await school.save();
  res.status(201).json(school);
});

// Update school
router.put('/:id', async (req, res) => {
  const school = await School.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!school) return res.status(404).json({ error: 'School not found' });
  res.json(school);
});

// Delete school
router.delete('/:id', async (req, res) => {
  await School.findByIdAndDelete(req.params.id);
  res.json({ message: 'School deleted' });
});

module.exports = router;
