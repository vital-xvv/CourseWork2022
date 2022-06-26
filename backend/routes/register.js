const bcrypt = require('bcrypt')
const router = require('express').Router();
const {validate, User} = require('../models/User.js')


router.post("/", async (req, res) => {
    try {
        const {error} = validate(req.body);
        if(error) {
            return res.status(400).json({message: error.message});
        }

        const user = await User.findOne({email: req.body.email});
        if(user) {
            return res.status(400).json({message: "The user with given email already exists."});
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        await new User({...req.body, password: hashedPassword}).save();
        res.status(201).json({message: "User created successfully"});
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
})

module.exports = router;