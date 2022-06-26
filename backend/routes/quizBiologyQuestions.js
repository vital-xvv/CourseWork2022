const router = require('express').Router();
const BiologyQuestion  = require('../models/BiologyQuestions.js')

router.get("/", async(req, res) => {
    try {
        const questions = await BiologyQuestion.find();
        res.status(201).json(questions);
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    } 
})

module.exports = router;