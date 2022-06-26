const mongoose = require('mongoose')
const {Schema} = require('mongoose')



const programmingQuestionSchema = new Schema({
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

const ProgrammingQuestion = mongoose.model('quiz-programming-question', programmingQuestionSchema)

module.exports = ProgrammingQuestion 