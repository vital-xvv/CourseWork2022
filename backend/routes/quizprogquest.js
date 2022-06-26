const router = require('express').Router();
const ProgrammingQuestion  = require('../models/ProgramingQuestion.js')

router.get("/", async(req, res) => {
    try {
        const questions = await ProgrammingQuestion.find();
        res.status(201).json(questions);
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    } 
})

module.exports = router;