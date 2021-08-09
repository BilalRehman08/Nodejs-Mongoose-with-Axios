const mongoose = require("mongoose")

const schema = mongoose.Schema({
    title: String,
    description: String,
    created_on: { type: Date, default: Date.now }
})

const postmodel = mongoose.model('post', schema)




const signupschema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    created_on: { type: Date, default: Date.now }
})

const signuppostmodel = mongoose.model('user', signupschema)

module.exports = postmodel
module.exports = signuppostmodel