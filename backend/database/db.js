const mongoose = require('mongoose')
const colors = require('colors')

const connectDatabase =  () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    try {
        mongoose.connect(String(process.env.DB), connectionParams)
        console.log("Database connected successfully".bgGreen)
    } catch (error) {
        console.log("Database connection failed".bgRed)
    }
}

module.exports = connectDatabase