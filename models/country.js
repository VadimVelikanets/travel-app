const {Schema, model} = require('mongoose')

const schema = new Schema({
    lang: {
        EN:{
            country: String,
            capitalCity: String,
            description: String
        },
        RU:{
            country: String,
            capitalCity: String,
            description: String
        },
        DE:{
            country: String,
            capitalCity: String,
            description: String
        }
    },
    currency: String,
    videoUrl: String,
    mapUrl: String,
    countryImg: String
})

module.exports = model('countries', schema)