const mongoose = require("mongoose")

const signupschema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    created_on: { type: Date, default: Date.now }
})

const signuppostmodel = mongoose.model('user', signupschema)

module.exports = signuppostmodel