/**
 * Created by Memeza on 2/8/2019.
 */
var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  grocer: String,
  stock: Number,
  updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);
