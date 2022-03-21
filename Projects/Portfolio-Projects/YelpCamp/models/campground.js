const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Campground Schema Setup
const CampgroundSchema = new Schema({
  title: String,
  image: String,
  price: Number,
  description: String,
  location: String,
});

module.exports = mongoose.model('Campground', CampgroundSchema);
