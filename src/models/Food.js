const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name: String,
    healthy: Boolean
});

module.exports = mongoose.model('Food', FoodSchema);