const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    userName: {type: String, required: true, unique: true, trim: true},
    password: {type: String, required: true},
    photo: {
        type: String, required: false
    },
    likedPosts: [{ type: Types.ObjectId, ref: 'likedPosts' }]
})

module.exports = model('User', schema)