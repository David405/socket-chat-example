const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    content: {
        type: String
    },
    authorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    recipientID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }
},
  { timestamps: true }
)

const chat = mongoose.model('chat',chatSchema)

module.exports = chat