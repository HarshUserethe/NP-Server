const express = require("express");
const Record = require("../models/Records");
const router = express.Router();

// Get all records
router.get("/", async (req, res) => {
  const records = await Record.find();
  res.json(records);
});

// Create new record
router.post("/", async (req, res) => {
  const record = new Record(req.body);
  await record.save();
  res.status(201).json(record);
});

// Update record
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updated = await Record.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
});

module.exports = router;
