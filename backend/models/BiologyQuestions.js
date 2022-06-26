const mongoose = require('mongoose')
const {Schema} = require('mongoose')



const biologyQuestionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    rightAnswer: {
        type: Number,
        required: true
    },
})

const BiologyQuestion = mongoose.model('quiz-biology-question', biologyQuestionSchema)

module.exports = BiologyQuestion 