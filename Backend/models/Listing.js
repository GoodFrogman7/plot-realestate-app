const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  city: { type: String, required: true },
  type: { type: String, enum: ['rent', 'sale', 'sublease'], required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  owner: { type: String, required: true },
  images: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Listing', ListingSchema); 