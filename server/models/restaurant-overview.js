const mongoose = require('mongoose');
const db = require('../db/index.js');
mongoose.Promise = global.Promise;

const overviewSchema = new mongoose.Schema({
  title: String,
  review: Number,
  num_of_reviews: Number,
  price_per_person_low: String,
  price_per_person_high: String,
  category: String,
  top_tags: [String],
  description: String
});

const Overview = mongoose.model('Overview', overviewSchema);

module.exports = Overview;