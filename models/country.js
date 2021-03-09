const {Schema, model} = require('mongoose')

const schema = new Schema({
    lang: {
        EN:{
            country: String,
            capitalCity: String
        },
        RU:{
            country: String,
            capitalCity: String
        }
    },
    currency: String
})

module.exports = model('countries', schema)