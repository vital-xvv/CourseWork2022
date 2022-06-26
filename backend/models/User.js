const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const Joi = require('joi')
const jwt = require('jsonwebtoken')
const passwordComplexity = require('joi-password-complexity')


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    todos : {
        type: [Object],
        required: false
    }
})

const User = mongoose.model('User', userSchema)


const validate = (userData) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
    })
    return schema.validate(userData)
}

module.exports = { User, validate }