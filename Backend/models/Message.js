const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  listingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing', required: true },
  fromUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  toUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true }, // Encrypted message
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', MessageSchema); 