
const mongoose = require('mongoose');

const delivery_schema = mongoose.Schema({
    delivery_name:String,
    delivery_number:Number
})

var delivery = mongoose.model("delivery",delivery_schema)

module.exports = delivery