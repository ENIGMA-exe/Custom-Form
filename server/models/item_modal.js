const mongoose = require('mongoose');

const item_schema = mongoose.Schema({
    name:String,
    quantity:Number
})

var item = mongoose.model("item",item_schema)
module.exports = item
