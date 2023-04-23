const mongoose = require('mongoose');

const shop_schema = mongoose.Schema({
    shop_name:String,
    address:String
})

var shops = mongoose.model("shops",shop_schema)

module.exports = shops