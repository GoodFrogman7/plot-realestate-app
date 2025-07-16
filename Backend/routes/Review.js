const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Add a review
router.post('/', async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all reviews for a listing
router.get('/listing/:listingId', async (req, res) => {
  try {
    const reviews = await Review.find({ listingId: req.params.listingId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 