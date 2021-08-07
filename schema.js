const mongoose = require("mongoose")

const schema = mongoose.Schema({
    title: String,
    description: String,
    created_on: { type: Date, default: Date.now }
})

const postmodel = mongoose.model('post', schema)
module.exports = postmodel