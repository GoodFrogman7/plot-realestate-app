const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Send a message
router.post('/', async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all messages for a listing
router.get('/listing/:listingId', async (req, res) => {
  try {
    const messages = await Message.find({ listingId: req.params.listingId });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 