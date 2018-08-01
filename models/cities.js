var mongoose = require('mongoose');

var CitySchema = new mongoose.Schema({
    city_name: String,
    created_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('City', CitySchema);