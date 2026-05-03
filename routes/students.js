const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Get all students for a school
router.get('/school/:schoolId', async (req, res) => {
  const students = await Student.find({ schoolId: req.params.schoolId }).sort({ createdAt: -1 });
  res.json(students);
});

// Get single student
router.get('/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) return res.status(404).json({ error: 'Student not found' });
  res.json(student);
});

// Create student
router.post('/', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.status(201).json(student);
});

// Update student
router.put('/:id', async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!student) return res.status(404).json({ error: 'Student not found' });
  res.json(student);
});

// Delete student
router.delete('/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Student deleted' });
});

// Bulk delete students
router.post('/bulk-delete', async (req, res) => {
  const { ids } = req.body;
  await Student.deleteMany({ _id: { $in: ids } });
  res.json({ message: `${ids.length} students deleted` });
});

module.exports = router;
